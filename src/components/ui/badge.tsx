import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/** A quiet label on a tinted ground. The words carry the meaning; the tone repeats it. */
const badgeVariants = cva(
  "inline-flex h-6 max-w-full shrink-0 items-center gap-1 px-2 text-small font-medium whitespace-nowrap [&>span]:truncate [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      tone: {
        neutral: "bg-well text-text-2",
        primary: "bg-primary-soft text-text",
        success: "bg-success-soft text-success",
        warning: "bg-warning-soft text-warning",
        info: "bg-info-soft text-info",
        danger: "bg-danger-soft text-danger",
        muted: "bg-well text-muted",
      },
      shape: {
        /** Matches the label chip in a card header. */
        rect: "rounded-xs",
        pill: "rounded-full",
      },
      size: {
        sm: "h-5 px-1.5 text-micro",
        md: "",
      },
    },
    defaultVariants: { tone: "neutral", shape: "rect", size: "md" },
  }
)

function Badge({
  className,
  tone,
  shape,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"
  return <Comp data-slot="badge" data-tone={tone ?? "neutral"} className={cn(badgeVariants({ tone, shape, size }), className)} {...props} />
}

export { Badge, badgeVariants }
