"use client"

import * as React from "react"
import {
  HoverCard,
  HoverCardContent as HoverCardContentPart,
  HoverCardTrigger as HoverCardTriggerPart,
} from "@ui-sdk/react/hover-card"

import { cn, cx } from "@/lib/utils"
import { popupMotion, popupSurface } from "./popup-classes"

/** The link that opens the card. UI SDK renders an `<a>`, so give it an `href`. */
function HoverCardTrigger({ className, ...props }: React.ComponentProps<typeof HoverCardTriggerPart>) {
  return (
    <HoverCardTriggerPart
      className={cx(
        "rounded-xs underline decoration-muted-foreground underline-offset-4 hover:decoration-foreground",
        className
      )}
      {...props}
    />
  )
}

function HoverCardContent({ className, sideOffset = 8, ...props }: React.ComponentProps<typeof HoverCardContentPart>) {
  return (
    <HoverCardContentPart
      sideOffset={sideOffset}
      className={cx(
        cn(popupSurface, popupMotion, "flex w-72 max-w-[calc(100vw-16px)] flex-col gap-2 rounded-lg p-4"),
        className
      )}
      {...props}
    />
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
