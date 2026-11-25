import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Two surfaces, one curve.
 *
 * `shell` (default) is a tinted outer frame holding a raised <CardPanel> and an optional <CardFooter>.
 * The panel takes the theme's --radius and the shell adds its inset on top, so the curves stay concentric
 * at any size. Tune the inset with a CSS variable on <Card>: `className="[--card-inset:12px]"`.
 * Override `--card-radius` directly to break the link on purpose.
 *
 * `surface` is a single raised card with no frame; use the parts directly inside it.
 */
const cardVariants = cva(
  "relative flex min-w-0 flex-col text-card-foreground [--card-inset:--spacing(2)] [--card-radius:calc(var(--radius)+var(--card-inset))] rounded-[var(--card-radius)] forced-colors:border forced-colors:border-[CanvasText]",
  {
    variants: {
      variant: {
        shell:
          "bg-muted p-(--card-inset) shadow-shell [&>[data-slot=card-footer]>[data-slot=button]]:rounded-[calc(var(--card-radius)-var(--card-inset))]",
        surface: "gap-4 bg-card py-4 shadow-raised [--card-inset:0px]",
      },
    },
    defaultVariants: { variant: "shell" },
  }
)

/** Card's own props. It also takes every native `<div>` prop. */
interface CardOwnProps {
  /**
   * `shell` is a tinted frame holding a raised `CardPanel` and an optional `CardFooter`. `surface` is one
   * raised card; put the parts straight inside it.
   * @defaultValue "shell"
   */
  variant?: "shell" | "surface"
}

type CardProps = React.ComponentProps<"div"> & CardOwnProps

function Card({ className, variant, ...props }: CardProps) {
  return <div data-slot="card" data-variant={variant ?? "shell"} className={cn(cardVariants({ variant }), className)} {...props} />
}

/** The raised surface inside a shell card. */
function CardPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-panel"
      className={cn(
        "flex min-w-0 flex-col gap-4 rounded-[calc(var(--card-radius)-var(--card-inset))] bg-card py-4 shadow-raised forced-colors:border forced-colors:border-[CanvasText]",
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
  return <div data-slot="card-description" className={cn("min-w-0 text-small text-muted-foreground", className)} {...props} />
}

/** Sits at the trailing edge of the header, across both rows. */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end text-small text-muted-foreground", className)}
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
        "flex min-w-0 items-center gap-4 ps-4 pt-(--card-inset) text-body text-muted-foreground [[data-variant=surface]>&]:px-4 [[data-variant=surface]>&]:pt-0",
        "[&>[data-slot=button]:last-child]:ms-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardPanel,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
  cardVariants,
  type CardProps,
  type CardOwnProps,
}
