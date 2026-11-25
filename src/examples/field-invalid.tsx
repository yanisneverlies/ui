import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldInvalid() {
  return (
    <Field name="email" invalid className="w-full max-w-[320px]">
      <FieldLabel>Newsletter email</FieldLabel>
      <Input type="email" defaultValue="reader@example.com" />
      <FieldDescription>We send one letter a week.</FieldDescription>
      <FieldError match>That address is already subscribed.</FieldError>
    </Field>
  )
}
