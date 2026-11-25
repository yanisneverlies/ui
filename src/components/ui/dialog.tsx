"use client"

import * as React from "react"
import {
  Dialog,
  DialogBackdrop as DialogBackdropPart,
  DialogClose,
  DialogContent as DialogContentPart,
  DialogDescription as DialogDescriptionPart,
  DialogTitle as DialogTitlePart,
  DialogTrigger,
} from "@ui-sdk/react/dialog"
import { X } from "lucide-react"

import { cn, cx } from "@/lib/utils"
import { popupSurface } from "./popup-classes"

function DialogBackdrop({ className, ...props }: React.ComponentProps<typeof DialogBackdropPart>) {
  return (
    <DialogBackdropPart
      className={cx(
        "fixed inset-0 bg-black/30 transition-opacity duration-200 ease-(--ease-out) data-ending-style:ease-(--ease-in) data-starting-style:opacity-0 data-ending-style:opacity-0 dark:bg-black/60",
        className
      )}
      {...props}
    />
  )
}

/** DialogContent's own props. It also takes every UI SDK DialogContent prop. */
interface DialogContentOwnProps {
  /**
   * Show a close button in the top corner. Turn it off when the dialog has its own way out.
   * @defaultValue true
   */
  showClose?: boolean
  /** The close button's accessible name. @defaultValue "Close" */
  closeLabel?: string
}

type DialogContentProps = Omit<React.ComponentProps<typeof DialogContentPart>, "children"> &
  DialogContentOwnProps & { children?: React.ReactNode }

/** Centered on the page. Brings its backdrop along, so a dialog is Trigger plus Content. */
function DialogContent({ className, showClose = true, closeLabel = "Close", children, ...props }: DialogContentProps) {
  return (
    <>
      <DialogBackdrop />
      <DialogContentPart
        className={cx(
          cn(
            popupSurface,
            "fixed inset-0 m-auto h-fit max-h-[calc(100dvh-32px)] w-[min(480px,calc(100vw-32px))] overflow-y-auto overscroll-contain rounded-2xl p-6",
            "transition-[opacity,scale] duration-200 ease-(--ease-out) data-ending-style:duration-150 data-ending-style:ease-(--ease-in) data-starting-style:opacity-0 data-ending-style:opacity-0 motion-safe:data-starting-style:scale-96 motion-safe:data-ending-style:scale-96"
          ),
          className
        )}
        {...props}
      >
        {children}
        {showClose ? (
          <DialogClose
            aria-label={closeLabel}
            className="pressable absolute end-4 top-4 grid size-8 place-items-center rounded-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <X className="size-4" />
          </DialogClose>
        ) : null}
      </DialogContentPart>
    </>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="dialog-header" className={cn("flex flex-col gap-2 pe-8", className)} {...props} />
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogTitlePart>) {
  return <DialogTitlePart className={cx("font-display text-title font-normal tracking-[-0.01em]", className)} {...props} />
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogDescriptionPart>) {
  return <DialogDescriptionPart className={cx("text-body text-muted-foreground", className)} {...props} />
}

/** Actions at the end of the dialog. The main action goes last. */
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogBackdrop,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  type DialogContentProps,
  type DialogContentOwnProps,
}
