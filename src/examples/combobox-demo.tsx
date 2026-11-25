"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

const translations = [
  { value: "gummere", label: "Gummere (1917)" },
  { value: "campbell", label: "Campbell (1969)" },
  { value: "fantham", label: "Fantham (2010)" },
  { value: "graver-long", label: "Graver and Long (2015)" },
]

export default function ComboboxDemo() {
  return (
    <Field name="translation" className="w-full max-w-[320px]">
      <FieldLabel>Translation</FieldLabel>
      <Combobox defaultValue="gummere" itemToLabel={(value) => translations.find((t) => t.value === value)?.label ?? value}>
        <ComboboxControl>
          <ComboboxInput placeholder="Search translations" />
          <ComboboxTrigger aria-label="Show translations" />
        </ComboboxControl>
        <ComboboxContent>
          <ComboboxEmpty>No translation found.</ComboboxEmpty>
          <ComboboxList>
            {translations.map((t) => (
              <ComboboxItem key={t.value} value={t.value} label={t.label}>
                {t.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>The English text shown beside each letter.</FieldDescription>
    </Field>
  )
}
