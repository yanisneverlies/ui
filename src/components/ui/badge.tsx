import * as React from "react"
import { renderElement, type RenderProp } from "@ui-sdk/react/primitive"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

/** A quiet label on a tinted ground. The words carry the meaning; the tone repeats it. */
const badgeVariants = cva(
  "inline-flex h-6 max-w-full shrink-0 items-center gap-1 px-2 text-small font-medium whitespace-nowrap [&>span]:truncate [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      tone: {
        neutral: "bg-secondary text-soft-foreground",
        brand: "bg-brand-soft text-foreground",
        success: "bg-success-soft text-success",
        warning: "bg-warning-soft text-warning",
        info: "bg-info-soft text-info",
        destructive: "bg-destructive-soft text-destructive",
        muted: "bg-secondary text-muted-foreground",
      },
      shape: {
        /** Matches the label chip in a card header. */
        rect: "rounded-xs",
        pill: "rounded-full",
      },
      size: {
        sm: "h-5 px-2",
        md: "",
      },
    },
    defaultVariants: { tone: "neutral", shape: "rect", size: "md" },
  }
)

/** Badge's own props. It also takes every native `<span>` prop. */
interface BadgeOwnProps {
  /**
   * The color family. `destructive` is reserved for errors and failures.
   * @defaultValue "neutral"
   */
  tone?: "neutral" | "brand" | "success" | "warning" | "info" | "destructive" | "muted"
  /**
   * `rect` matches label chips in card headers; `pill` reads as a status.
   * @defaultValue "rect"
   */
  shape?: "rect" | "pill"
  /** @defaultValue "md" */
  size?: "sm" | "md"
  /** Renders your own element (a link, say) with the badge's styles. */
  render?: RenderProp
}

type BadgeProps = React.ComponentProps<"span"> & BadgeOwnProps

function Badge({ className, tone, shape, size, render, ...props }: BadgeProps) {
  return renderElement(
    "span",
    { "data-slot": "badge", "data-tone": tone ?? "neutral", className: cn(badgeVariants({ tone, shape, size }), className), ...props },
    render
  )
}

export { Badge, badgeVariants, type BadgeProps, type BadgeOwnProps }
