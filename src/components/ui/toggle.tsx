"use client"

import * as React from "react"
import { Toggle as TogglePart, ToggleGroup as ToggleGroupPart, ToggleIcon } from "@ui-sdk/react/toggle"
import { cva } from "class-variance-authority"

import { cx } from "@/lib/utils"
import { useSound, type SoundProp } from "@/lib/sound"

const toggleVariants = cva(
  [
    "pressable relative inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap select-none",
    "text-soft-foreground hover:bg-secondary hover:text-foreground data-pressed:bg-foreground data-pressed:text-background data-pressed:hover:bg-foreground/90 data-pressed:hover:text-background",
    "data-disabled:pointer-events-none data-disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      size: {
        sm: "h-8 rounded-sm px-3 text-small pointer-coarse:after:absolute pointer-coarse:after:inset-x-0 pointer-coarse:after:-inset-y-1.5 pointer-coarse:after:content-['']",
        md: "h-10 rounded-lg px-4 text-body",
        "icon-sm":
          "size-8 rounded-sm pointer-coarse:after:absolute pointer-coarse:after:-inset-1.5 pointer-coarse:after:content-['']",
        icon: "size-10 rounded-lg",
      },
    },
    defaultVariants: { size: "md" },
  }
)

/** Toggle's own props. It also takes every UI SDK Toggle prop: `pressed`, `defaultPressed`, `onPressedChange`, `value` (inside a group), `disabled`. */
interface ToggleOwnProps {
  /**
   * Height and padding. `icon` sizes are square; give them an `aria-label`.
   * @defaultValue "md"
   */
  size?: "sm" | "md" | "icon-sm" | "icon"
  /**
   * Cue played when it flips, if sound is on. `false` silences it.
   * @defaultValue "toggle"
   */
  sound?: SoundProp
}

type ToggleProps = React.ComponentProps<typeof TogglePart> & ToggleOwnProps

/** A button that stays pressed. Alone it owns its state; inside a `ToggleGroup`, the group decides. */
function Toggle({ className, size = "md", sound = "toggle", onPressedChange, ...props }: ToggleProps) {
  const { play } = useSound()
  return (
    <TogglePart
      data-size={size}
      className={cx(toggleVariants({ size }), className)}
      onPressedChange={(pressed, details) => {
        onPressedChange?.(pressed, details)
        play(sound, { direction: pressed ? "forward" : "back" })
      }}
      {...props}
    />
  )
}

/** A tight row of toggles with one tab stop and arrow keys between them, like a toolbar. */
function ToggleGroup<T extends string = string>({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPart<T>>) {
  return (
    <ToggleGroupPart<T>
      className={cx("inline-flex items-center gap-1 data-[orientation=vertical]:flex-col", className)}
      {...props}
    />
  )
}

export { Toggle, ToggleGroup, ToggleIcon, toggleVariants, type ToggleProps, type ToggleOwnProps }
