"use client"

import * as React from "react"
import {
  Combobox as ComboboxPart,
  ComboboxChip as ComboboxChipPart,
  ComboboxChipRemove as ComboboxChipRemovePart,
  ComboboxChips as ComboboxChipsPart,
  ComboboxClear as ComboboxClearPart,
  ComboboxContent as ComboboxContentPart,
  ComboboxEmpty as ComboboxEmptyPart,
  ComboboxGroup,
  ComboboxGroupLabel as ComboboxGroupLabelPart,
  ComboboxInput as ComboboxInputPart,
  ComboboxItem as ComboboxItemPart,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel as ComboboxLabelPart,
  ComboboxList as ComboboxListPart,
  ComboboxSeparator as ComboboxSeparatorPart,
  ComboboxTrigger as ComboboxTriggerPart,
  ComboboxValue,
} from "@ui-sdk/react/combobox"
import { Check, ChevronDown, X } from "lucide-react"

import { cn, cx } from "@/lib/utils"
import { badgeVariants } from "./badge"
import { listItem, popupMotion, popupSurface } from "./popup-classes"

/** Lets the popup match the width of the whole box (input, chips and chevron), not just the input. */
const AnchorContext = React.createContext<{ anchor: HTMLElement | null; setAnchor: (node: HTMLElement | null) => void }>({
  anchor: null,
  setAnchor: () => {},
})

/** Root. Holds the value, the query and the open state. Pass `multiple` for several values. */
const Combobox = ((props: React.ComponentProps<typeof ComboboxPart>) => {
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)
  const value = React.useMemo(() => ({ anchor, setAnchor }), [anchor])
  return (
    <AnchorContext.Provider value={value}>
      <ComboboxPart {...props} />
    </AnchorContext.Provider>
  )
}) as typeof ComboboxPart

function ComboboxLabel({ className, ...props }: React.ComponentProps<typeof ComboboxLabelPart>) {
  return <ComboboxLabelPart className={cx("text-small font-medium data-disabled:opacity-45", className)} {...props} />
}

/**
 * The box: the same 40px height and 3:1 border as Select's trigger. Holds the input (or chips) and the
 * trigger. The popup anchors to it.
 */
function ComboboxControl({ className, ...props }: React.ComponentProps<"div">) {
  const { setAnchor } = React.useContext(AnchorContext)
  return (
    <div
      ref={setAnchor}
      data-slot="combobox-control"
      className={cn(
        "flex min-h-10 w-full min-w-0 items-center gap-1 rounded-lg border border-input bg-background text-body transition-colors duration-150 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring has-data-disabled:opacity-45 has-data-readonly:bg-secondary [[data-invalid]_&]:border-destructive",
        className
      )}
      {...props}
    />
  )
}

/** The text you type into. Borderless: the box around it draws the edge. */
function ComboboxInput({ className, ...props }: React.ComponentProps<typeof ComboboxInputPart>) {
  return (
    <ComboboxInputPart
      className={cx(
        "h-8 min-w-16 flex-1 bg-transparent px-3 text-body text-foreground outline-none placeholder:text-muted-foreground [[data-slot=combobox-chips]_&]:px-1",
        className
      )}
      {...props}
    />
  )
}

/** Opens and closes the list. Out of the tab order. Defaults to a chevron. */
function ComboboxTrigger({ className, children, ...props }: React.ComponentProps<typeof ComboboxTriggerPart>) {
  return (
    <ComboboxTriggerPart
      aria-label="Show options"
      className={cx(
        "pressable me-1 grid size-8 shrink-0 place-items-center self-start rounded-sm text-muted-foreground hover:bg-secondary hover:text-foreground data-disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {children ?? <ChevronDown className="size-4" aria-hidden="true" />}
    </ComboboxTriggerPart>
  )
}

/** Empties the selection and the text. Appears only while there is something to clear. Give it an `aria-label`. */
function ComboboxClear({ className, children, ...props }: React.ComponentProps<typeof ComboboxClearPart>) {
  return (
    <ComboboxClearPart
      className={cx(
        "pressable grid size-8 shrink-0 place-items-center rounded-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
        className
      )}
      {...props}
    >
      {children ?? <X className="size-4" aria-hidden="true" />}
    </ComboboxClearPart>
  )
}

/** With `multiple`: wraps the chips and the input so they flow together. */
function ComboboxChips({ className, ...props }: React.ComponentProps<typeof ComboboxChipsPart>) {
  return <ComboboxChipsPart className={cx("flex min-w-0 flex-1 flex-wrap items-center gap-1 p-1", className)} {...props} />
}

/** A chosen value as a Badge-style chip. Put a `ComboboxChipRemove` inside. */
function ComboboxChip({ className, ...props }: React.ComponentProps<typeof ComboboxChipPart>) {
  return (
    <ComboboxChipPart
      className={cx(cn(badgeVariants({ tone: "neutral", shape: "rect" }), "ps-2 pe-1 data-disabled:opacity-45"), className)}
      {...props}
    />
  )
}

/** The remove button inside a chip. Give it an `aria-label` naming the value. */
function ComboboxChipRemove({ className, children, ...props }: React.ComponentProps<typeof ComboboxChipRemovePart>) {
  return (
    <ComboboxChipRemovePart
      className={cx(
        "relative grid size-4 shrink-0 place-items-center rounded-xs text-muted-foreground hover:bg-accent-pressed hover:text-foreground after:absolute after:-inset-1 pointer-coarse:after:-inset-3 after:content-[''] data-disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {children ?? <X className="size-3" aria-hidden="true" />}
    </ComboboxChipRemovePart>
  )
}

function ComboboxContent({ className, ...props }: React.ComponentProps<typeof ComboboxContentPart>) {
  const { anchor } = React.useContext(AnchorContext)
  return (
    <ComboboxContentPart
      anchor={anchor ?? undefined}
      sideOffset={4}
      className={cx(
        cn(
          popupSurface,
          popupMotion,
          "flex max-h-[min(320px,var(--available-height))] min-w-(--anchor-width) flex-col overflow-y-auto overscroll-contain rounded-lg p-1"
        ),
        className
      )}
      {...props}
    />
  )
}

function ComboboxList({ className, ...props }: React.ComponentProps<typeof ComboboxListPart>) {
  return <ComboboxListPart className={cx("flex flex-col outline-none", className)} {...props} />
}

/** Shown while no item matches the text. */
function ComboboxEmpty({ className, ...props }: React.ComponentProps<typeof ComboboxEmptyPart>) {
  return <ComboboxEmptyPart className={cx("text-small text-muted-foreground data-empty:px-2 data-empty:py-3", className)} {...props} />
}

/** Text plus a check on the selected item. Set `label` so filtering and the input use the right text. */
function ComboboxItem({ className, children, ...props }: React.ComponentProps<typeof ComboboxItemPart>) {
  return (
    <ComboboxItemPart className={cx(cn(listItem, "pe-8"), className)} {...props}>
      {(state) => (
        <>
          <ComboboxItemText className="min-w-0 truncate">
            {typeof children === "function" ? children(state) : children}
          </ComboboxItemText>
          <ComboboxItemIndicator className="absolute end-2 grid size-4 place-items-center text-foreground">
            <Check className="size-4" aria-hidden="true" />
          </ComboboxItemIndicator>
        </>
      )}
    </ComboboxItemPart>
  )
}

function ComboboxGroupLabel({ className, ...props }: React.ComponentProps<typeof ComboboxGroupLabelPart>) {
  return <ComboboxGroupLabelPart className={cx("px-2 pt-2 pb-1 text-small text-muted-foreground", className)} {...props} />
}

function ComboboxSeparator({ className, ...props }: React.ComponentProps<typeof ComboboxSeparatorPart>) {
  return <ComboboxSeparatorPart className={cx("h-2 shrink-0", className)} {...props} />
}

export {
  Combobox,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxValue,
  ComboboxContent,
  ComboboxList,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxSeparator,
}
