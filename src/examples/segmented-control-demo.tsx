"use client"

import * as React from "react"

import { SegmentedControl, SegmentedControlItem } from "@/components/ui/segmented-control"

export default function SegmentedControlDemo() {
  const [view, setView] = React.useState<string | null>("text")

  return (
    <div className="flex flex-col items-start gap-4">
      <SegmentedControl aria-label="Reading view" value={view} onValueChange={setView}>
        <SegmentedControlItem value="text">Text</SegmentedControlItem>
        <SegmentedControlItem value="parallel">Parallel</SegmentedControlItem>
        <SegmentedControlItem value="analysis">Analysis</SegmentedControlItem>
      </SegmentedControl>
      <p className="text-small text-muted-foreground">Letter 1 opens in the {view} view.</p>
    </div>
  )
}
