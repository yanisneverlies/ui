# Contract

Read this before you change anything. It says how the repo is shaped, who owns which file, and the rules every change follows. Update it when you change a boundary.

## What this repo is

One Next.js app (Fumadocs) that is three things:

- `/`: the landing page (`src/app/(home)`, `src/components/site/`).
- `/docs`: the docs (`content/docs/*.mdx`, `src/components/docs/`, `src/examples/`).
- `/r/*.json`: a shadcn registry built from `registry.json` into `public/r/` by `npm run registry:build`.

The library itself is what the registry ships: `src/components/ui/*`, `src/lib/utils.ts`, `src/lib/sound.tsx`, `src/styles/ui.css`.

## Layers

| Layer | Path | May import |
|---|---|---|
| Tokens | `src/styles/ui.css` | nothing |
| Library | `src/components/ui/*.tsx` | `@ui-sdk/react/*`, `class-variance-authority`, `lucide-react`, `@/lib/utils`, `@/lib/sound`, `./popup-classes`, each other |
| Helpers | `src/lib/utils.ts`, `src/lib/sound.tsx` | `clsx`, `tailwind-merge`, `cuelume` |
| Examples | `src/examples/*.tsx` | the library, `lucide-react`, `next/link` |
| Docs UI | `src/components/docs/*`, `src/components/search/*` | anything |
| Site | `src/app/*`, `src/components/site/*` | anything |

The library never imports from docs, site or examples. Behavior (focus, keyboard, ARIA, popups, dismissal) comes from UI SDK (`@ui-sdk/react`); our files only add styling, defaults and our own props (`variant`, `size`, `sound`). Never re-implement behavior UI SDK has.

## How a library component looks

- `"use client"`, import UI SDK parts under a `…Part` alias, wrap each part we style, re-export parts we don't.
- Classes go through `cx(base, className)` from `@/lib/utils`, so `className` can still be a function of the part's state.
- Style state with UI SDK's data attributes (`data-open`, `data-checked`, `data-highlighted`, `data-starting-style`, `data-ending-style`), never with React state.
- Floating content uses `popupSurface` and `popupMotion` from `./popup-classes`.
- Our own props live in an exported `<Name>OwnProps` interface with JSDoc and `@defaultValue`, so the docs' API table can read them.
- Named exports at the end of the file.

## Design rules (from the design brief)

- Spacing only 4 / 8 / 12 / 16 / 24 / 32 / 48 (Tailwind 1, 2, 3, 4, 6, 8, 12).
- At most four type sizes per screen: `text-small` 13, `text-body` 15, `text-title` 20, `text-display` 40 (`text-lead` 17 only on the landing page).
- No dividing borders or `<hr>`; separate with space and tone. Kept on purpose: the 3:1 `border-input` edge on inputs, select and combobox boxes, checkboxes, radios and the slider thumb; the keycap Kbd; and the `ring-background` gap between overlapping avatars.
- Primary (`#dd3400`) is for the one main action. Orange text uses `brand-strong`. `destructive` is for errors only.
- Motion 150–300 ms, ease-out in, ease-in out. Reduced motion keeps opacity only.
- Real content only: no lorem, no placeholder names. Use Seneca's letters (public-domain Gummere translation), this repo's own data, or plausible product settings.
- American English, sentence case, buttons are verbs.

## Ownership right now

One owner per file. If you need a change in a file you don't own, say so in your report instead of making it. The spec for the current batch is `specs/batch-3.md`.

| Owner | Files |
|---|---|
| Lead | `CONTRACT.md`, `API.md`, `DECISIONS.md`, `specs/*`, `src/lib/*`, `src/styles/*`, `src/components/ui/popup-classes.ts`, existing `src/components/ui/*` files except `accordion.tsx` (Fix pass owns it now), `src/examples/index.ts`, `content/docs/components/meta.json`, `src/components/mdx.tsx`, `registry.json` |
| Fix pass (batch 3) | all batch 3 components, examples and docs pages, plus `src/components/ui/accordion.tsx` and `src/app/global.css` |
| Overlays (done) | `alert-dialog`, `drawer`, `hover-card`, `command`: their `src/components/ui/<name>.tsx`, `src/examples/<name>-*.tsx`, `content/docs/components/<name>.mdx` |
| Forms | `combobox`, `radio`, `slider`, `toggle`: same three kinds of file |
| Display | `progress`, `avatar`, `scroll-area`, `collapsible`: same three kinds of file |

## Commands

- Typecheck: `npx tsc --noEmit`. Safe to run any time.
- Examples check: `npm run check`. Fails if an example passes a function or uses a hook without "use client". `npm run build` runs it first.
- Do not run `next build` or `next dev`: several agents share this folder and the build output. The lead builds.
- Registry check: `npx shadcn build` (Registry owner only).
