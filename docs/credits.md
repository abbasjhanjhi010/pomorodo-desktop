# Credits

<div class="credit-card" markdown>
![Abbas Jhanjhi](https://avatars.githubusercontent.com/u/104298022?v=4){.avatar}

**Pomorodo Desktop** is designed and built by **M. Abbas Jhanjhi**.

<span class="socials">
[Personal site](https://abbasii.dev) ·
[GitHub @abbasjhanjhi010](https://github.com/abbasjhanjhi010)
</span>
</div>

This is an independent, personal project - not affiliated with any company.

## App assets & references

Resources used while building the application itself:

| Resource | Used for |
|---|---|
| [Pomodoro app tutorial](https://www.youtube.com/watch?v=K9eHZugy6lc&t=347s) | Base walkthrough this project started from |
| [work_faster assets (lovesulei)](https://github.com/lovesulei/work_faster/tree/main/src/assets) | Partial UI assets |
| [Idle GIF](https://de.pinterest.com/pin/123567583520407358/) | Idle-state animation |
| [Work GIF](https://media.baamboozle.com/uploads/images/218402/165884845_30216_gif-url.gif) | Work-state animation |

---

## Documentation site credits

This docs site (the `docs/` folder + `mkdocs.yml` you're looking at right now)
was assembled by taking specific, deliberate pieces from a handful of existing
open-source project sites rather than cloning any single one of them. Recorded
here as a template - fill in the "used for" column with specifics if you swap
or add references later.

| Project | License | What was used |
|---|---|---|
| [Material for MkDocs](https://github.com/squidfunk/mkdocs-material) (squidfunk) | MIT | The whole theme/framework this site runs on - static-site generator, the light/dark palette toggle, the repo-stats header card, instant navigation. |
| [FastAPI docs](https://github.com/fastapi/fastapi) (tiangolo) | MIT | Reference for organizing a small multi-page doc set (Home / Install / reference pages) and using the theme's built-in GitHub repo link instead of a custom badge row. |
| [Starlette docs](https://github.com/encode/starlette) (encode) | MIT | Reference for keeping a single-maintainer project's docs deliberately plain - no landing-page marketing, straight into content. |
| [GitHub Primer](https://github.com/primer) design system | MIT | Colour tokens, border radius, and the system-font stack in `docs/stylesheets/extra.css`, so the site reads like a GitHub repo page rather than a themed doc site. |

None of these projects' code was copied - `mkdocs.yml` and `docs/stylesheets/extra.css`
were written for this repo, informed by patterns visible in the sites above.
Their own licenses (all MIT) are linked next to each entry.

### Tooling

- [MkDocs](https://www.mkdocs.org/) - static site generator.
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - theme.

!!! note "Keeping this template up to date"
    If more open-source references get pulled in later, add a row above with
    the project, its license, and the specific thing borrowed (a layout
    idea, a color token, a plugin config) - not just a link. That's what
    makes this table useful as a template instead of a link dump.
