# joshuaopata.com

Personal portfolio site. Built with Create React App + Tailwind CSS, hosted on Firebase.

## Local development

```bash
npm install
npm start          # http://localhost:3000
```

## Content lives in JSON

Editing the site usually means editing data, not JSX:

- [src/data/projects.json](src/data/projects.json) — project cards (Eban, Pentecost, etc.)
- [src/data/skills.json](src/data/skills.json) — skill tiles (categorized: highlight / frontend / backend)
- [src/data/services.json](src/data/services.json) — services section
- [src/data/blogs.json](src/data/blogs.json) — blogs section
- [src/sections/Header.jsx](src/sections/Header.jsx) — bio text, years of experience, location

When adding a skill icon, follow the conventions in [public/img/skills/README.md](public/img/skills/README.md) — `xmlns` is required, dark fills won't be visible on the dark navy background.

## External tools

- **Project screenshots / device mockups** — [shots.so](https://shots.so) (free): drag in a raw screenshot, pick a browser / phone / tablet frame, export at 2x. Used to keep screenshots in `projects.json` consistent.
- **Skill icons** — [devicon.dev](https://devicon.dev) and [simpleicons.org](https://simpleicons.org). Details in [public/img/skills/README.md](public/img/skills/README.md).

## Deployment

**Automatic** — pushing to `main` triggers [.github/workflows/firebase-hosting-merge.yml](.github/workflows/firebase-hosting-merge.yml), which runs `npm ci && npm run build` and deploys to Firebase Hosting (project `joshuaopata-portfolio`).

**PR previews** — opening a PR triggers [.github/workflows/firebase-hosting-pull-request.yml](.github/workflows/firebase-hosting-pull-request.yml), which posts a unique preview URL as a comment.

**Manual fallback**:

```bash
npm run build
firebase deploy
```

The GitHub Action depends on the `FIREBASE_SERVICE_ACCOUNT_JOSHUAOPATA_PORTFOLIO` repo secret.
