# Pomorodo Desktop

Pomorodo Desktop is a simple app designed to comfortably sit in your Windows/macOS
taskbar, easy to reach whenever a focus session or a break is due.

It's an Electron + React + TypeScript rebuild of the classic Pomodoro technique -
no accounts, no sync, no bloat. Just a tiny window that alternates between work
and break for you.

## Features

- **Work mode** - runs for 25 minutes with the `work.gif` animation playing while
  you focus.
- **Break mode** - automatically follows for 5 minutes with the `break.gif`
  animation, then hands back to idle.
- **Idle state** - the app sits quietly in the background between sessions.
- Randomized encouragement messages shown per session.
- Frameless, fixed-size window that stays out of the way.

## Preview

<div class="screenshot-grid" markdown>
<figure markdown>
  ![Idle screen](assets/screenshots/idle-screen.png)
  <figcaption>Homepage / idle</figcaption>
</figure>
<figure markdown>
  ![Work timer screen](assets/screenshots/work-screen.png)
  <figcaption>Work timer</figcaption>
</figure>
<figure markdown>
  ![Break timer screen](assets/screenshots/break-screen.png)
  <figcaption>Break timer</figcaption>
</figure>
</div>

## Where to go next

- [Install](install.md) - get it running locally, or build the desktop app.
- [What I Learnt](what-i-learnt.md) - notes from building this project.
- [Changelog](changelog.md) - the latest commits, pulled live from GitHub.
- [Credits](credits.md) - assets, tutorials and tools this project stands on.

This documentation lives in [`/docs`](https://github.com/abbasjhanjhi010/pomorodo-desktop/tree/testing-website/docs)
and is built with [MkDocs](https://www.mkdocs.org/) - use the GitHub link in the
header for source, issues and the full commit history.
