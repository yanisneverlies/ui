"use client"

import { Copy, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/ui/menu"

function copyLetter() {
  // Resolving after a moment keeps the item pending, then closes the menu.
  return new Promise<void>((resolve) => setTimeout(resolve, 1200))
}

export default function MenuPending() {
  return (
    <Menu>
      <MenuTrigger render={<Button />}>Export letter</MenuTrigger>
      <MenuContent>
        <MenuItem value="copy-text" onSelect={copyLetter}>
          <Copy />
          Copy as text
        </MenuItem>
        <MenuItem value="copy-markdown" onSelect={copyLetter}>
          <FileText />
          Copy as Markdown
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
