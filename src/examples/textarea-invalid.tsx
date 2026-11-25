import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaInvalid() {
  return (
    <Field name="note" invalid className="w-full max-w-[400px]">
      <FieldLabel>Margin note</FieldLabel>
      <Textarea defaultValue="Good." />
      <FieldDescription>Share a note with other readers.</FieldDescription>
      <FieldError match>Write at least 20 characters so the note makes sense on its own.</FieldError>
    </Field>
  )
}
