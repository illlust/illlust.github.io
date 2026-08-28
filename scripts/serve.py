"""Serve this repository locally with GitHub Pages-like static routing."""

from __future__ import annotations

import argparse
import mimetypes
import os
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from resume_sync import DEFAULT_SOURCE_ROOT, source_signature, sync_bundle


REPOSITORY_ROOT = Path(__file__).resolve().parent.parent
mimetypes.add_type("font/woff2", ".woff2")


class PagesRequestHandler(SimpleHTTPRequestHandler):
    """Serve static files without exposing directory listings."""

    def list_directory(self, path: str):  # type: ignore[override]
        self.send_error(404, "File not found")
        return None

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Preview the GitHub Pages site locally.")
    parser.add_argument("--port", type=int, default=8000, help="local port (default: 8000)")
    parser.add_argument(
        "--resume-source",
        type=Path,
        default=DEFAULT_SOURCE_ROOT,
        help=f"resume project to watch (default: {DEFAULT_SOURCE_ROOT})",
    )
    parser.add_argument(
        "--no-resume-sync",
        action="store_true",
        help="serve the committed resume snapshot without watching its source",
    )
    return parser.parse_args()


def watch_resume(source_root: Path, stop_event: threading.Event) -> None:
    previous = source_signature(source_root)
    while not stop_event.wait(0.75):
        current = source_signature(source_root)
        if current == previous:
            continue
        try:
            sync_bundle(source_root)
            previous = source_signature(source_root)
        except (FileNotFoundError, OSError, ValueError) as error:
            previous = current
            print(f"Resume sync blocked; it will retry after the next change: {error}")


def main() -> None:
    args = parse_args()
    source_root = args.resume_source.resolve()
    stop_event = threading.Event()
    watcher = None
    if not args.no_resume_sync and source_root.is_dir():
        try:
            sync_bundle(source_root)
        except (FileNotFoundError, OSError, ValueError) as error:
            raise SystemExit(f"Could not sync the resume preview: {error}") from error
        watcher = threading.Thread(
            target=watch_resume,
            args=(source_root, stop_event),
            name="resume-sync",
            daemon=True,
        )
        watcher.start()
        print(f"Watching resume source: {source_root}")
    elif not args.no_resume_sync:
        print(f"Resume source not found; serving the committed snapshot: {source_root}")

    os.chdir(REPOSITORY_ROOT)
    try:
        server = ThreadingHTTPServer(("127.0.0.1", args.port), PagesRequestHandler)
    except OSError as error:
        raise SystemExit(
            f"Could not use port {args.port}. Choose another one with --port. ({error})"
        ) from error
    print(f"Serving {REPOSITORY_ROOT} at http://127.0.0.1:{args.port}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    finally:
        stop_event.set()
        if watcher is not None:
            watcher.join(timeout=2)
        server.server_close()


if __name__ == "__main__":
    main()
