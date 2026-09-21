# Install

Pomorodo Desktop is an [Electron](https://www.electronjs.org/) app built on
[Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript. Pomorodo desktop allows users to either download through an installer or using Node.js and Git.


## Download

#### Windows Installer

- [Windows (.exe)](https://github.com/abbasjhanjhi010/pomorodo-desktop/releases/latest/download/Pomorodo.Desktop.Setup.0.1.0.exe)

#### MacOS Installer
- [macOS Apple Silicon (.dmg)](https://github.com/abbasjhanjhi010/pomorodo-desktop/releases/latest/download/Pomorodo.Desktop-0.1.0-arm64.dmg)


## Manual Node.js and Git 

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer, with npm
- [Git](https://git-scm.com/)

## 1. Clone the repository

```bash
git clone https://github.com/abbasjhanjhi010/pomorodo-desktop.git
cd pomorodo-desktop
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run it

The web UI and the Electron shell are two separate scripts:

```bash
# Preview the UI in a regular browser tab, with hot reload
npm run dev
```

```bash
# Build the UI once, then launch it inside the Electron window
npm run build
npm run electron
```

The Electron window always loads the compiled app from `dist/`, so re-run
`npm run build` after any change before re-launching `npm run electron`.

## 4. Lint (optional)

```bash
npm run lint
```

## Building a distributable

There's no packaging script wired up yet (see the
[changelog](changelog.md) for what's in progress). In the meantime,
`npm run build` produces a `dist/` folder you can load with
`npm run electron`, or package yourself with a tool like
[electron-builder](https://www.electron.build/).

!!! note
    This page describes the current build-from-source workflow. Once a
    packaged release exists, download links will be added here.
