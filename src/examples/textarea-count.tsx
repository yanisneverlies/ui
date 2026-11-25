"use client"

import * as React from "react"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

const limit = 280

export default function TextareaCount() {
  const [note, setNote] = React.useState("Nowhere is he who is everywhere.")

  return (
    <Field name="note" className="w-full max-w-[400px]">
      <FieldLabel>Margin note</FieldLabel>
      <Textarea autoResize maxLength={limit} value={note} onValueChange={(value) => setNote(value)} />
      <FieldDescription className="tnum">
        {note.length} of {limit} characters
      </FieldDescription>
    </Field>
  )
}
