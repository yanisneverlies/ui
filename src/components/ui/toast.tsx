"use client"

import * as React from "react"
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastRegion,
  ToastTitle,
  createToaster,
  toast as queuedToast,
} from "@ui-sdk/react/toast"
import { X } from "lucide-react"

import { cn, cx } from "@/lib/utils"

/** Closes what's showing, then shows the new toast: one at a time, like a status line. */
function replacing<Args extends unknown[], Result>(show: (...args: Args) => Result) {
  return (...args: Args): Result => {
    queuedToast.dismiss()
    return show(...args)
  }
}

/**
 * Same call signature and helpers as UI SDK's `toast`, but a new toast replaces the one showing instead of
 * waiting behind it. Pass your own `createToaster()` as the region's `toaster` to keep a queue.
 */
const toast = Object.assign(replacing(queuedToast), {
  success: replacing(queuedToast.success),
  error: replacing(queuedToast.error),
  info: replacing(queuedToast.info),
  warning: replacing(queuedToast.warning),
  loading: replacing(queuedToast.loading),
  promise: replacing(queuedToast.promise) as typeof queuedToast.promise,
  update: queuedToast.update,
  dismiss: queuedToast.dismiss,
  toasts: queuedToast.toasts,
  subscribe: queuedToast.subscribe,
}) as typeof queuedToast

/** Toaster's own props. It also takes every UI SDK ToastRegion prop, like `toaster` and `align`. */
interface ToasterOwnProps {
  /**
   * The edge it sits on.
   * @defaultValue "bottom"
   */
  side?: "top" | "bottom"
}

type ToasterProps = Omit<React.ComponentProps<typeof ToastRegion>, "children" | "maxVisible"> & ToasterOwnProps

/**
 * Place once near the root, then call `toast("Saved")` from anywhere. One toast shows at a time, like a
 * status line: a new one replaces the last instead of stacking.
 */
function Toaster({ className, side = "bottom", align = "center", ...props }: ToasterProps) {
  return (
    <ToastRegion
      side={side}
      align={align}
      maxVisible={1}
      className={cx(
        cn(
          "fixed inset-x-4 z-50 m-0 flex justify-center border-0 bg-transparent p-0",
          side === "bottom" ? "bottom-[calc(16px+env(safe-area-inset-bottom))]" : "top-4"
        ),
        className
      )}
      {...props}
    >
      {(item) => (
        <Toast
          className={(state) =>
            cn(
              "pointer-events-auto flex min-h-11 w-fit max-w-[min(440px,100%)] [translate:var(--toast-swipe-x,0px)_var(--toast-swipe-y,0px)] items-center gap-4 rounded-lg bg-foreground py-2 ps-4 pe-2 text-body text-background shadow-float",
              "transition-[opacity,translate,filter] duration-300 ease-(--ease-out) data-ending-style:duration-150 data-ending-style:ease-(--ease-in)",
              "data-swiping:transition-none data-starting-style:opacity-0 data-ending-style:opacity-0 motion-safe:data-starting-style:translate-y-2 motion-safe:data-starting-style:blur-[2px] motion-safe:data-ending-style:translate-y-1",
              state.type === "error" && "bg-destructive text-background"
            )
          }
        >
          <div className="flex min-w-0 flex-col">
            <ToastTitle className="truncate font-medium" />
            <ToastDescription className="truncate text-small opacity-80 empty:hidden" />
          </div>
          <div className="ms-auto flex shrink-0 items-center gap-1">
            <ToastAction className={cn("pressable h-8 rounded-sm px-3 text-small font-medium empty:hidden", item.type === "error" ? "bg-foreground/15 hover:bg-foreground/25" : "bg-background/15 hover:bg-background/25")} />
            <ToastClose
              aria-label="Dismiss"
              className={cn("pressable grid size-8 place-items-center rounded-sm opacity-70 hover:opacity-100", item.type === "error" ? "hover:bg-foreground/15" : "hover:bg-background/15")}
            >
              <X className="size-4" aria-hidden="true" />
            </ToastClose>
          </div>
        </Toast>
      )}
    </ToastRegion>
  )
}

export { Toaster, toast, createToaster, type ToasterProps, type ToasterOwnProps }
