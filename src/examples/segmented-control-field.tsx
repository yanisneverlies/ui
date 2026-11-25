import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { SegmentedControl, SegmentedControlItem } from "@/components/ui/segmented-control"

export default function SegmentedControlField() {
  return (
    <Field name="text-size" className="w-full max-w-[320px]">
      <FieldLabel>Text size</FieldLabel>
      <SegmentedControl defaultValue="md" className="w-full">
        <SegmentedControlItem value="sm">Small</SegmentedControlItem>
        <SegmentedControlItem value="md">Medium</SegmentedControlItem>
        <SegmentedControlItem value="lg">Large</SegmentedControlItem>
        <SegmentedControlItem value="xl" disabled>
          Huge
        </SegmentedControlItem>
      </SegmentedControl>
      <FieldDescription>Applies to every letter on this device.</FieldDescription>
    </Field>
  )
}
