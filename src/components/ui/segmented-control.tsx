"use client"

import * as React from "react"
import {
  SegmentedControl as SegmentedControlPart,
  SegmentedControlIndicator,
  SegmentedControlItem as SegmentedControlItemPart,
} from "@ui-sdk/react/segmented-control"

import { cx } from "@/lib/utils"

/** A single choice among a few, like a view switch. Brings its own indicator, which slides to the checked item. */
function SegmentedControl({ className, children, ...props }: React.ComponentProps<typeof SegmentedControlPart>) {
  return (
    <SegmentedControlPart
      className={cx("relative inline-flex max-w-full items-center gap-1 rounded-lg bg-secondary p-1 data-disabled:opacity-45", className)}
      {...props}
    >
      {(state) => (
        <>
          <SegmentedControlIndicator className="absolute top-(--segmented-control-indicator-top) left-(--segmented-control-indicator-left) h-(--segmented-control-indicator-height) w-(--segmented-control-indicator-width) rounded-sm bg-background shadow-raised transition-[left,top,width,height] duration-200 ease-(--ease-out) data-[activation-direction=none]:transition-none motion-reduce:transition-none" />
          {typeof children === "function" ? children(state) : children}
        </>
      )}
    </SegmentedControlPart>
  )
}

function SegmentedControlItem({ className, ...props }: React.ComponentProps<typeof SegmentedControlItemPart>) {
  return (
    <SegmentedControlItemPart
      className={cx(
        "relative z-10 inline-flex h-8 min-w-0 pointer-coarse:after:absolute pointer-coarse:after:inset-x-0 pointer-coarse:after:-inset-y-1.5 pointer-coarse:after:content-['']  flex-1 items-center justify-center gap-2 rounded-sm px-3 text-small font-medium whitespace-nowrap text-muted-foreground transition-colors duration-150 hover:text-foreground data-checked:text-foreground data-disabled:opacity-45 [&_svg]:size-4",
        className
      )}
      {...props}
    />
  )
}

export { SegmentedControl, SegmentedControlItem }
