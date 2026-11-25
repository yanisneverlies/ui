"use client"

import { Button } from "@/components/ui/button"

export default function ButtonSound() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button sound={{ name: "success", emphasis: "subtle" }}>Copy quote</Button>
      <Button variant="destructive" sound={{ name: "close", emphasis: "strong" }}>
        Delete highlight
      </Button>
    </div>
  )
}
