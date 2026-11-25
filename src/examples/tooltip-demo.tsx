import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button size="icon" aria-label="Copy quote" />}>
        <Copy />
      </TooltipTrigger>
      <TooltipContent>Copy quote</TooltipContent>
    </Tooltip>
  )
}
