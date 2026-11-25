import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  return (
    <Field name="note" className="w-full max-w-[400px]">
      <FieldLabel>Margin note</FieldLabel>
      <Textarea placeholder="What did this passage change for you?" />
      <FieldDescription>Only you can see your notes.</FieldDescription>
    </Field>
  )
}
