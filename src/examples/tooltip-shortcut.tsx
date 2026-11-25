import { Highlighter, Link2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipShortcut, TooltipTrigger } from "@/components/ui/tooltip"

export default function TooltipShortcutExample() {
  return (
    <div className="flex items-center gap-2">
      <Tooltip shortcut="mod+shift+h">
        <TooltipTrigger render={<Button size="icon" aria-label="Highlight passage" />}>
          <Highlighter />
        </TooltipTrigger>
        <TooltipContent>
          Highlight passage
          <TooltipShortcut />
        </TooltipContent>
      </Tooltip>
      <Tooltip shortcut="mod+l">
        <TooltipTrigger render={<Button size="icon" aria-label="Copy link" />}>
          <Link2 />
        </TooltipTrigger>
        <TooltipContent>
          Copy link
          <TooltipShortcut />
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
