# Batch 3: design spec

Twelve components, chosen by what the projects use: senecaletters (footnotes, reading progress, mobile margin), Offload (pickers, command bar), bap (progress). Build each to this spec. If the UI SDK part can't do something here, do the closest thing it can and say so in your report. Don't invent behavior.

Shared rules: CONTRACT.md (design rules) and API.md (names, state, sound). Shared classes in `src/components/ui/popup-classes.ts`: `popupSurface`, `popupMotion`, `backdropClasses`, `modalPanel`, `listItem`. Read `dialog.tsx`, `menu.tsx`, `select.tsx`, `switch.tsx` and `accordion.tsx` first: they are the pattern to follow.

## Overlays

**Alert dialog** (`alert-dialog.tsx`, `@ui-sdk/react/alert-dialog`)
- A Dialog for a decision that can't be undone. Same panel as Dialog (`popupSurface` + `modalPanel`), its own backdrop with `backdropClasses`, no close button in the corner: the person has to choose.
- Parts: AlertDialog, AlertDialogTrigger, AlertDialogContent (brings its backdrop, like DialogContent), AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, plus the UI SDK cancel and action parts, styled through our Button with `render` in the examples.
- Examples: "Delete all highlights in letter 1?" with Cancel (ghost) and Delete (destructive).

**Drawer** (`drawer.tsx`, `@ui-sdk/react/drawer`)
- Own prop `side`: `"bottom" | "right" | "left"`, default `"bottom"`. Put it in `DrawerContentOwnProps`.
- Bottom: full width, `max-h-[85dvh]`, `rounded-t-2xl`, with a 32×4 px `bg-accent-pressed` rounded handle centered 8px from the top (decorative, `aria-hidden`). Right and left: full height, `w-[min(400px,calc(100vw-32px))]`, rounded on the inner edge only.
- Motion: slides from its side, 300ms `ease-(--ease-drawer)` in and 200ms `ease-(--ease-in)` out. Follow the swipe CSS variables from UI SDK, and turn transitions off while swiping. Reduced motion: fade only.
- Parts: Drawer, DrawerTrigger, DrawerContent (brings backdrop), DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose.
- Example: the Seneca reader's margin on mobile: "Your margin", two highlights listed, "Copy all" button.

**Hover card** (`hover-card.tsx`, `@ui-sdk/react/hover-card`)
- For previews on hover and on keyboard focus: a footnote, a linked letter. `popupSurface` + `popupMotion`, `w-72 max-w-[calc(100vw-16px)] rounded-lg p-4`, `flex flex-col gap-2`.
- Examples: a footnote preview (text from a letter's footnote), and a link "Letter 49" whose card shows the letter's title, the first sentence, and "4 min read" in `tnum`.

**Command** (`command.tsx`, `@ui-sdk/react/command`)
- The same look as the site's ⌘K search (read `src/components/search/search-dialog.tsx`, which uses the raw UI SDK parts): a borderless input with a leading search icon, group labels in `text-small text-muted-foreground`, items using `listItem` but `h-11 rounded-lg`, an optional right-aligned meta text part, an empty state, and an optional footer bar (`bg-secondary`, 48px) for action hints with Kbd.
- Parts: Command, CommandInput, CommandList, CommandGroup, CommandGroupLabel, CommandItem, CommandItemMeta (ours: right-aligned muted text), CommandEmpty (whatever UI SDK offers for no results), CommandFooter (ours: a plain div).
- CommandDialog (ours): Command inside a Dialog panel placed in the upper third, 640px wide, `p-0`, opening without animation (a palette is opened many times a day).
- Examples: an inline command list for a reading app (Go to letter…, Toggle focus mode, Copy link, Switch theme) and a CommandDialog opened by a button showing ⌘K.

## Forms

**Combobox** (`combobox.tsx`, `@ui-sdk/react/combobox`)
- Looks like Select's trigger (same 40px box with the 3:1 `border-input`, chevron at the end) but you type into it. Popup and items match Select: `popupSurface` + `popupMotion`, `rounded-lg p-1`, `min-w-(--anchor-width)`, items with `listItem` and a check on the selected one.
- If UI SDK supports `multiple`, chosen values show as Badge chips inside the box, each with a remove button.
- Examples: "Translation" with these four real translations of the letters: Gummere (1917), Campbell (1969), Fantham (2010), Graver and Long (2015). Add a multiple "Tags" picker (time, friendship, death, wealth, reading) if supported.

**Radio** (`radio.tsx`, `@ui-sdk/react/radio`)
- RadioGroup is a vertical stack, `gap-3`. Radio is `size-5 rounded-full border border-input bg-background`; checked: `border-foreground` with a `size-2.5 rounded-full bg-foreground` dot that fades in 150ms. 44px coarse-pointer hit area like Checkbox.
- Use inside Field for labels and descriptions.
- Example: "Text size": Small, Medium, Large, each with a one-line description.

**Slider** (`slider.tsx`, `@ui-sdk/react/slider`)
- Track `h-1.5 rounded-full bg-input` (3:1), range `bg-foreground`, thumb `size-4 rounded-full bg-background shadow-float` with a 2px foreground ring on focus-visible and a 44px coarse-pointer hit area. Supports two thumbs if UI SDK does.
- Value label: if UI SDK has a value/output part, style it `text-small tnum`.
- Examples: "Line height" 1.4–2.0 step 0.1, and a range "Letters" 1–124.

**Toggle** (`toggle.tsx`, `@ui-sdk/react/toggle`, plus a group if UI SDK has one)
- A button that stays pressed. Sizes like Button (`sm`, `md`, `icon-sm`, `icon`), ghost look, pressed: `bg-accent-pressed text-foreground`. Own props `size` and `sound` (default `"toggle"`, plays with direction like Switch).
- Group: tight row, `gap-1`, like a toolbar.
- Examples: Bold / Italic / Underline icon toggles for a margin note editor; a "Focus mode" text toggle.

## Display

**Progress** (`progress.tsx`, `@ui-sdk/react/progress`)
- Track `h-1 rounded-full bg-accent-pressed`, indicator `bg-brand` (progress is a current position: the brand orange's job). Width animates 200ms ease-out; none with reduced motion.
- Optional label row above: label `text-small`, value `text-small text-muted-foreground tnum`.
- Indeterminate: a 30% segment sliding across, 1.2s linear loop; with reduced motion a slow opacity pulse instead.
- Examples: "Reading progress, letter 1" at 62%, and an indeterminate "Translating letter 47".

**Avatar** (`avatar.tsx`, `@ui-sdk/react/avatar`)
- Own prop `size`: `"sm" | "md" | "lg"` = 24 / 32 / 40 px. `rounded-full bg-secondary`, fallback initials `text-small font-medium` (sm: one letter). Image covers.
- AvatarGroup (ours): overlapping row, each avatar gets `ring-2 ring-background` so the overlap reads. That ring is the one allowed outline here; say so in the docs.
- Examples: initials "LS" for Lucilius, an image avatar only if you use a local asset or a data URI you generate (no external photos of people), and a group of three readers.

**Scroll area** (`scroll-area.tsx`, `@ui-sdk/react/scroll-area`)
- A quiet overlay scrollbar: 6px thumb `bg-faint-foreground/60 rounded-full`, hidden until hover or scroll, fading 150ms. The viewport is keyboard-scrollable and focusable when it scrolls.
- Example: a 240px tall list of the first 20 letter titles (Gummere; copy them from your knowledge only if certain, otherwise use "Letter 1" … "Letter 20").

**Collapsible** (`collapsible.tsx`, `@ui-sdk/react/collapsible`)
- No surface of its own (unlike Accordion's tinted items). Trigger is a ghost row with a chevron that rotates 180° in 200ms; panel animates height like AccordionPanel.
- Example: "Show the Latin" revealing the opening line of letter 1: "Ita fac, mi Lucili: vindica te tibi".

## Docs page for each

Same structure as `content/docs/components/badge.mdx` and `dialog.mdx`: preview, Installation (`<Install name="..." />`), Usage code block with `title="Usage"`, one section per extra example, Keyboard table where it applies, API (AutoTypeTable for our OwnProps, a short table of the key UI SDK props, and a link to https://ui-sdk.dev/docs/components/<name>).
