"use client"

import * as React from "react"
import { Switch as SwitchPart, SwitchThumb } from "@ui-sdk/react/switch"
import { cva } from "class-variance-authority"

import { cx } from "@/lib/utils"
import { useSound, type SoundProp } from "@/lib/sound"

const switchVariants = cva(
  [
    "peer relative inline-flex shrink-0 items-center rounded-full p-[3px] transition-colors duration-200 ease-(--ease-out)",
    "bg-input data-checked:bg-foreground data-disabled:cursor-default data-disabled:opacity-45",
    // Hit area stays 24px tall (44px on coarse pointers) even when the track is smaller.
    "after:absolute after:-inset-x-1 after:-inset-y-1 after:content-['']",
  ],
  {
    variants: {
      size: {
        sm: "h-[18px] w-[30px] [--thumb:12px] pointer-coarse:after:-inset-x-[7px] pointer-coarse:after:-inset-y-[13px]",
        md: "h-[22px] w-[38px] [--thumb:16px] pointer-coarse:after:-inset-x-[3px] pointer-coarse:after:-inset-y-[11px]",
      },
    },
    defaultVariants: { size: "md" },
  }
)

/** Switch's own props. It also takes every UI SDK Switch prop: `checked`, `defaultChecked`, `onCheckedChange`, `disabled`, `name`, `required`. */
interface SwitchOwnProps {
  /** @defaultValue "md" */
  size?: "sm" | "md"
  /**
   * Cue played when it flips, if sound is on. Pass `false` to silence it, for example on the switch
   * that turns sound on.
   * @defaultValue "toggle"
   */
  sound?: SoundProp
}

type SwitchProps = Omit<React.ComponentProps<typeof SwitchPart>, "children"> & SwitchOwnProps

function Switch({ className, size, sound = "toggle", onCheckedChange, ...props }: SwitchProps) {
  const { play } = useSound()
  return (
    <SwitchPart
      className={cx(switchVariants({ size }), className)}
      onCheckedChange={(checked, details) => {
        onCheckedChange?.(checked, details)
        play(sound, { direction: checked ? "forward" : "back" })
      }}
      {...props}
    >
      <SwitchThumb className="pointer-events-none block size-(--thumb) rounded-full bg-background shadow-sm transition-transform duration-200 ease-(--ease-out) data-checked:translate-x-full motion-reduce:transition-none" />
    </SwitchPart>
  )
}

export { Switch, switchVariants, type SwitchProps, type SwitchOwnProps }
