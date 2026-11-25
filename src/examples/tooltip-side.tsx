"use client"

import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const controls = [
  { side: "top", label: "Scroll to top", Icon: ArrowUpIcon },
  { side: "right", label: "Next letter", Icon: ArrowRightIcon },
  { side: "bottom", label: "Jump to end", Icon: ArrowDownIcon },
  { side: "left", label: "Previous letter", Icon: ArrowLeftIcon },
] as const

export default function TooltipSide() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {controls.map(({ side, label, Icon }) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="secondary" size="icon" aria-label={label} />}>
            <Icon aria-hidden="true" />
          </TooltipTrigger>
          <TooltipContent side={side}>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
