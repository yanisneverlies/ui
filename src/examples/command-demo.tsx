"use client"

import * as React from "react"
import { BookOpen, Link2, Moon, Eye } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandItemMeta,
  CommandItemText,
  CommandList,
} from "@/components/ui/command"

const commands = [
  { value: "go-to-letter", label: "Go to letter…", icon: BookOpen, meta: "1–124", group: "Reading" },
  { value: "focus-mode", label: "Toggle focus mode", icon: Eye, group: "Reading" },
  { value: "copy-link", label: "Copy link", icon: Link2, group: "Share" },
  { value: "switch-theme", label: "Switch theme", icon: Moon, group: "View" },
]

export default function CommandDemo() {
  const [last, setLast] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="overflow-hidden rounded-2xl bg-popover shadow-float">
        <Command onAction={(value) => setLast(commands.find((c) => c.value === value)?.label ?? null)} loop>
          <CommandInput aria-label="Search commands" placeholder="Type a command…" />
          <CommandEmpty>No commands found.</CommandEmpty>
          <CommandList>
            {["Reading", "Share", "View"].map((group) => (
              <CommandGroup key={group}>
                <CommandGroupLabel>{group}</CommandGroupLabel>
                {commands
                  .filter((c) => c.group === group)
                  .map((c) => (
                    <CommandItem key={c.value} value={c.value} label={c.label}>
                      <CommandItemIcon>
                        <c.icon aria-hidden="true" />
                      </CommandItemIcon>
                      <CommandItemText>{c.label}</CommandItemText>
                      {c.meta ? <CommandItemMeta>{c.meta}</CommandItemMeta> : null}
                    </CommandItem>
                  ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <p className="text-small text-muted-foreground" aria-live="polite">
        {last ? `Ran: ${last}` : "Choose a command."}
      </p>
    </div>
  )
}
