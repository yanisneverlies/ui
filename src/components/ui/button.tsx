"use client"

import * as React from "react"
import { Button as ButtonPart } from "@ui-sdk/react/button"
import { cva } from "class-variance-authority"

import { cx } from "@/lib/utils"
import { useSound, type SoundProp } from "@/lib/sound"

const buttonVariants = cva(
  [
    "pressable relative inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap select-none",
    "data-disabled:pointer-events-none data-disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45",
    "data-pending:cursor-progress data-pending:opacity-70",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        /** The one action that matters on a screen. White on #dd3400 is 4.6:1. */
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary: "bg-secondary text-secondary-foreground hover:bg-accent active:bg-accent-pressed",
        /** Sits on a muted surface (a shell card's footer, say), where `secondary` would disappear. */
        tonal: "bg-accent-pressed text-accent-foreground hover:bg-accent",
        ghost: "text-soft-foreground hover:bg-secondary hover:text-foreground",
        destructive: "bg-destructive-soft text-destructive hover:bg-accent",
        link: "h-auto! px-0! text-foreground underline-offset-4 hover:underline active:scale-100",
      },
      size: {
        sm: "h-8 rounded-sm px-3 text-small pointer-coarse:after:absolute pointer-coarse:after:inset-x-0 pointer-coarse:after:-inset-y-1.5 pointer-coarse:after:content-['']",
        md: "h-10 rounded-lg px-4 text-body",
        lg: "h-12 rounded-lg px-6 text-body",
        "icon-sm": "size-8 rounded-sm pointer-coarse:after:absolute pointer-coarse:after:-inset-1.5 pointer-coarse:after:content-['']",
        icon: "size-10 rounded-lg",
        "icon-lg": "size-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  }
)

/** Button's own props. It also takes every UI SDK Button prop and every native `<button>` prop. */
interface ButtonOwnProps {
  /**
   * Visual weight. Use `primary` once per screen, for the action that matters.
   * @defaultValue "secondary"
   */
  variant?: "primary" | "secondary" | "tonal" | "ghost" | "destructive" | "link"
  /**
   * Height and padding. `icon` sizes are square; give them an `aria-label`.
   * @defaultValue "md"
   */
  size?: "sm" | "md" | "lg" | "icon-sm" | "icon" | "icon-lg"
  /**
   * Cue played on click when sound is on: a cuelume cue name, a cue with options, or `false`.
   * Silent by default, since most buttons should stay quiet.
   */
  sound?: SoundProp
}

type ButtonProps = React.ComponentProps<typeof ButtonPart> & ButtonOwnProps

/**
 * A button. Return a Promise from `onClick` and it shows as pending (`data-pending`, `aria-busy`) and
 * ignores repeat presses until the Promise settles. Render a link or another element with `render`.
 */
function Button({ className, variant = "secondary", size = "md", sound, onClick, ...props }: ButtonProps) {
  const { play } = useSound()

  return (
    <ButtonPart
      data-variant={variant}
      data-size={size}
      className={cx(buttonVariants({ variant, size }), className)}
      onClick={(event, details) => {
        const result = onClick?.(event, details)
        if (!event.defaultPrevented) play(sound)
        return result
      }}
      {...props}
    />
  )
}

export { Button, buttonVariants, type ButtonProps, type ButtonOwnProps }
