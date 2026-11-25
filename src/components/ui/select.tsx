"use client"

import * as React from "react"
import {
  Select,
  SelectContent as SelectContentPart,
  SelectGroup,
  SelectGroupLabel as SelectGroupLabelPart,
  SelectItem as SelectItemPart,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel as SelectLabelPart,
  SelectSeparator as SelectSeparatorPart,
  SelectTrigger as SelectTriggerPart,
  SelectValue as SelectValuePart,
} from "@ui-sdk/react/select"
import { Check, ChevronDown } from "lucide-react"

import { cn, cx } from "@/lib/utils"
import { popupMotion, popupSurface } from "./popup-classes"

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectLabelPart>) {
  return <SelectLabelPart className={cx("text-small font-medium data-disabled:opacity-45", className)} {...props} />
}

/** Looks like an input: same height, same 3:1 border. Holds a SelectValue and a chevron. */
function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof SelectTriggerPart>) {
  return (
    <SelectTriggerPart
      className={cx(
        cn(
          "pressable flex h-10 w-full min-w-0 items-center justify-between gap-2 rounded-lg border border-input bg-background px-3 text-start text-body",
          "data-disabled:opacity-45 data-open:bg-secondary [[data-invalid]_&]:border-destructive"
        ),
        className
      )}
      {...props}
    >
      {(state) => (
        <>
          {typeof children === "function" ? children(state) : children}
          <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
        </>
      )}
    </SelectTriggerPart>
  )
}

function SelectValue({ className, ...props }: React.ComponentProps<typeof SelectValuePart>) {
  return <SelectValuePart className={cx("min-w-0 truncate data-placeholder:text-muted-foreground", className)} {...props} />
}

function SelectContent({ className, ...props }: React.ComponentProps<typeof SelectContentPart>) {
  return (
    <SelectContentPart
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

/** Text plus a check that shows on the selected item. */
function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectItemPart>) {
  return (
    <SelectItemPart
      className={cx(
        "flex h-9 cursor-default items-center gap-2 rounded-sm ps-2 pe-8 text-body outline-none select-none relative data-highlighted:bg-accent data-disabled:opacity-45",
        className
      )}
      {...props}
    >
      {(state) => (
        <>
          <SelectItemText className="min-w-0 truncate">
            {typeof children === "function" ? children(state) : children}
          </SelectItemText>
          <SelectItemIndicator className="absolute end-2 grid size-4 place-items-center text-foreground">
            <Check className="size-4" aria-hidden="true" />
          </SelectItemIndicator>
        </>
      )}
    </SelectItemPart>
  )
}

function SelectGroupLabel({ className, ...props }: React.ComponentProps<typeof SelectGroupLabelPart>) {
  return <SelectGroupLabelPart className={cx("px-2 pt-2 pb-1 text-small text-muted-foreground", className)} {...props} />
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectSeparatorPart>) {
  return <SelectSeparatorPart className={cx("h-2 shrink-0", className)} {...props} />
}

export {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
}
