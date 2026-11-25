import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"

export default function CheckboxField() {
  return (
    <div className="flex w-full max-w-[360px] flex-col gap-6">
      <Field name="newsletter">
        <Checkbox defaultChecked />
        <FieldLabel>Email me a letter each week</FieldLabel>
        <FieldDescription>One letter and a short note on it, every Monday.</FieldDescription>
      </Field>
      <Field name="terms" invalid>
        <Checkbox />
        <FieldLabel>I agree to the reading terms</FieldLabel>
        <FieldError match>Accept the terms to create your account.</FieldError>
      </Field>
    </div>
  )
}
