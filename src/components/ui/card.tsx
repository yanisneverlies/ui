import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Two surfaces, one curve.
 *
 * `shell` (default) is a tinted outer frame holding a raised <CardPanel> and an optional <CardFooter>.
 * The panel's radius is the shell's radius minus the inset, so the curves stay concentric at any size.
 * Tune with CSS variables on <Card>: `--card-radius` and `--card-inset`, e.g.
 * `className="[--card-radius:28px] [--card-inset:12px]"`.
 *
 * `surface` is a single raised card with no frame; use the parts directly inside it.
 */
const cardVariants = cva(
  "relative flex min-w-0 flex-col text-text [--card-inset:--spacing(2)] [--card-radius:var(--radius-lg)] rounded-[var(--card-radius)]",
  {
    variants: {
      variant: {
        shell:
          "bg-well p-(--card-inset) shadow-shell [&>[data-slot=card-footer]>[data-slot=button]]:rounded-[calc(var(--card-radius)-var(--card-inset))]",
        surface: "gap-4 bg-raised py-4 shadow-raised [--card-inset:0px]",
      },
    },
    defaultVariants: { variant: "shell" },
  }
)

function Card({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return <div data-slot="card" data-variant={variant ?? "shell"} className={cn(cardVariants({ variant }), className)} {...props} />
}

/** The raised surface inside a shell card. */
function CardPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-panel"
      className={cn(
        "flex min-w-0 flex-col gap-4 rounded-[calc(var(--card-radius)-var(--card-inset))] bg-raised py-4 shadow-raised",
        className
      )}
      {...props}
    />
  )
}

/** Title, description and an optional trailing <CardAction>, laid out on a grid. */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid min-w-0 auto-rows-min grid-cols-[minmax(0,1fr)] items-center gap-x-4 gap-y-1 px-4 has-data-[slot=card-action]:grid-cols-[minmax(0,1fr)_auto]",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("flex min-w-0 items-center gap-2 text-lead font-semibold leading-tight [&_svg:not([class*='size-'])]:size-5", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={cn("min-w-0 text-small text-muted", className)} {...props} />
}

/** Sits at the trailing edge of the header, across both rows. */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end text-small text-muted", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("min-w-0 px-4", className)} {...props} />
}

/**
 * In a shell card, the footer sits on the frame below the panel: text aligns with the panel's content,
 * and a trailing button meets the frame's inset, so its corner shares the frame's curve.
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex min-w-0 items-center gap-4 ps-4 pt-(--card-inset) text-body text-muted [[data-variant=surface]>&]:px-4 [[data-variant=surface]>&]:pt-0",
        "[&>[data-slot=button]:last-child]:ms-auto",
        className
      )}
      {...props}
    />
  )
}

export { Card, CardPanel, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter, cardVariants }
