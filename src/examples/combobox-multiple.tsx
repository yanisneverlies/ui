"use client"

import {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

const tags = ["time", "friendship", "death", "wealth", "reading"]
const label = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export default function ComboboxMultiple() {
  return (
    <Field name="tags" className="w-full max-w-[360px]">
      <FieldLabel>Tags</FieldLabel>
      <Combobox multiple defaultValue={["time", "reading"]} itemToLabel={label}>
        <ComboboxControl>
          <ComboboxChips>
            <ComboboxValue>
              {(state) =>
                (state.value as string[]).map((value, index) => (
                  <ComboboxChip key={value} value={value}>
                    {state.labels[index]}
                    <ComboboxChipRemove aria-label={`Remove ${state.labels[index]}`} />
                  </ComboboxChip>
                ))
              }
            </ComboboxValue>
            <ComboboxInput placeholder="Add a tag" />
          </ComboboxChips>
          <ComboboxTrigger aria-label="Show tags" />
        </ComboboxControl>
        <ComboboxContent>
          <ComboboxEmpty>No tag found.</ComboboxEmpty>
          <ComboboxList>
            {tags.map((tag) => (
              <ComboboxItem key={tag} value={tag} label={label(tag)}>
                {label(tag)}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>Backspace in the empty field removes the last tag.</FieldDescription>
    </Field>
  )
}
