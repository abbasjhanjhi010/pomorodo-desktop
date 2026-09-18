# Working agreements for this repo

- **No Claude attribution.** Do not add `Co-Authored-By: Claude ...` or
  `Claude-Session: ...` lines to commit messages or PR descriptions.
- **Confirm before committing code changes.** Show the diff/plan and get
  explicit go-ahead before running `git commit` on anything that changes
  source, config, or workflow files (`.ts`/`.tsx`/`.cjs`, `package.json`,
  `mkdocs.yml`, `.github/workflows/*`, etc.).
  - Exception: skip the check-in when permission is already implied by the
    request itself (e.g. "do X and update the docs accordingly" covers both).
  - Exception: once the user says something like "okay, proceed," full
    autonomy applies for the rest of that task - make whatever changes are
    needed to finish it without pausing again.
- Docs content changes (`docs/*.md`) and asset files don't need the same
  check-in unless the request is ambiguous.

# Project context

Pomorodo Desktop - an Electron + React + TypeScript + Vite Pomodoro timer
app, packaged with electron-builder (NSIS `.exe` / `.dmg`). Docs site is
MkDocs + Material, in `docs/`, deployed to GitHub Pages via
`.github/workflows/deploy-docs.yml`. Installers are built by
`.github/workflows/build-installers.yml` on `v*` tag pushes (or manual
dispatch), one job per OS (`windows-latest`, `macos-latest`).
