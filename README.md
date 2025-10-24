# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying to Vercel

This project can be deployed to Vercel as a static site. Vercel will run the `build` script from `package.json` and serve the `dist/` folder.

1. (Optional) Install the Vercel CLI:

```powershell
npm i -g vercel
```

2. From the project root run (interactive):

```powershell
vercel login
vercel --prod
```

Alternatively, connect the repository in the Vercel dashboard and set:

- Build Command: `npm run build`
- Output Directory: `dist`

The included `vercel.json` provides an SPA fallback to `index.html` for client-side routing.

Notes:
- If your site is hosted on a subpath (unusual for Vercel), set `base` in `vite.config.js`.
- After deployment, Vercel will provide a URL; for custom domains, configure via the Vercel dashboard.

---

# Portfolio React (M. Prem)

> A personal portfolio website built with React and Vite. It showcases projects, skills, certificates, education, contact details and a downloadable resume. The project is optimized for static hosting (Vercel) and includes minor build optimizations and code-splitting for heavier features.

## Key features

- Single-page React app built with Vite for fast dev server and production builds
- Responsive pages: Home, About, Skills, Projects, Certificates, Education, Contact, Resume
- Lazy-loaded 3D canvas (Three.js via @react-three) to keep the initial bundle small
- Certificates data sorted newest-first and displayed with links to the PDF files
- Optimized Rollup manualChunks configuration to split large vendor bundles
- Easy deploy to Vercel with SPA fallback (`vercel.json` provided)

## Quick start (development)

Prerequisites:

- Node.js 18+ (LTS recommended)
- npm (bundled with Node)

Install dependencies:

```powershell
npm install
```

Start dev server with Vite (PowerShell):

```powershell
npm run dev
```

Open http://localhost:5173 (or the port Vite prints) to view the site.

## Build (production)

```powershell
npm run build
```

The static output will be in the `dist/` directory. You can preview with:

```powershell
npm run preview
```

## Deploy to Vercel

1. (Optional) Install the Vercel CLI:

```powershell
npm i -g vercel
```

2. Deploy interactively from the project root:

```powershell
vercel login
vercel --prod
```

Or connect the repository in the Vercel dashboard and configure:

- Build Command: `npm run build`
- Output Directory: `dist`

This repository includes a `vercel.json` with an SPA fallback route so client-side routing works correctly.

## Notes about changes made during cleanup

- Removed several unused dependencies (they were present in `package.json` but not referenced by the app):
	- @react-pdf-viewer/*, pdfjs-dist, react-pdf, lottie-react, powerbi-client-react, react-simple-typewriter, react-tsparticles, tsparticles, @tsparticles/*
- Backed up one large unused component:
	- `src/components/SkillCategory.jsx` was moved to `cleanup-backup/remove-unused-20251024/SkillCategory.jsx` (safe rollback available)
- Added lazy-loading to the 3D canvas to reduce initial bundle size.

If you need any of the removed packages restored, reinstall them with `npm install <pkg>` and adjust imports as needed.

## Troubleshooting

- `public/*` image references: Vite may log that some `public/images/*` files "didn't resolve at build time" — this is okay when images are referenced via absolute paths in runtime code and will be served from `/public` at runtime. If you prefer build-time inlining, import images from `src` instead.
- Large `three` bundle: using Three.js will keep a sizable chunk in the final build. To reduce the initial download size further, move additional three-dependent components behind dynamic imports or remove 3D features.

## File structure (top-level)

- `src/` — React source files
- `public/` — static assets (images, certificates, PDF files)
- `vite.config.js` — Vite configuration and build optimizations
- `vercel.json` — Vercel config for static-build and SPA fallback

## Contributing

If you want to contribute or make changes:

1. Create a branch for your work.
2. Run `npm install` and `npm run dev` to test locally.
3. Make small, focused commits and open a PR.

## License & Copyright

Copyright © 2025 M. Prem. All rights reserved.

If you want this project to be MIT/Apache etc., tell me and I can add a LICENSE file.

