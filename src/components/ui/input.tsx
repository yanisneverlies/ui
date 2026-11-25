"use client"

import * as React from "react"
import { Input as InputPart, InputClear as InputClearPart, InputGroup as InputGroupPart } from "@ui-sdk/react/input"
import { X } from "lucide-react"

import { cx } from "@/lib/utils"

/** The 3:1 input border is kept on purpose: a field's edge has to be visible to be found. */
const fieldBox =
  "w-full min-w-0 rounded-lg border border-input bg-background text-body text-foreground placeholder:text-muted-foreground transition-colors duration-150 data-disabled:opacity-45 data-readonly:bg-secondary [[data-invalid]_&]:border-destructive"

function Input({ className, ...props }: React.ComponentProps<typeof InputPart>) {
  return <InputPart className={cx(`${fieldBox} h-10 px-3`, className)} {...props} />
}

/** Holds an Input with text or buttons beside it. The input inside loses its own box. */
function InputGroup({ className, ...props }: React.ComponentProps<typeof InputGroupPart>) {
  return (
    <InputGroupPart
      className={cx(
        `${fieldBox} flex h-10 items-center gap-1 pe-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring [&>svg]:ms-3 [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-muted-foreground [&_[data-slot=input]]:h-full [&_[data-slot=input]]:rounded-none [&_[data-slot=input]]:border-0 [&_[data-slot=input]]:bg-transparent [&_[data-slot=input]]:focus-visible:outline-none`,
        className
      )}
      {...props}
    />
  )
}

/** Empties the input. Hidden while there's nothing to clear. Give it an `aria-label`. */
function InputClear({ className, children, ...props }: React.ComponentProps<typeof InputClearPart>) {
  return (
    <InputClearPart
      className={cx(
        "pressable grid size-8 shrink-0 place-items-center rounded-sm text-muted-foreground hover:bg-secondary hover:text-foreground not-data-filled:invisible",
        className
      )}
      {...props}
    >
      {children ?? <X className="size-4" aria-hidden="true" />}
    </InputClearPart>
  )
}

export { Input, InputGroup, InputClear, fieldBox }
