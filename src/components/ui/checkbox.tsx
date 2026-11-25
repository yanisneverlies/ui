"use client"

import * as React from "react"
import { Checkbox as CheckboxPart, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check, Minus } from "lucide-react"

import { cx } from "@/lib/utils"
import { useSound, type SoundProp } from "@/lib/sound"

/** Checkbox's own props. It also takes every UI SDK Checkbox prop: `checked`, `defaultChecked`, `onCheckedChange`, `disabled`, `name`, `value`. The mixed state is a value, not a prop: pass `checked="indeterminate"` or `defaultChecked="indeterminate"`. */
interface CheckboxOwnProps {
  /**
   * Cue played when it flips, if sound is on. `false` silences it.
   * @defaultValue "toggle"
   */
  sound?: SoundProp
}

type CheckboxProps = Omit<React.ComponentProps<typeof CheckboxPart>, "children"> & CheckboxOwnProps

/** Its edge is the 3:1 input border, the one place a border is needed: an empty box must be visible. */
function Checkbox({ className, sound = "toggle", onCheckedChange, ...props }: CheckboxProps) {
  const { play } = useSound()
  return (
    <CheckboxPart
      className={cx(
        "pressable relative grid size-5 shrink-0 place-items-center rounded-xs border border-input bg-background text-background after:absolute after:-inset-1 pointer-coarse:after:-inset-3 after:content-[''] data-checked:border-foreground data-checked:bg-foreground data-indeterminate:border-foreground data-indeterminate:bg-foreground data-disabled:opacity-45 [[data-invalid]_&]:border-destructive",
        className
      )}
      onCheckedChange={(checked, details) => {
        onCheckedChange?.(checked, details)
        play(sound, { direction: checked ? "forward" : "back" })
      }}
      {...props}
    >
      <CheckboxIndicator className="grid place-items-center transition-opacity duration-150 ease-(--ease-out) data-starting-style:opacity-0 data-ending-style:opacity-0">
        {(state) =>
          state.indeterminate ? (
            <Minus className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
          ) : (
            <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
          )
        }
      </CheckboxIndicator>
    </CheckboxPart>
  )
}

export { Checkbox, CheckboxGroup, type CheckboxProps, type CheckboxOwnProps }
