"use client"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Radio, RadioGroup, radioField } from "@/components/ui/radio"

const sizes = [
  { value: "small", label: "Small", description: "More lines on each screen." },
  { value: "medium", label: "Medium", description: "The default for most readers." },
  { value: "large", label: "Large", description: "Easier on tired eyes at night." },
]

export default function RadioDemo() {
  return (
    <Field className="w-full max-w-[320px]">
      <FieldLabel>Text size</FieldLabel>
      <RadioGroup defaultValue="medium" name="text-size">
        {sizes.map((size) => (
          <Field key={size.value} className={radioField}>
            <Radio value={size.value} />
            <FieldLabel>{size.label}</FieldLabel>
            <FieldDescription>{size.description}</FieldDescription>
          </Field>
        ))}
      </RadioGroup>
    </Field>
  )
}
