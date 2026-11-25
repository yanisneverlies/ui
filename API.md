# API rules

Every component follows these, current and future. Adapted from UI SDK's API guide, so our names match the engine underneath. "Must" is a rule; "prefer" is a default you can argue with. Before you add a prop, a part or a name, check here, then search the library for an existing one.

## Names

- **Same idea, same name.** Use the name in this table, everywhere:

| Idea | Name |
|---|---|
| Visual weight | `variant` (`primary`, `secondary`, `tonal`, `ghost`, `destructive`, `link`) |
| Height and padding | `size` (`sm`, `md`, `lg`, plus `icon-sm`, `icon`, `icon-lg` for square) |
| Color family of a label | `tone` |
| Render another element | `render` (never `as`, never `asChild`) |
| Interaction sound | `sound` (a cue, a cue with options, or `false`) |
| Placement against an anchor | `side` and `align`, never `position` |
| A toggle is on | `pressed`; a checkbox or switch is on: `checked` |
| The item for the current page | `current` and `data-current`, never `active` |
| Arrow keys wrap | `loop` |
| Several open or selected | `multiple` |
| Stays in the DOM while hidden | `keepMounted` |
| Close after choosing | `closeOnSelect` |
| Drive from outside | `controller` |
| Alignment along text | `"start" \| "center" \| "end"`, never left or right |

- **Props are nouns or adjectives,** with no `is` or `should`: `open`, `disabled`, `showClose`.
- **No boolean traps.** Three or more modes are a string union, never two booleans that conflict.
- **Component names.** Controls you type into are `<Kind>Input`. A part that opens something is a `…Trigger`. Groups are parts (`CheckboxGroup`), not components.

## State

- Every piece of state a user can control gets three props: `open`, `defaultOpen`, `onOpenChange(open, details)`. The new value comes first, then a details object.
- Keys are `open`, `value` or `checked` unless the state is genuinely new.
- Nothing selected is `null`, never `undefined` (`undefined` means uncontrolled).
- Never fire a change on mount.
- An action handler (`onClick`, `onSelect`, `onAction`) may return a Promise: the part shows as pending (`data-pending`, `aria-busy`) and ignores repeats until it settles.

## Styling

- Style from `data-slot` and state attributes (`data-open`, `data-checked`, `data-highlighted`), never generated ids.
- Every component accepts `className`, merged last, so a caller can override anything.
- Our own props live in an exported `<Name>OwnProps` interface with JSDoc and `@defaultValue`. The docs read it.

## Sound

- Off by default. A component plays a cue only when `SoundProvider` has sound on.
- Defaults: Switch and Checkbox play `toggle`. Everything else is silent unless given a `sound`.
- Never on hover, never on page load, never repeated for errors.
