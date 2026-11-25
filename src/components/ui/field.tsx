"use client"

import * as React from "react"
import {
  Field as FieldPart,
  FieldDescription as FieldDescriptionPart,
  FieldError as FieldErrorPart,
  FieldGroup as FieldGroupPart,
  FieldLabel as FieldLabelPart,
  FieldLegend as FieldLegendPart,
  FieldSet as FieldSetPart,
} from "@ui-sdk/react/field"

import { cx } from "@/lib/utils"

/** Label, control, description and error, wired together. The control is one of ours: Input, Textarea, Select, Checkbox, Switch. */
function Field({ className, ...props }: React.ComponentProps<typeof FieldPart>) {
  return (
    <FieldPart
      className={cx(
        "flex min-w-0 flex-col gap-2 has-[>[data-slot=checkbox]]:flex-row has-[>[data-slot=checkbox]]:flex-wrap has-[>[data-slot=checkbox]]:items-center has-[>[data-slot=switch]]:flex-row has-[>[data-slot=switch]]:flex-wrap has-[>[data-slot=switch]]:items-center",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({ className, ...props }: React.ComponentProps<typeof FieldLabelPart>) {
  return <FieldLabelPart className={cx("text-small font-medium text-foreground data-disabled:opacity-45", className)} {...props} />
}

function FieldDescription({ className, ...props }: React.ComponentProps<typeof FieldDescriptionPart>) {
  return <FieldDescriptionPart className={cx("basis-full text-small text-muted-foreground", className)} {...props} />
}

/** Shows only while the field is invalid. Says what's wrong and how to fix it. */
function FieldError({ className, ...props }: React.ComponentProps<typeof FieldErrorPart>) {
  return <FieldErrorPart className={cx("basis-full text-small text-destructive", className)} {...props} />
}

function FieldSet({ className, ...props }: React.ComponentProps<typeof FieldSetPart>) {
  return <FieldSetPart className={cx("m-0 flex min-w-0 flex-col gap-4 border-0 p-0", className)} {...props} />
}

function FieldLegend({ className, ...props }: React.ComponentProps<typeof FieldLegendPart>) {
  return <FieldLegendPart className={cx("mb-1 p-0 text-body font-medium", className)} {...props} />
}

function FieldGroup({ className, ...props }: React.ComponentProps<typeof FieldGroupPart>) {
  return <FieldGroupPart className={cx("flex flex-col gap-4", className)} {...props} />
}

export { Field, FieldLabel, FieldDescription, FieldError, FieldSet, FieldLegend, FieldGroup }
