# What I Learnt

`whatIlearnt.md` was still empty in the repo, so this page is a starter scaffold
pulled from decisions already visible in the codebase. Replace or expand each
section as the project grows - that's the point of keeping it in docs instead
of a throwaway note.

## Electron + Vite

- `vite.config.ts` sets `base: './'` so the built `dist/index.html` can be
  loaded with `file://` instead of assuming a web server is running.
- `public/electron.cjs` always points the `BrowserWindow` at the built
  `dist/index.html`, not the Vite dev server - so `npm run dev` (browser
  preview) and `npm run electron` (desktop shell) are two distinct
  workflows, not one command.
- A `preload.cjs` script is wired up via `webPreferences.preload`, keeping
  the renderer from touching Node/Electron APIs directly.

## UI as a small state machine

The timer view is really three states - idle, work, break - each swapping in
its own GIF and button image. Modelling it with a handful of `useState` hooks
in `App.tsx` kept it simple, but it's the kind of thing that starts wanting a
reducer once more states (e.g. paused) get added.

## Packaging a frameless window

`frame: false` and a fixed `width`/`height` in `BrowserWindow` gets the
"lives in your taskbar" feel, at the cost of writing a custom close button
(`ipcMain.on('close-app', ...)`) instead of relying on the OS chrome.

## Open questions / things to fill in

- [ ] What was the trickiest bug, and how was it found?
- [ ] Why Electron over a lighter tray-only framework (e.g. Tauri)?
- [ ] Anything you'd redo differently about the asset pipeline (GIFs, audio)?
- [ ] What surprised you about packaging/distributing an Electron app?
