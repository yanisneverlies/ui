"use client"

import * as React from "react"
import { BookOpen, Link2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandDialogContent,
  CommandDialogShortcut,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandItemText,
  CommandList,
} from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export default function CommandDialogExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      {/* The docs site already uses mod+k for its own search, so this one uses mod+shift+k. */}
      <CommandDialogTrigger shortcut="mod+shift+k" render={<Button />}>
        Commands
        <CommandDialogShortcut render={<Kbd />} />
      </CommandDialogTrigger>
      <CommandDialogContent>
      <Command onAction={() => setOpen(false)} loop>
        <CommandInput aria-label="Search commands" placeholder="Type a command…" />
        <CommandEmpty>No commands found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandGroupLabel>Suggestions</CommandGroupLabel>
            <CommandItem value="go-to-letter" label="Go to letter…">
              <CommandItemIcon>
                <BookOpen aria-hidden="true" />
              </CommandItemIcon>
              <CommandItemText>Go to letter…</CommandItemText>
            </CommandItem>
            <CommandItem value="copy-link" label="Copy link">
              <CommandItemIcon>
                <Link2 aria-hidden="true" />
              </CommandItemIcon>
              <CommandItemText>Copy link</CommandItemText>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <CommandFooter>
        <span className="flex items-center gap-2">
          Run <Kbd aria-hidden="true">↵</Kbd>
        </span>
        <span className="flex items-center gap-2">
          Move{" "}
          <KbdGroup aria-hidden="true">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
          </KbdGroup>
        </span>
      </CommandFooter>
      </CommandDialogContent>
    </CommandDialog>
  )
}
