"use client"

import * as React from "react"
import {
  Drawer,
  DrawerBackdrop as DrawerBackdropPart,
  DrawerClose,
  DrawerContent as DrawerContentPart,
  DrawerDescription as DrawerDescriptionPart,
  DrawerTitle as DrawerTitlePart,
  DrawerTrigger,
} from "@ui-sdk/react/drawer"

import { cn, cx } from "@/lib/utils"
import { popupSurface } from "./popup-classes"

/** The drawer manages the backdrop's opacity, so it only gets a color. */
function DrawerBackdrop({ className, ...props }: React.ComponentProps<typeof DrawerBackdropPart>) {
  return <DrawerBackdropPart className={cx("fixed inset-0 bg-black/30 dark:bg-black/60", className)} {...props} />
}

type DrawerContentProps = Omit<React.ComponentProps<typeof DrawerContentPart>, "children"> & {
  children?: React.ReactNode
}

/**
 * The sheet. Set the edge with UI SDK's `side` on `Drawer` (`"bottom"` by default); the content reads it
 * back from `data-side`. Brings its backdrop along. The drawer positions and moves the sheet itself, so
 * we only size, color and round it.
 */
function DrawerContent({ className, children, ...props }: DrawerContentProps) {
  return (
    <>
      <DrawerBackdrop />
      <DrawerContentPart
        className={cx(
          cn(
            popupSurface,
            "relative flex flex-col overflow-hidden overscroll-contain data-dragging:transition-none",
            // Bottom: full width, rounded on the top corners. A bar below the edge covers the gap during overscroll.
            "data-[side=bottom]:max-h-[85dvh] data-[side=bottom]:w-full data-[side=bottom]:rounded-t-2xl data-[side=bottom]:after:absolute data-[side=bottom]:after:inset-x-0 data-[side=bottom]:after:top-full data-[side=bottom]:after:h-12 data-[side=bottom]:after:bg-popover",
            // Top: the mirror image. The bar sits above the edge.
            "data-[side=top]:max-h-[85dvh] data-[side=top]:w-full data-[side=top]:rounded-b-2xl data-[side=top]:after:absolute data-[side=top]:after:inset-x-0 data-[side=top]:after:bottom-full data-[side=top]:after:h-12 data-[side=top]:after:bg-popover",
            // Left and right: full height, rounded on the inner edge only.
            "data-[side=left]:h-dvh data-[side=left]:w-[min(400px,calc(100vw-32px))] data-[side=left]:rounded-e-2xl",
            "data-[side=right]:h-dvh data-[side=right]:w-[min(400px,calc(100vw-32px))] data-[side=right]:rounded-s-2xl"
          ),
          className
        )}
        {...props}
      >
        {/* Decorative grip: at the top edge of a bottom sheet, the bottom edge of a top sheet. */}
        <div
          aria-hidden="true"
          className="mx-auto mt-2 hidden h-1 w-8 shrink-0 rounded-full bg-accent-pressed in-data-[side=bottom]:block"
        />
        {children}
        <div
          aria-hidden="true"
          className="mx-auto mb-2 hidden h-1 w-8 shrink-0 rounded-full bg-accent-pressed in-data-[side=top]:block"
        />
      </DrawerContentPart>
    </>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="drawer-header" className={cn("flex flex-col gap-2 px-6 pt-6", className)} {...props} />
}

function DrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerTitlePart>) {
  return <DrawerTitlePart className={cx("font-display text-title font-normal tracking-[-0.01em]", className)} {...props} />
}

function DrawerDescription({ className, ...props }: React.ComponentProps<typeof DrawerDescriptionPart>) {
  return <DrawerDescriptionPart className={cx("text-body text-muted-foreground", className)} {...props} />
}

/** Actions at the bottom of the sheet. The main action goes last. */
function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col-reverse gap-2 px-6 pt-6 pb-6 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  type DrawerContentProps,
}
