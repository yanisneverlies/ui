"use client"

import * as React from "react"
import {
  Accordion as AccordionPart,
  AccordionHeader,
  AccordionItem as AccordionItemPart,
  AccordionPanel as AccordionPanelPart,
  AccordionTrigger as AccordionTriggerPart,
} from "@ui-sdk/react/accordion"
import { ChevronDown } from "lucide-react"

import { cx } from "@/lib/utils"

/** Items are tinted surfaces separated by space, not lines. */
function Accordion({ className, ...props }: React.ComponentProps<typeof AccordionPart>) {
  return <AccordionPart className={cx("flex flex-col gap-2", className)} {...props} />
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionItemPart>) {
  return <AccordionItemPart className={cx("rounded-xl bg-secondary data-disabled:opacity-45", className)} {...props} />
}

/** AccordionTrigger's own props. It also takes every UI SDK AccordionTrigger prop. */
interface AccordionTriggerOwnProps {
  /**
   * The heading level the trigger sits in. Pick the one that fits the page's outline.
   * @defaultValue 3
   */
  level?: 2 | 3 | 4 | 5 | 6
}

type AccordionTriggerProps = React.ComponentProps<typeof AccordionTriggerPart> & AccordionTriggerOwnProps

/** Sits inside a heading, `h3` unless `level` says otherwise. */
function AccordionTrigger({ className, children, level = 3, ...props }: AccordionTriggerProps) {
  const Heading = `h${level}` as "h3"
  return (
    <AccordionHeader className="m-0" render={<Heading />}>
      <AccordionTriggerPart
        className={cx(
          "flex min-h-12 w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-start text-body font-medium",
          className
        )}
        {...props}
      >
        {(state) => (
          <>
            <span className="min-w-0">{typeof children === "function" ? children(state) : children}</span>
            <ChevronDown
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-(--ease-out) in-data-open:rotate-180 motion-reduce:transition-none"
            />
          </>
        )}
      </AccordionTriggerPart>
    </AccordionHeader>
  )
}

/** Opens to its content's height. With reduced motion it opens at once. */
function AccordionPanel({ className, children, ...props }: React.ComponentProps<typeof AccordionPanelPart>) {
  return (
    <AccordionPanelPart
      className={cx(
        "h-(--accordion-panel-height) overflow-hidden text-body text-soft-foreground transition-[height] duration-200 ease-(--ease-out) data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none",
        className
      )}
      {...props}
    >
      {(state) => <div className="px-4 pb-4">{typeof children === "function" ? children(state) : children}</div>}
    </AccordionPanelPart>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel, type AccordionTriggerProps, type AccordionTriggerOwnProps }
