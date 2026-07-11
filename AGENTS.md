# AGENTS.md — Portfolio of Trao An Huy

Guidance for AI agents (and humans) working in this repository.

## What this is

Personal portfolio website of **Trao An Huy** — AI Engineer / Data Science
graduate (VNU-HCMC). Single-page React app deployed to GitHub Pages at
`https://huytrao.github.io/portfolioweb`.

## Stack

- **React 18 + Vite 4** (`npm run dev` / `npm run build` / `npm run preview`)
- **Tailwind CSS 3** — config in `tailwind.config.cjs`
- **framer-motion** — scroll-reveal animations via variants in `src/utils/motion.js`
- **three.js / @react-three/fiber / drei** — 3D hero (desktop PC model in `public/desktop_pc/`)
- **react-vertical-timeline-component** — experience timeline
- Deploy: `npm run deploy` (gh-pages, publishes `dist/`)

## Layout

```
src/
  App.jsx               # section order: Navbar → Hero → About → Experience → Tech → Works → Feedbacks → Contact
  styles.js             # shared typography/spacing class strings
  index.css             # design tokens, nav-blur, cta-button/link, card, canvas loader
  constants/index.js    # ALL content: nav links, services, technologies, experiences, certifications, projects
  components/           # one file per section; exported through components/index.js
  components/canvas/    # three.js canvases (Computers used in Hero)
  hoc/SectionWrapper.jsx# wraps each section: padding, max-width, motion stagger, anchor id
```

**Content changes go in `src/constants/index.js`** — components are
presentation-only. Personal facts should match the owner's CV (AI/DL, robotics,
data engineering, MLOps; Vingroup AI in Action; VNU-HCMC Data Science).

## Design system — Apple-style minimalism (do not break this)

The site intentionally follows Apple's design language: clarity, deference,
restraint. When adding anything, remove before you add.

**Tokens** (Tailwind `theme.extend.colors` + `index.css`):

| Token       | Value     | Use                              |
|-------------|-----------|----------------------------------|
| `primary`   | `#ffffff` | page background                  |
| `surface`   | `#f5f5f7` | cards (`.card`)                  |
| `ink`       | `#1d1d1f` | primary text                     |
| `secondary` | `#6e6e73` | supporting text                  |
| `accent`    | `#0071e3` | CTA only (`.cta-button`, `.cta-link`) |

**Rules:**

1. **One focal point per section.** Big headline, short supporting line, at
   most one primary CTA.
2. **System font stack** (SF Pro on Apple devices). No Google Fonts, no
   decorative typefaces.
3. **No gradients, no glows, no text-shadows, no tilt effects, no decorative
   box-shadows.** Depth comes from the `surface` gray on white, plus generous
   white space.
4. **Blue (`accent`) is reserved for actions.** Never use it for decoration or
   headings.
5. **Motion is subtle**: fades and small translates through the existing
   `utils/motion.js` variants. No attention-grabbing animation.
6. **Typography hierarchy lives in `styles.js`** — use `heroHeadText`,
   `sectionHeadText`, `sectionSubText` instead of inventing new sizes.
7. Every new section must be wrapped in `SectionWrapper(Component, "anchor-id")`
   and its anchor added to `navLinks` only if it deserves navigation.

## Gotchas

- Windows dev machine; paths contain a space (`D:\a project\portfolioweb`) — quote them.
- `package.json` `homepage` points at `huytrao.github.io/huytrao web`-style URL; Vite `base` may need matching when deploy paths change.
- The 3D model lighting was tuned for the white background (`Computers.jsx`); if the hero looks washed out or muddy after changes, adjust lights there, not CSS filters.
- `dist/` is committed build output — never hand-edit it; regenerate with `npm run build`.
- No test suite. Verify changes with `npm run build` + `npm run dev` and a visual check.
