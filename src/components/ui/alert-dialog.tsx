"use client"

import * as React from "react"
import {
  AlertDialog,
  AlertDialogBackdrop as AlertDialogBackdropPart,
  AlertDialogClose,
  AlertDialogContent as AlertDialogContentPart,
  AlertDialogDescription as AlertDialogDescriptionPart,
  AlertDialogTitle as AlertDialogTitlePart,
  AlertDialogTrigger,
} from "@ui-sdk/react/alert-dialog"

import { cn, cx } from "@/lib/utils"
import { backdropClasses, modalPanel, popupSurface } from "./popup-classes"

function AlertDialogBackdrop({ className, ...props }: React.ComponentProps<typeof AlertDialogBackdropPart>) {
  return <AlertDialogBackdropPart className={cx(backdropClasses, className)} {...props} />
}

type AlertDialogContentProps = React.ComponentProps<typeof AlertDialogContentPart>

/**
 * Centered on the page, like Dialog, but with no close button: the person has to choose. Brings its
 * backdrop along, and an outside press never closes it.
 */
function AlertDialogContent({ className, children, ...props }: AlertDialogContentProps) {
  return (
    <>
      <AlertDialogBackdrop />
      <AlertDialogContentPart className={cx(cn(popupSurface, modalPanel), className)} {...props}>
        {children}
      </AlertDialogContentPart>
    </>
  )
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-dialog-header" className={cn("flex flex-col gap-2", className)} {...props} />
}

function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialogTitlePart>) {
  return (
    <AlertDialogTitlePart
      className={cx("font-display text-title font-normal tracking-[-0.01em]", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof AlertDialogDescriptionPart>) {
  return <AlertDialogDescriptionPart className={cx("text-body text-muted-foreground", className)} {...props} />
}

/** Answers at the end of the dialog. The one that agrees goes last. */
function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogClose,
  type AlertDialogContentProps,
}
