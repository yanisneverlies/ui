"use client"

import * as React from "react"
import {
  Tooltip,
  TooltipContent as TooltipContentPart,
  TooltipShortcut as TooltipShortcutPart,
  TooltipTrigger,
} from "@ui-sdk/react/tooltip"

import { cn, cx } from "@/lib/utils"
import { popupMotion } from "./popup-classes"

/** Plain text only: a tooltip can't take focus, so links or buttons inside it can't be reached. */
function TooltipContent({ className, ...props }: React.ComponentProps<typeof TooltipContentPart>) {
  return (
    <TooltipContentPart
      className={cx(
        cn(
          popupMotion,
          "data-instant:transition-none",
          "m-0 flex max-w-64 items-center gap-2 rounded-sm border-0 bg-foreground px-2 py-1 text-small text-background shadow-float"
        ),
        className
      )}
      {...props}
    />
  )
}

function TooltipShortcut({ className, ...props }: React.ComponentProps<typeof TooltipShortcutPart>) {
  return <TooltipShortcutPart className={cx("font-sans text-small text-faint-foreground tnum", className)} {...props} />
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipShortcut }
