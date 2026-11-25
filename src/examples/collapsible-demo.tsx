"use client"

import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-[480px]">
      <CollapsibleTrigger>{(state) => (state.open ? "Hide the Latin" : "Show the Latin")}</CollapsibleTrigger>
      <CollapsiblePanel>
        <p lang="la" className="italic">
          Ita fac, mi Lucili: vindica te tibi
        </p>
      </CollapsiblePanel>
    </Collapsible>
  )
}
