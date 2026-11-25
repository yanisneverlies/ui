"use client"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"

const options = [
  { value: "footnotes", label: "Show footnotes" },
  { value: "margin-notes", label: "Show margin notes" },
  { value: "focus", label: "Focus mode" },
]

export default function CheckboxGroupExample() {
  return (
    <div className="flex flex-col gap-3">
      <h3 id="reading-options" className="text-small font-medium text-foreground">
        Reading options
      </h3>
      <CheckboxGroup
        aria-labelledby="reading-options"
        defaultValue={["footnotes", "focus"]}
        allValues={options.map((option) => option.value)}
        className="flex flex-col gap-3"
      >
        <label className="inline-flex items-center gap-2 text-small font-medium text-foreground">
          <Checkbox parent />
          Select all
        </label>
        <div className="flex flex-col gap-3 ps-8">
          {options.map((option) => (
            <label key={option.value} className="inline-flex items-center gap-2 text-small text-soft-foreground">
              <Checkbox value={option.value} />
              {option.label}
            </label>
          ))}
        </div>
      </CheckboxGroup>
    </div>
  )
}
