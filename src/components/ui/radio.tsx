"use client"

import * as React from "react"
import { Radio as RadioPart, RadioGroup as RadioGroupPart, RadioIndicator } from "@ui-sdk/react/radio"

import { cx } from "@/lib/utils"

/**
 * Classes for a `Field` that holds a radio: the radio sits in a 20px column beside its label, and the
 * description lines up under the label. Pass them as the field's `className`.
 */
const radioField =
  "grid grid-cols-[20px_1fr] items-start gap-x-3 gap-y-0 [&>[data-slot=field-label]]:leading-5 [&>[data-slot=field-description]]:col-start-2"

/** A vertical stack of radios with one tab stop. Name it with a `FieldLabel` or an `aria-label`. */
function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPart>) {
  return <RadioGroupPart className={cx("flex flex-col gap-3", className)} {...props} />
}

/** A round 3:1 edge so an empty radio is visible. The dot fades in over 150ms. Needs a `value`. */
function Radio({ className, ...props }: Omit<React.ComponentProps<typeof RadioPart>, "children">) {
  return (
    <RadioPart
      className={cx(
        "pressable relative grid size-5 shrink-0 place-items-center rounded-full border border-input bg-background after:absolute after:-inset-1 pointer-coarse:after:-inset-3 after:content-[''] data-checked:border-foreground data-disabled:opacity-45 [[data-invalid]_&]:border-destructive",
        className
      )}
      {...props}
    >
      <RadioIndicator className="block size-2.5 rounded-full bg-foreground transition-opacity duration-150 ease-(--ease-out) data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:ease-(--ease-in)" />
    </RadioPart>
  )
}

export { Radio, RadioGroup, radioField }
