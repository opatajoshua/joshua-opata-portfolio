# Skill Icon Registry

This folder holds the logos rendered in [SkillsSection.jsx](../../../src/sections/SkillsSection.jsx). Each entry in [skills.json](../../../src/data/skills.json) references a file in here by name.

## Conventions when adding a new icon

1. **Always include `xmlns="http://www.w3.org/2000/svg"`** on the root `<svg>` tag. Without it, browsers refuse to render the SVG when loaded via `<img src>` — the icon will be silently invisible.
2. **The skills section sits on a dark navy background** (`#1E2235` / `#23263A`). Black fills are invisible. For monochrome logos, set `fill="#fff"`. For brand-colored logos, use the official brand hex.
3. **Use `viewBox="0 0 128 128"`** when possible — keeps icons visually consistent with the existing set.
4. **Append a row to the table below** so the source isn't lost.

## Icons added 2026-05 (session with Claude)

All six pasted from third-party icon collections (most likely [devicon.dev](https://devicon.dev) — the `viewBox="0 0 128 128"` format and lack of `xmlns` is their signature). xmlns + fill adjustments applied locally.

| File | Logo | Likely source | Fill |
|---|---|---|---|
| `nestjs.svg` | NestJS | devicon.dev | `#df234f` (brand red) |
| `react-native.svg` | React Native | devicon.dev (React atom mark) | `#61dafb` (React cyan) |
| `expo.svg` | Expo (the "A" mountain mark) | devicon.dev | `#fff` (was unfilled / black) |
| `docker.svg` | Docker whale | devicon.dev | Full brand palette |
| `google-cloud.svg` | Google Cloud | devicon.dev | Google red/blue/green/yellow |
| `opentelemetry.svg` | OpenTelemetry | opentelemetry.io brand assets | `#f5a800` + `#425cc7` |

## Legacy icons (sources to fill in as you remember)

Filename patterns suggest a mix of [icons8.com](https://icons8.com) (the `-icon.svg` suffix is their signature) and official brand kits / [vectorlogo.zone](https://vectorlogo.zone). Fill in below when you re-source one.

| File | Source | Notes |
|---|---|---|
| `amazon_aws-icon.svg` | _icons8 (likely)_ | |
| `apache.svg` | _Unknown_ | |
| `bootstrap.svg` | _Unknown_ | |
| `dotnet.svg` | _Unknown_ | |
| `electronjs-icon.svg` | _icons8 (likely)_ | |
| `emberjs.svg` | _Unknown_ | |
| `feathers.png` | _Unknown_ | PNG, not SVG |
| `firebase.svg` | _Unknown_ | |
| `flutter.svg` | _Unknown_ | |
| `graphql.svg` | _Unknown_ | |
| `html.svg` | _Unknown_ | |
| `ionic.svg` | _Unknown_ | |
| `java.svg` | _Unknown_ | |
| `javascript.svg` | _Unknown_ | |
| `laravel.svg` | _Unknown_ | |
| `linux.svg` | _Unknown_ | |
| `mongodb-realm.svg` | _Unknown_ | |
| `mongodb.svg` | _Unknown_ | |
| `mysql.svg` | _Unknown_ | |
| `nginx.svg` | _Unknown_ | |
| `nodejs.svg` | _Unknown_ | |
| `photoshop.svg` | _Unknown_ | |
| `php.svg` | _Unknown_ | |
| `postgresql.svg` | _Unknown_ | |
| `react.svg` | _Unknown_ | |
| `redis.svg` | _Unknown_ | |
| `sass.svg` | _Unknown_ | |
| `sketchapp.svg` | _Unknown_ | |
| `tailwindcss.svg` | _Unknown_ | |
| `typescript.svg` | _Unknown_ | |
| `vuejs.png` | _Unknown_ | PNG, not SVG |

## Recommended sources for future icons

- **[devicon.dev](https://devicon.dev)** — covers nearly every tech stack, consistent style, MIT licensed. Default choice.
- **Official brand kits** — most authoritative; usually under each project's "Brand" or "Press" page.
- **[simpleicons.org](https://simpleicons.org)** — monochrome SVG, ideal when you want a single color across all tiles.
- **[icons8.com](https://icons8.com)** — matches a few existing icons here, but free tier requires attribution.
