# Chau Vu Kiet — Portfolio

A personal portfolio for a full-stack / platform engineer, designed as a control plane: the
systems from the CV are laid out as a fleet board, each with the quantity that describes it.

🌐 [Live site](https://profile-rouge-mu.vercel.app/)

## Content

All copy comes from the CV in `cv/main_example.tex` and lives in exactly one place:
[`frontend/src/data/cv.ts`](frontend/src/data/cv.ts). Every user-facing string is a
`{ en, vi }` pair. To update the site after a CV change, edit that file — the pages read
from it. The backend seed at `backend/src/seeds/data.ts` mirrors the same content.

Numbers shown on the board (`6 remotes`, `4 agent engines`, `11 services`) are facts stated
in the CV, not live telemetry. The only genuinely live reading is the Ho Chi Minh City clock
in the status rail.

## Built with

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — styling, via `@tailwindcss/vite`
- [shadcn/ui](https://ui.shadcn.com/) — component source, on Radix primitives
- [Motion](https://motion.dev/) — page-load and reveal animation
- [lucide-react](https://lucide.dev/) — icons
- Archivo + IBM Plex Mono, self-hosted through [Fontsource](https://fontsource.org/)
- Express + Mongoose (`backend/`), not yet wired to the frontend

## Getting started

Requires Node.js 20 or newer.

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build
npm run lint
```

The backend is a separate workspace:

```bash
cd backend
npm install
npm run dev      # needs MONGODB_URI, defaults to mongodb://localhost:27017/portfolio
npm run seed
```

## Routes

| Path          | Contents                                                        |
| ------------- | --------------------------------------------------------------- |
| `/`           | Hero, fleet board, summary, current role, core competencies      |
| `/systems`    | The five platforms, expandable, with the CV's own wording        |
| `/experience` | Three roles, education, languages, achievements                  |
| `/contact`    | Email, phone, LinkedIn, location                                 |

`/projects` and `/about` redirect to `/systems` and `/experience`, so older links still work.

## Project structure

```
frontend/src/
├── components/
│   ├── site/       # Panel, FleetBoard, SiteHeader, SiteFooter, StatusDot
│   └── ui/         # shadcn components
├── data/cv.ts      # single source of truth, bilingual
├── i18n/           # LanguageProvider, useLang, interface copy
├── hooks/
├── layouts/
└── pages/
```

## Language

The site ships in English and Vietnamese. The initial language follows the browser, the
toggle in the header overrides it, and the choice persists in `localStorage`.

## Contact

Chau Vu Kiet

- Email: chauvukietcma123@gmail.com
- Phone: +84 837 541 890
- LinkedIn: [chau-vu-kiet](https://www.linkedin.com/in/chau-vu-kiet-59810735a)
- GitHub: [KietMm](https://github.com/KietMm)
