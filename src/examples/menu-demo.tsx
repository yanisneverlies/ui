"use client"

import * as React from "react"
import { Copy, Highlighter, Link2, Share2, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger } from "@/components/ui/menu"

export default function MenuDemo() {
  const [last, setLast] = React.useState<string | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <Menu onAction={(value) => setLast(value)}>
        <MenuTrigger render={<Button />}>Passage actions</MenuTrigger>
        <MenuContent>
          <MenuItem value="copy-quote" shortcut="mod+c">
            <Copy />
            Copy quote
          </MenuItem>
          <MenuItem value="copy-link">
            <Link2 />
            Copy link
          </MenuItem>
          <MenuItem value="highlight" shortcut="mod+shift+h">
            <Highlighter />
            Highlight
          </MenuItem>
          <MenuItem value="share">
            <Share2 />
            Share letter
          </MenuItem>
          <MenuSeparator />
          <MenuItem value="delete" destructive>
            <Trash2 />
            Delete highlight
          </MenuItem>
        </MenuContent>
      </Menu>
      <p className="text-small text-muted-foreground">{last ? `Last action: ${last}` : "No action chosen yet."}</p>
    </div>
  )
}
