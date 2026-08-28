# Repository Guidelines

## Project Structure & Module Organization

This static GitHub Pages site is published at `https://illlust.github.io/`. The root `index.html` is the profile and navigation hub, linking to `/resume/`, `/gallery/`, and future sections. `gallery/` contains HTML, supporting files in `css/`, `js/`, and `img/`, plus feature folders such as `gift/`, `portfolio/`, and `vogue/`. Keep the resume under `resume/`; its `index.html` redirects to `preview.html`, with fonts in `assets/` and design research in `references/`.

## Build, Test, and Development Commands

No dependency installation or compile step is required. The local server automatically syncs and watches the resume project while it runs:

```powershell
python scripts/serve.py
```

Then visit `http://localhost:8000/`, `http://localhost:8000/resume/`, or `http://localhost:8000/gallery/`. Before submitting, use `git diff --check` to catch whitespace errors and `git status --short` to confirm only intended files changed. Do not introduce a package manager solely for a small static-page edit.

## Coding Style & Naming Conventions

Follow the edited file's style: gallery HTML commonly uses four-space indentation, while resume pages use two spaces. Prefer semantic HTML, UTF-8, and small page-specific changes. Use lowercase hyphenated names for new pages and assets, such as `project-detail.html`. Use root-relative primary navigation and relative asset paths. Do not rename legacy binary assets without updating every reference.

## Privacy & Identifiers

Public design brands and synthetic test contacts may remain. Never add the site owner's real name, personal phone number in any format, or employer names and variants to tracked files, generated artifacts, staged changes, commits, pull requests, or Git history. Before syncing resume content or committing, scan for owner identifiers and anonymize every match. Responses may discuss identifiers when requested.

## Testing Guidelines

There is no automated test suite or coverage target. Manually verify every changed page at common desktop and mobile widths. Check browser developer tools for missing assets, JavaScript errors, broken redirects, and unexpected horizontal scrolling. For asset changes, confirm image dimensions and loading behavior over the local server. Files named `gallery/test.*` are historical content, not a test harness.

## Commit & Pull Request Guidelines

Recent commits use short, focused subjects such as `add: gallery` and Korean action phrases like `conv.html 업데이트`. Keep each commit limited to one logical change and write a concise imperative subject. Pull requests should summarize affected paths, explain visible behavior changes, list manual verification performed, and link any related issue. Include before/after screenshots for layout, typography, or image changes; avoid committing editor settings or unrelated generated files.
