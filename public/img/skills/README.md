# Skill Icon Registry

This folder holds the logos rendered in [SkillsSection.jsx](../../../src/sections/SkillsSection.jsx). Each entry in [skills.json](../../../src/data/skills.json) references a file in here by name.  


Icon sites: [devicon.dev](https://devicon.dev) , [https://simpleicons.org/](https://simpleicons.org/)

## Conventions when adding a new icon

1. **Always include `xmlns="http://www.w3.org/2000/svg"`** on the root `<svg>` tag. Without it, browsers refuse to render the SVG when loaded via `<img src>` — the icon will be silently invisible.
2. **The skills section sits on a dark navy background** (`#1E2235` / `#23263A`). Black fills are invisible. For monochrome logos, set `fill="#fff"`. For brand-colored logos, use the official brand hex.
3. **Use `viewBox="0 0 128 128"`** when possible — keeps icons visually consistent with the existing set.
4. **Append a row to the table below** so the source isn't lost.

## Icons added 2026-05 (session with Claude)

All six pasted from third-party icon collections (most likely [devicon.dev](https://devicon.dev) — the `viewBox="0 0 128 128"` format and lack of `xmlns` is their signature). xmlns + fill adjustments applied locally.


| File                | Logo                         | Likely source                 | Fill                          |
| ------------------- | ---------------------------- | ----------------------------- | ----------------------------- |
| `nestjs.svg`        | NestJS                       | devicon.dev                   | `#df234f` (brand red)         |
| `react-native.svg`  | React Native                 | devicon.dev (React atom mark) | `#61dafb` (React cyan)        |
| `expo.svg`          | Expo (the "A" mountain mark) | devicon.dev                   | `#fff` (was unfilled / black) |
| `docker.svg`        | Docker whale                 | devicon.dev                   | Full brand palette            |
| `google-cloud.svg`  | Google Cloud                 | devicon.dev                   | Google red/blue/green/yellow  |
| `opentelemetry.svg` | OpenTelemetry                | opentelemetry.io brand assets | `#f5a800` + `#425cc7`         |
| `trpc.svg`          | tRPC                         | trpc.io brand                 | `#398ccb` (blue) + `#fff`     |
| `drizzle.svg`       | Drizzle ORM                  | simpleicons.org               | `#c5f74f` (lime)              |


## Legacy icons (sources to fill in as you remember)

Filename patterns suggest a mix of [icons8.com](https://icons8.com) (the `-icon.svg` suffix is their signature) and official brand kits / [vectorlogo.zone](https://vectorlogo.zone). Fill in below when you re-source one.


| File                  | Source            | Notes        |
| --------------------- | ----------------- | ------------ |
| `amazon_aws-icon.svg` | *icons8 (likely)* |              |
| `apache.svg`          | *Unknown*         |              |
| `bootstrap.svg`       | *Unknown*         |              |
| `dotnet.svg`          | *Unknown*         |              |
| `electronjs-icon.svg` | *icons8 (likely)* |              |
| `emberjs.svg`         | *Unknown*         |              |
| `feathers.png`        | *Unknown*         | PNG, not SVG |
| `firebase.svg`        | *Unknown*         |              |
| `flutter.svg`         | *Unknown*         |              |
| `graphql.svg`         | *Unknown*         |              |
| `html.svg`            | *Unknown*         |              |
| `ionic.svg`           | *Unknown*         |              |
| `java.svg`            | *Unknown*         |              |
| `javascript.svg`      | *Unknown*         |              |
| `laravel.svg`         | *Unknown*         |              |
| `linux.svg`           | *Unknown*         |              |
| `mongodb-realm.svg`   | *Unknown*         |              |
| `mongodb.svg`         | *Unknown*         |              |
| `mysql.svg`           | *Unknown*         |              |
| `nginx.svg`           | *Unknown*         |              |
| `nodejs.svg`          | *Unknown*         |              |
| `photoshop.svg`       | *Unknown*         |              |
| `php.svg`             | *Unknown*         |              |
| `postgresql.svg`      | *Unknown*         |              |
| `react.svg`           | *Unknown*         |              |
| `redis.svg`           | *Unknown*         |              |
| `sass.svg`            | *Unknown*         |              |
| `sketchapp.svg`       | *Unknown*         |              |
| `tailwindcss.svg`     | *Unknown*         |              |
| `typescript.svg`      | *Unknown*         |              |
| `vuejs.png`           | *Unknown*         | PNG, not SVG |


## Recommended sources for future icons

- **[devicon.dev](https://devicon.dev)** — covers nearly every tech stack, consistent style, MIT licensed. Default choice.
- **Official brand kits** — most authoritative; usually under each project's "Brand" or "Press" page.
- **[simpleicons.org](https://simpleicons.org)** — monochrome SVG, ideal when you want a single color across all tiles.
- **[icons8.com](https://icons8.com)** — matches a few existing icons here, but free tier requires attribution.

