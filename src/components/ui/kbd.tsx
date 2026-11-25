import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const kbdVariants = cva(
  "inline-flex h-5 min-w-5 shrink-0 items-center justify-center gap-1 rounded-xs px-1 font-sans text-small font-medium leading-none tnum select-none [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      variant: {
        /** Flat, for hints inside buttons and menus. */
        default: "bg-accent text-soft-foreground",
        /** A physical key with a base, for shortcut legends. From the Seneca reader. */
        keycap: "h-[22px] min-w-[22px] border border-b-2 border-border bg-card px-2 text-foreground",
        /** On a primary button. */
        "on-primary": "bg-white/20 text-primary-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

/** Kbd's own props. It also takes every native `<kbd>` prop. */
interface KbdOwnProps {
  /**
   * `default` is flat, for hints inside buttons and menus. `keycap` draws a physical key for shortcut
   * legends. `on-primary` sits on a primary button.
   * @defaultValue "default"
   */
  variant?: "default" | "keycap" | "on-primary"
}

type KbdProps = React.ComponentProps<"kbd"> & KbdOwnProps

function Kbd({ className, variant, ...props }: KbdProps) {
  return <kbd data-slot="kbd" className={cn(kbdVariants({ variant }), className)} {...props} />
}

/** Keys pressed together: <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup> */
function KbdGroup({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="kbd-group" className={cn("inline-flex items-center gap-1", className)} {...props} />
}

export { Kbd, KbdGroup, kbdVariants, type KbdProps, type KbdOwnProps }
