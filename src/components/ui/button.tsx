"use client"

import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useSound, type SoundProp } from "@/lib/sound"

const buttonVariants = cva(
  [
    "pressable relative inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap select-none",
    "disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        /** The one action that matters on a screen. Dark ink on orange keeps AA contrast. */
        primary: "bg-primary text-primary-ink hover:bg-primary-hover",
        secondary: "bg-well text-text hover:bg-hover active:bg-press",
        /** Sits on a well or shell surface, where `secondary` would disappear. */
        tonal: "bg-press text-text hover:bg-hover active:bg-hover",
        ghost: "text-text-2 hover:bg-well hover:text-text",
        danger: "bg-danger-soft text-danger hover:bg-hover",
        link: "h-auto! px-0! text-text underline-offset-4 hover:underline active:scale-100",
      },
      size: {
        sm: "h-8 rounded-sm px-3 text-small",
        md: "h-10 rounded-md px-4 text-body",
        lg: "h-12 rounded-md px-5 text-lead",
        "icon-sm": "size-8 rounded-sm",
        icon: "size-10 rounded-md",
        "icon-lg": "size-12 rounded-md",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render the child element (a link, say) with the button's styles and behavior. */
    asChild?: boolean
    /** Cue played on click when sound is on. Off by default: most buttons should stay quiet. */
    sound?: SoundProp
  }

function Button({
  className,
  variant = "secondary",
  size = "md",
  asChild = false,
  sound,
  onClick,
  ...props
}: ButtonProps) {
  const { play } = useSound()
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      type={asChild ? undefined : (props.type ?? "button")}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event)
        if (!event.defaultPrevented) play(sound)
      }}
      {...props}
    />
  )
}

export { Button, buttonVariants, type ButtonProps }
