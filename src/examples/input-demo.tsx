import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <Field name="email" className="w-full max-w-[320px]">
      <FieldLabel>Newsletter email</FieldLabel>
      <Input type="email" autoComplete="email" placeholder="you@example.com" />
      <FieldDescription>We send one letter a week.</FieldDescription>
    </Field>
  )
}
