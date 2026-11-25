import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldDemo() {
  return (
    <Field name="display-name" className="w-full max-w-[320px]">
      <FieldLabel>Display name</FieldLabel>
      <Input autoComplete="nickname" defaultValue="Lucilius" />
      <FieldDescription>Shown beside the notes you share.</FieldDescription>
    </Field>
  )
}
