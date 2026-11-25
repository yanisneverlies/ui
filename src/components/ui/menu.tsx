"use client"

import * as React from "react"
import {
  Menu,
  MenuContent as MenuContentPart,
  MenuGroup,
  MenuGroupLabel as MenuGroupLabelPart,
  MenuItem as MenuItemPart,
  MenuSeparator as MenuSeparatorPart,
  MenuShortcut as MenuShortcutPart,
  MenuTrigger,
} from "@ui-sdk/react/menu"

import { cn, cx } from "@/lib/utils"
import { popupMotion, popupSurface } from "./popup-classes"

/** Items sit 4px inside an 12px-radius surface, so their 8px corners stay concentric with it. */
function MenuContent({ className, ...props }: React.ComponentProps<typeof MenuContentPart>) {
  return (
    <MenuContentPart
      className={cx(
        cn(
          popupSurface,
          popupMotion,
          "flex max-h-(--available-height) min-w-48 flex-col overflow-y-auto overscroll-contain rounded-lg p-1"
        ),
        className
      )}
      {...props}
    />
  )
}

type MenuItemProps = React.ComponentProps<typeof MenuItemPart>

/** Pass UI SDK's `destructive` for items that remove something; it sets `data-destructive`. */
function MenuItem({ className, ...props }: MenuItemProps) {
  return (
    <MenuItemPart
      className={cx(
        cn(
          "flex h-9 cursor-default items-center gap-2 rounded-sm px-2 text-body outline-none select-none",
          "data-highlighted:bg-accent data-disabled:opacity-45 data-pending:opacity-70",
          "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
          "data-destructive:text-destructive data-destructive:data-highlighted:bg-destructive-soft data-destructive:[&_svg]:text-destructive"
        ),
        className
      )}
      {...props}
    />
  )
}

function MenuGroupLabel({ className, ...props }: React.ComponentProps<typeof MenuGroupLabelPart>) {
  return <MenuGroupLabelPart className={cx("px-2 pt-2 pb-1 text-small text-muted-foreground", className)} {...props} />
}

/** Separates groups with space, not a line. */
function MenuSeparator({ className, ...props }: React.ComponentProps<typeof MenuSeparatorPart>) {
  return <MenuSeparatorPart className={cx("h-2 shrink-0", className)} {...props} />
}

function MenuShortcut({ className, ...props }: React.ComponentProps<typeof MenuShortcutPart>) {
  return <MenuShortcutPart className={cx("ms-auto ps-4 text-small text-muted-foreground in-data-highlighted:text-soft-foreground tnum", className)} {...props} />
}

export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  type MenuItemProps,
}
