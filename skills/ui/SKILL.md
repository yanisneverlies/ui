---
name: ui
description: Builds interfaces with the yanisneverlies/ui React component library (shadcn-style registry, built on UI SDK). Covers which components exist, how to import and compose them, the render prop, the design tokens, and the design checklist. Use whenever a project has components in src/components/ui from this library, imports from "@/components/ui/...", or the user mentions yanisneverlies/ui.
---

# Build with ui

`ui` is a React component library you copy into a project with the shadcn CLI. Behavior (focus, keyboard, ARIA, popups) comes from UI SDK (`@ui-sdk/react`). The files in `src/components/ui/` add styling, defaults and a few props. You own those files and can read them.

## Read first

- The docs site publishes Markdown for agents: `/llms.txt` is the index, `/llms-full.txt` is every page, and any docs page works as `/docs/<page>.md`.
- Read a component's page before you use it. It shows the parts, how they nest and the props.
- For behavior the component doesn't document, read the UI SDK docs in `node_modules/@ui-sdk/react/docs/llms.txt`.
- Don't read compiled JavaScript in `node_modules`.

## Components

Import each from `@/components/ui/<name>`.

- `button`: runs an action. Variants `primary`, `secondary`, `tonal`, `ghost`, `destructive`, `link`; sizes `sm`, `md`, `lg`, `icon-sm`, `icon`, `icon-lg`.
- `badge`: a quiet label on a tinted ground. Tones, rect or pill.
- `card`: a shell card with a raised panel, or a single surface.
- `kbd`: a keyboard hint, flat or as a keycap.
- `switch`: turns a setting on or off.
- `checkbox`: independent options, with `CheckboxGroup`.
- `input`: single-line text, with `InputGroup` and `InputClear`.
- `textarea`: multi-line text that matches `input`.
- `field`: label, description and error for a control. Also `FieldSet`, `FieldGroup`.
- `select`: choose from a popup list.
- `segmented-control`: a compact row of exclusive options.
- `tabs`: switch between panels.
- `accordion`: sections that expand.
- `dialog`: a modal for a focused task or a confirmation.
- `popover`: content beside its trigger.
- `tooltip`: a short name or hint for a control.
- `menu`: actions from a button or a right click.
- `toast`: a status message. One at a time; a new one replaces the last.

`popup-classes` is shared by the floating components. Don't import it in app code.

Add a missing component with `npx shadcn add @yanisneverlies/<name>`. The CLI installs its dependencies.

## API rules

- **`render`, never `asChild` or `as`.** Pass the element: `<Button render={<Link href="/docs" />}>Docs</Button>`.
- **State has three props:** `open`, `defaultOpen`, `onOpenChange(open, details)`. Same for `value` and `checked`. Use `defaultX` to start, or `x` plus `onXChange` to control. The new value comes first.
- **Nothing selected is `null`,** never `undefined`.
- **Async actions are pending.** Return a Promise from `onClick`, `onSelect` or `onAction`. The part shows `data-pending` and `aria-busy` and ignores repeats until it settles.
- **Names are fixed:** `variant`, `size`, `tone`, `side`, `align`, `current` (not `active`), `multiple`, `loop`, `keepMounted`, `closeOnSelect`. Alignment along text is `start`, `center`, `end`.
- **Every component takes `className`,** merged last. It can also be a function of the part's state.
- **Style from state attributes:** `data-slot`, `data-open`, `data-checked`, `data-highlighted`. Never generated ids.
- **Name every control.** Use the label part (`FieldLabel`, `DialogTitle`) or `aria-label`. Icon buttons need `aria-label`.

## Tokens

Names match shadcn: `background`, `foreground`, `muted`, `muted-foreground`, `primary`, `primary-foreground`, `destructive`, `input` (the edge color, as `border-input`). Use them as Tailwind classes (`bg-background`, `text-muted-foreground`). Don't write hex values.

Type sizes: `text-small` (13), `text-body` (15), `text-title` (20), `text-display` (40). Corners come from `--radius`.

The orange is split on purpose:

- `primary` (`#dd3400`) fills buttons. White text on it passes AA.
- `brand` (`#ff3e00`) marks the current position. Never put text on it.
- `brand-strong` (`#c62e00`) is orange as text.
- `destructive` is for errors and removal only.

## Setup rules

- Put `@layer ui-sdk;` at the top of the global CSS, above `@import "tailwindcss"`. UI SDK adds a little behavior CSS in that layer. Declaring it first lets your styles win.
- Import `styles/ui.css` after Tailwind.
- Sound is off. Components play a cue only when `SoundProvider` (from `@/lib/sound`) turns it on. Switch and Checkbox play `toggle`. Everything else is silent unless given `sound`. Never add sound on hover or page load.

## Never hand-roll what the library ships

A raw `<button>` where `Button` is installed is a bug. So is a `div` with `role="dialog"`, `"menu"`, `"listbox"`, `"tablist"` or `"switch"` next to an installed component. Use the component. If the library has no component, say so and build from `@ui-sdk/react` parts, not from scratch.

## Design checklist

- Spacing only 4, 8, 12, 16, 24, 32, 48 (Tailwind 1, 2, 3, 4, 6, 8, 12).
- At most four type sizes on a screen.
- No dividing borders and no `<hr>`. Separate with space and tone. The input edge and the keycap are the exceptions.
- Text contrast 4.5:1, control edges and focus rings 3:1. Check in a real browser.
- One `primary` button per screen, for the main action.
- Buttons are verbs. Sentence case. American English.
- Motion 150 to 300 ms. Reduced motion keeps opacity only.
- Real content, never lorem ipsum.

## When you're done

Run the project's typecheck and report what you ran, plus anything you couldn't check.
