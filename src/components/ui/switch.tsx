"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useSound, type SoundProp } from "@/lib/sound"

const switchVariants = cva(
  [
    "peer relative inline-flex shrink-0 items-center rounded-full p-[3px] transition-colors duration-200 ease-(--ease-out)",
    "bg-press data-[state=checked]:bg-text disabled:cursor-default disabled:opacity-45",
    // Hit area stays at least 24px tall even when the track is smaller.
    "after:absolute after:-inset-y-1 after:-inset-x-1 after:content-['']",
  ],
  {
    variants: {
      size: {
        sm: "h-[18px] w-[30px] [--thumb:12px]",
        md: "h-[22px] w-[38px] [--thumb:16px]",
      },
    },
    defaultVariants: { size: "md" },
  }
)

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants> & {
    /** Cue played when it flips, if sound is on. Default "toggle"; `false` silences it. */
    sound?: SoundProp
  }

function Switch({ className, size, sound = "toggle", onCheckedChange, ...props }: SwitchProps) {
  const { play } = useSound()
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size }), className)}
      onCheckedChange={(checked) => {
        onCheckedChange?.(checked)
        play(sound, { direction: checked ? "forward" : "back" })
      }}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-(--thumb) rounded-full bg-bg shadow-sm",
          "transition-transform duration-200 ease-(--ease-out) data-[state=checked]:translate-x-full motion-reduce:transition-none"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch, switchVariants }
