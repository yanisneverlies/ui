"use client"

import * as React from "react"
import {
  Collapsible as CollapsiblePart,
  CollapsiblePanel as CollapsiblePanelPart,
  CollapsibleTrigger as CollapsibleTriggerPart,
} from "@ui-sdk/react/collapsible"
import { ChevronDown } from "lucide-react"

import { cx } from "@/lib/utils"

/** No surface of its own: one trigger and one panel. For a set of panels use Accordion. */
function Collapsible(props: React.ComponentProps<typeof CollapsiblePart>) {
  return <CollapsiblePart {...props} />
}

/** A ghost row. The chevron turns 180° in 200 ms while the panel is open. */
function CollapsibleTrigger({ className, children, ...props }: React.ComponentProps<typeof CollapsibleTriggerPart>) {
  return (
    <CollapsibleTriggerPart
      className={cx(
        "flex min-h-10 w-full items-center justify-between gap-4 rounded-lg px-3 py-2 text-start text-body font-medium text-soft-foreground transition-colors duration-150 ease-(--ease-out) hover:bg-secondary hover:text-foreground data-disabled:opacity-45",
        className
      )}
      {...props}
    >
      {(state) => (
        <>
          <span className="min-w-0">{typeof children === "function" ? children(state) : children}</span>
          <ChevronDown
            aria-hidden="true"
            className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-(--ease-out) [[data-open]>&]:rotate-180 motion-reduce:transition-none"
          />
        </>
      )}
    </CollapsibleTriggerPart>
  )
}

/** Opens to its content's height. With reduced motion it opens at once. */
function CollapsiblePanel({ className, children, ...props }: React.ComponentProps<typeof CollapsiblePanelPart>) {
  return (
    <CollapsiblePanelPart
      className={cx(
        "h-(--collapsible-panel-height) overflow-hidden text-body text-soft-foreground transition-[height] duration-200 ease-(--ease-out) data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none",
        className
      )}
      {...props}
    >
      {(state) => <div className="px-3 py-2">{typeof children === "function" ? children(state) : children}</div>}
    </CollapsiblePanelPart>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel }
