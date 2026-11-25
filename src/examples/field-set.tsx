import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function FieldSetExample() {
  return (
    <FieldSet className="w-full max-w-[360px]">
      <FieldLegend>Reading settings</FieldLegend>
      <FieldDescription>These apply to every letter.</FieldDescription>
      <FieldGroup>
        <Field name="footnotes">
          <Checkbox defaultChecked />
          <FieldLabel>Show footnotes</FieldLabel>
        </Field>
        <Field name="margin-notes">
          <Checkbox />
          <FieldLabel>Show margin notes</FieldLabel>
          <FieldDescription>Notes you wrote appear beside the text.</FieldDescription>
        </Field>
        <Field name="focus">
          <Switch />
          <FieldLabel>Focus mode</FieldLabel>
          <FieldDescription>Hide everything except the letter.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
