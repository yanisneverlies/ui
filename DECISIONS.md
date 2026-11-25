# Decisions

What's decided, and why. Change one only on purpose, and add the date.

- **2026-11-25 · Behavior comes from UI SDK (`@ui-sdk/react`), not Radix.** One engine for focus, keyboard, ARIA and popups across every component. Its async-pending actions and popup layer come for free. Cost: it's a 0.1 beta, so pin versions and read its changelog before upgrading.
- **2026-11-25 · `render`, not `asChild`.** Every UI SDK part takes `render`; two ways to swap an element would drift. Button and Badge follow.
- **2026-11-25 · shadcn token names.** `background`, `foreground`, `muted-foreground`, `primary`, so our components sit beside any shadcn component.
- **2026-11-25 · Orange split.** `--primary` `#dd3400` fills buttons (white text 4.6:1). `--brand` `#ff3e00` marks the current position and is never under text. `--brand-strong` `#c62e00` is the brand orange as text.
- **2026-11-25 · One `--radius` knob.** Every corner derives from it; a shell card adds its inset, so nested curves stay concentric.
- **2026-11-25 · Sound off by default,** through cuelume behind `SoundProvider`, with a visible mute.
- **2026-11-25 · One toast at a time.** A new toast replaces the last, like a status line, instead of a stack.
- **2026-11-25 · No dividers.** Space and tone separate. Menu and select separators render as 8px of space. Kept borders: the 3:1 input edge (inputs, select and combobox boxes, checkboxes, radios, the slider thumb), the keycap Kbd, and the background-colored ring between overlapping avatars.
- **2026-11-25 · Distributed as a shadcn registry.** Source is copied into the project; there's no package to version.
- **2026-11-25 · "On" looks the same everywhere.** A checked switch, a checked checkbox and a pressed toggle all fill with `foreground`, so the on state reads at 3:1 or better in both themes.
