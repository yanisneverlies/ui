# ui

Accessible, themeable React components that you copy into your project and own, the way shadcn/ui works. Each one ships with sensible defaults, and you can change anything: variants, sizes, radius, tokens, sound.

> **Status: early.** Five components so far. Names and APIs may still change.

## Install

The components are distributed as a [shadcn registry](https://ui.shadcn.com/docs/registry). You need a React project with Tailwind CSS v4 and a `components.json` (`npx shadcn init`).

1. Add the registry to `components.json`:

   ```json
   {
     "registries": {
       "@yanisneverlies": "https://raw.githubusercontent.com/yanisneverlies/ui/main/public/r/{name}.json"
     }
   }
   ```

2. Add components. The theme, `cn()` and the sound helper come along automatically:

   ```sh
   npx shadcn add @yanisneverlies/button @yanisneverlies/card
   ```

3. Import the tokens after Tailwind in your global CSS:

   ```css
   @import "tailwindcss";
   @import "../styles/ui.css";
   ```

## Components

| Component | What it does |
|---|---|
| `button` | Primary, secondary, tonal, ghost, danger and link variants, three sizes plus icon sizes, `asChild`, optional sound. |
| `card` | A shell frame with a raised panel and concentric corners, or a single surface. |
| `badge` | A quiet label on a tinted ground: six tones, rect or pill, two sizes. |
| `kbd` | Keyboard hints, either flat, as a keycap, or on a primary button. |
| `switch` | Built on Radix, two sizes, plays the toggle cue when sound is on. |

## Theming

All colors, radii, type sizes, shadows and easings live in `styles/ui.css` as Tailwind v4 `@theme` tokens. Change a value there and every component follows.

- **Dark mode** applies under `.dark` or `[data-theme="dark"]`.
- **Fonts** are Inter for text and Apfel Grotezk for display, loaded through Fontsource.
- **Concentric corners.** A shell card sets `--card-radius` (default 20px) and `--card-inset` (default 8px). The inner panel and a trailing footer button use `radius − inset`, so the curves line up at any size:

  ```tsx
  <Card className="[--card-radius:28px] [--card-inset:12px]">…</Card>
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

## Develop

```sh
npm install
npm run dev             # preview app with every component, light and dark
npm run typecheck
npm run registry:build  # writes public/r/*.json; commit the output
```

## License

[MIT](LICENSE)
