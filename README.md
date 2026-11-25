# ui

Accessible, themeable React components that you copy into your project and own, the way shadcn/ui works. Each one ships with sensible defaults, and you can change anything: variants, sizes, radius, tokens, sound.

> **Status: early.** 18 components so far. Docs: run `npm run dev` and open `/docs`. Names and APIs may still change.

## Install

The components are distributed as a [shadcn registry](https://ui.shadcn.com/docs/registry). You need a React project with Tailwind CSS v4 and a `components.json` (`npx shadcn init`).

1. Add the registry to `components.json`:

   ```json
   {
     "registries": {
       "@yanisneverlies": "https://ui.yanisneverlies.com/r/{name}.json"
     }
   }
   ```

2. Add components. The theme, `cn()` and the sound helper come along automatically:

   ```sh
   npx shadcn add @yanisneverlies/button @yanisneverlies/card
   ```

3. Declare the UI SDK layer, then import the tokens after Tailwind, in your global CSS. `@layer ui-sdk;` must come first, so your styles win over UI SDK's behavior CSS:

   ```css
   @layer ui-sdk;
   @import "tailwindcss";
   @import "../styles/ui.css";
   ```

## Components

Behavior comes from [UI SDK](https://ui-sdk.dev) (`@ui-sdk/react` and `@ui-sdk/core`). The CLI installs both.

| Component | What it does |
|---|---|
| `button` | Primary, secondary, tonal, ghost, destructive and link variants, three sizes plus icon sizes, `render` prop, pending state, optional sound. |
| `card` | A shell frame with a raised panel and concentric corners, or a single surface. |
| `badge` | A quiet label on a tinted ground: seven tones, rect or pill, two sizes. |
| `kbd` | Keyboard hints, either flat, as a keycap, or on a primary button. |
| `switch` | Two sizes, plays the toggle cue when sound is on. |
| `checkbox` | Independent options with groups and an indeterminate state. |
| `input` | Single-line text with prefix and suffix groups and a clear button. |
| `textarea` | Multi-line text that matches `input`. |
| `field` | Label, description and error for a control, plus field sets and groups. |
| `select` | Choose one or several from a popup list. |
| `segmented-control` | A compact row of exclusive options. |
| `tabs` | Switch between panels of related content. |
| `accordion` | Sections that expand and collapse. |
| `dialog` | A modal for a focused task or a confirmation. |
| `popover` | Floating content beside its trigger. |
| `tooltip` | A short name or hint for a control, with an optional shortcut. |
| `menu` | Actions from a button or a right click. |
| `toast` | A status message. A new toast replaces the last. |

## Theming

All colors, radii, type sizes, shadows and easings live in `styles/ui.css` as Tailwind v4 `@theme` tokens. Change a value there and every component follows.

- **Token names match shadcn/ui** (`background`, `foreground`, `muted-foreground`, `primary`…), so these components sit next to any shadcn component.
- **Dark mode** applies under `.dark` or `[data-theme="dark"]`.
- **Fonts** are Inter for text and Apfel Grotezk for display, loaded through Fontsource.
- **One knob for corners.** `--radius` (default 12px) drives every corner. A shell card adds its inset (default 8px) on top, so the panel inside and a trailing footer button share one curve:

  ```tsx
  <Card className="[--card-inset:12px]">…</Card>
  ```

- **Per-instance changes** go through `className`, and tailwind-merge resolves conflicts: `<Button className="rounded-full">`.

## Sound

Sound is off until you opt in. Wrap the app in `SoundProvider` and give users a visible mute:

```tsx
import { SoundProvider, useSound } from "@/lib/sound"

<SoundProvider>{app}</SoundProvider>

const { enabled, setEnabled } = useSound()
<Switch checked={enabled} onCheckedChange={setEnabled} sound={false} />
```

Components take a `sound` prop: a [cuelume](https://github.com/Danilaa1/cuelume) cue name, a cue with options, or `false`.

```tsx
<Button sound={{ name: "success", emphasis: "subtle" }}>Copy quote</Button>
```

Buttons are silent by default. A switch plays `toggle`. Use sounds to confirm something the user just did, and never play them on hover or on page load.

## Use it with an agent

An agent skill teaches a coding agent how to build with these components. Install it in your project:

```sh
npx skills add yanisneverlies/ui
```

The docs site also publishes Markdown for agents: `https://ui.yanisneverlies.com/llms.txt` is the index, `/llms-full.txt` is every page, and any docs page works as `/docs/<page>.md`.

## Develop

The repo is one Next.js app: the landing page at `/`, the docs at `/docs` (built with [Fumadocs](https://fumadocs.dev)), and the registry at `/r/*.json`.

```sh
npm install
npm run dev             # http://localhost:3000
npm run typecheck
npm run build           # rebuilds public/r/*.json, then the site
```

| Path | What it holds |
|---|---|
| `src/components/ui/` | The components. This is what the registry ships. |
| `src/lib/utils.ts`, `src/lib/sound.tsx` | `cn()` and the sound provider, also shipped. |
| `src/styles/ui.css` | The tokens, shipped as the `theme` item. |
| `src/examples/` | Docs examples. Each page shows an example's exact source. |
| `content/docs/` | Docs pages in MDX. API tables come from the components' TypeScript types. |
| `registry.json` | What the registry ships. Commit `public/r/` after `npm run registry:build`. |

## License

[MIT](LICENSE)
