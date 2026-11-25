"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const sizes = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
]

export default function SelectControlled() {
  const [size, setSize] = React.useState<string | null>("md")

  return (
    <div className="flex w-64 flex-col gap-3">
      <Select value={size} onValueChange={setSize} placeholder="Choose a text size">
        <div className="flex flex-col gap-2">
          <SelectLabel>Text size</SelectLabel>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
        </div>
        <SelectContent>
          {sizes.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-small text-muted-foreground">Selected: {sizes.find((item) => item.value === size)?.label ?? "nothing"}</p>
    </div>
  )
}
