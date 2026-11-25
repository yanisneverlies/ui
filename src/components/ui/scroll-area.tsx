"use client"

import * as React from "react"
import {
  ScrollArea as ScrollAreaPart,
  ScrollAreaContent as ScrollAreaContentPart,
  ScrollAreaCorner as ScrollAreaCornerPart,
  ScrollAreaScrollbar as ScrollAreaScrollbarPart,
  ScrollAreaThumb as ScrollAreaThumbPart,
  ScrollAreaViewport as ScrollAreaViewportPart,
} from "@ui-sdk/react/scroll-area"

import { cx } from "@/lib/utils"

/** Give it a size. The viewport fills it. */
function ScrollArea({ className, ...props }: React.ComponentProps<typeof ScrollAreaPart>) {
  return <ScrollAreaPart className={cx("relative overflow-hidden", className)} {...props} />
}

/** The native scroller. With nothing focusable inside it is a tab stop, so the keyboard can scroll it. */
function ScrollAreaViewport({ className, ...props }: React.ComponentProps<typeof ScrollAreaViewportPart>) {
  return <ScrollAreaViewportPart className={cx("size-full rounded-[inherit] focus-visible:-outline-offset-2", className)} {...props} />
}

function ScrollAreaContent({ className, ...props }: React.ComponentProps<typeof ScrollAreaContentPart>) {
  return <ScrollAreaContentPart className={className} {...props} />
}

/** Hidden until the pointer is over the area or it scrolls, then fades in over 150 ms. Brings its own thumb unless you pass children. */
function ScrollAreaScrollbar({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaScrollbarPart>) {
  return (
    <ScrollAreaScrollbarPart
      className={cx(
        "flex touch-none select-none p-px opacity-0 transition-opacity duration-150 ease-(--ease-in) data-visible:opacity-100 data-visible:ease-(--ease-out) data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-2",
        className
      )}
      {...props}
    >
      {children ?? <ScrollAreaThumb />}
    </ScrollAreaScrollbarPart>
  )
}

/** 6 px wide. It sizes and moves itself. */
function ScrollAreaThumb({ className, ...props }: React.ComponentProps<typeof ScrollAreaThumbPart>) {
  return (
    <ScrollAreaThumbPart
      className={cx("rounded-full bg-input data-dragging:bg-muted-foreground", className)}
      {...props}
    />
  )
}

function ScrollAreaCorner({ className, ...props }: React.ComponentProps<typeof ScrollAreaCornerPart>) {
  return <ScrollAreaCornerPart className={className} {...props} />
}

export { ScrollArea, ScrollAreaViewport, ScrollAreaContent, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner }
