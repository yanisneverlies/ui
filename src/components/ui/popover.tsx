"use client"

import * as React from "react"
import {
  Popover,
  PopoverClose,
  PopoverContent as PopoverContentPart,
  PopoverDescription as PopoverDescriptionPart,
  PopoverTitle as PopoverTitlePart,
  PopoverTrigger,
} from "@ui-sdk/react/popover"

import { cn, cx } from "@/lib/utils"
import { popupMotion, popupSurface } from "./popup-classes"

function PopoverContent({ className, ...props }: React.ComponentProps<typeof PopoverContentPart>) {
  return (
    <PopoverContentPart
      className={cx(
        cn(popupSurface, popupMotion, "flex w-72 max-w-[calc(100vw-16px)] flex-col gap-2 rounded-lg p-4"),
        className
      )}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: React.ComponentProps<typeof PopoverTitlePart>) {
  return <PopoverTitlePart className={cx("text-body font-medium", className)} {...props} />
}

function PopoverDescription({ className, ...props }: React.ComponentProps<typeof PopoverDescriptionPart>) {
  return <PopoverDescriptionPart className={cx("text-small text-muted-foreground", className)} {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription, PopoverClose }
