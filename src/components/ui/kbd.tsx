import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const kbdVariants = cva(
  "inline-flex h-5 min-w-5 shrink-0 items-center justify-center gap-1 rounded-[5px] px-1 font-sans text-micro font-medium leading-none tnum select-none [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      variant: {
        /** Flat, for hints inside buttons and menus. */
        default: "bg-hover text-muted",
        /** A physical key with a base, for shortcut legends. From the Seneca reader. */
        keycap: "h-[22px] min-w-[22px] border border-b-2 border-hairline bg-raised px-1.5 text-text",
        /** On a primary button. */
        "on-primary": "bg-black/12 text-primary-ink",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Kbd({ className, variant, ...props }: React.ComponentProps<"kbd"> & VariantProps<typeof kbdVariants>) {
  return <kbd data-slot="kbd" className={cn(kbdVariants({ variant }), className)} {...props} />
}

/** Keys pressed together: <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup> */
function KbdGroup({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="kbd-group" className={cn("inline-flex items-center gap-1", className)} {...props} />
}

export { Kbd, KbdGroup, kbdVariants }
