import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputStates() {
  return (
    <div className="flex w-full max-w-[320px] flex-col gap-4">
      <Field disabled>
        <FieldLabel>Newsletter email</FieldLabel>
        <Input type="email" defaultValue="reader@example.com" />
      </Field>
      <Field>
        <FieldLabel>Reading list link</FieldLabel>
        <Input readOnly value="senecaletters.com/list/stoic-basics" />
      </Field>
    </div>
  )
}
