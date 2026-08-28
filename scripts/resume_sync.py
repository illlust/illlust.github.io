"""Synchronize the external resume preview into the static Pages site."""

from __future__ import annotations

import argparse
import filecmp
import shutil
import subprocess
from pathlib import Path


REPOSITORY_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SOURCE_ROOT = Path(r"..\..\resumetest1")
SOURCE_RESUME_NAME = "resume.html"
SOURCE_CATALOG_RELATIVE_PATH = Path("references") / "awesome-design-md" / "getdesign" / "catalog.json"
VALIDATION_SCRIPT_RELATIVE_PATH = Path("scripts") / "validate_public_resume.ps1"
FONT_NAMES = (
    "PretendardVariable.woff2",
    "IBMPlexMono-Regular.woff2",
    "IBMPlexMono-Medium.woff2",
    "IBMPlexMono-SemiBold.woff2",
    "IBMPlexMono-Bold.woff2",
    "LICENSE-Pretendard.txt",
    "LICENSE-IBM-Plex.txt",
)


def copy_file(source: Path, destination: Path) -> bool:
    if not source.is_file():
        raise FileNotFoundError(f"Required source file was not found: {source}")
    if destination.is_file() and filecmp.cmp(source, destination, shallow=False):
        return False
    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, destination)
    print(f"Synced {destination.relative_to(REPOSITORY_ROOT)}")
    return True


def validate_public_resume(source_root: Path) -> None:
    """Run the source repository's privacy gate before copying public files."""
    validation_script = source_root / VALIDATION_SCRIPT_RELATIVE_PATH
    if not validation_script.is_file():
        raise FileNotFoundError(
            f"Public resume validation script was not found: {validation_script}"
        )

    powershell = shutil.which("pwsh") or shutil.which("powershell")
    if powershell is None:
        raise FileNotFoundError(
            "PowerShell was not found; public resume privacy validation cannot run."
        )

    print(f"[privacy] 검증 시작: {validation_script}", flush=True)
    result = subprocess.run(
        [
            powershell,
            "-NoProfile",
            "-ExecutionPolicy",
            "Bypass",
            "-File",
            str(validation_script),
            "-ProjectRoot",
            str(source_root),
        ],
        cwd=source_root,
        check=False,
    )
    if result.returncode != 0:
        message = (
            "[privacy] 검증 실패: 공개 파일 동기화를 중단합니다 "
            f"(exit code {result.returncode})."
        )
        print(message, flush=True)
        raise ValueError(message)
    print("[privacy] 검증 성공: 공개 파일 동기화를 진행합니다.", flush=True)


def sync_preview(source_root: Path, destination_root: Path) -> bool:
    source = source_root / "preview.html"
    if not source.is_file():
        raise FileNotFoundError(f"Required source file was not found: {source}")

    content = source.read_text(encoding="utf-8")
    replacements = {
        "output/assets/fonts/PretendardVariable.woff2": "assets/fonts/PretendardVariable.woff2",
        "output/assets/fonts/IBMPlexMono-Regular.woff2": "assets/fonts/IBMPlexMono-Regular.woff2",
        f"output/{SOURCE_RESUME_NAME}": "resume.html",
    }
    for old, new in replacements.items():
        if old not in content:
            raise ValueError(f"Expected path was not found in preview.html: {old}")
        content = content.replace(old, new)

    destination = destination_root / "preview.html"
    if destination.is_file() and destination.read_text(encoding="utf-8") == content:
        return False
    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("w", encoding="utf-8", newline="\n") as file:
        file.write(content)
    print(f"Synced {destination.relative_to(REPOSITORY_ROOT)}")
    return True


def source_files(source_root: Path) -> list[Path]:
    source_output = source_root / "output"
    files = [
        source_root / "preview.html",
        source_root / "concepts.js",
        source_output / SOURCE_RESUME_NAME,
        source_root / SOURCE_CATALOG_RELATIVE_PATH,
    ]
    files.extend(source_output / "assets" / "fonts" / name for name in FONT_NAMES)
    references = source_root / "references" / "awesome-design-md"
    if references.is_dir():
        files.extend(path for path in references.rglob("*") if path.is_file())
    return sorted(files, key=lambda path: str(path).lower())


def source_signature(source_root: Path) -> tuple[tuple[str, int, int], ...]:
    signature = []
    for path in source_files(source_root):
        try:
            stat = path.stat()
            signature.append((str(path), stat.st_mtime_ns, stat.st_size))
        except OSError:
            signature.append((str(path), -1, -1))
    return tuple(signature)


def sync_bundle(source_root: Path = DEFAULT_SOURCE_ROOT) -> bool:
    source_root = source_root.resolve()
    validate_public_resume(source_root)
    source_output = source_root / "output"
    destination_root = REPOSITORY_ROOT / "resume"
    changed = sync_preview(source_root, destination_root)
    changed |= copy_file(source_root / "concepts.js", destination_root / "concepts.js")
    changed |= copy_file(source_output / SOURCE_RESUME_NAME, destination_root / "resume.html")

    source_fonts = source_output / "assets" / "fonts"
    destination_fonts = destination_root / "assets" / "fonts"
    for name in FONT_NAMES:
        changed |= copy_file(source_fonts / name, destination_fonts / name)

    source_references = source_root / "references" / "awesome-design-md"
    if not source_references.is_dir():
        raise FileNotFoundError(f"Required source directory was not found: {source_references}")
    for source in source_references.rglob("*"):
        if source.is_file():
            destination = destination_root / "references" / "awesome-design-md"
            changed |= copy_file(source, destination / source.relative_to(source_references))
    catalog = destination_root / SOURCE_CATALOG_RELATIVE_PATH
    if not catalog.is_file():
        raise FileNotFoundError(f"Required catalog was not synced: {catalog}")
    return changed


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Sync the static resume for GitHub Pages.")
    parser.add_argument(
        "source",
        nargs="?",
        type=Path,
        default=DEFAULT_SOURCE_ROOT,
        help=f"resume project directory (default: {DEFAULT_SOURCE_ROOT})",
    )
    return parser.parse_args()


def main() -> None:
    try:
        changed = sync_bundle(parse_args().source)
    except (FileNotFoundError, OSError, ValueError) as error:
        raise SystemExit(str(error)) from error
    if not changed:
        print("Resume preview is already up to date.")

