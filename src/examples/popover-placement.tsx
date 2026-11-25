"use client"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"

const sides = ["top", "right", "bottom", "left"] as const

export default function PopoverPlacement() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {sides.map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button size="sm" />}>
            <span className="capitalize">{side}</span>
          </PopoverTrigger>
          <PopoverContent side={side} align="center" sideOffset={8}>
            <PopoverTitle>Focus mode</PopoverTitle>
            <PopoverDescription>Hides the sidebar and footnotes while you read.</PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
