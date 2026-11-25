import { Bold, Italic, Underline } from "lucide-react"

import { Toggle, ToggleGroup, ToggleIcon } from "@/components/ui/toggle"

export default function ToggleDemo() {
  return (
    <ToggleGroup multiple defaultValue={["bold"]} aria-label="Margin note formatting">
      <Toggle value="bold" size="icon-sm" aria-label="Bold">
        <ToggleIcon>
          <Bold />
        </ToggleIcon>
      </Toggle>
      <Toggle value="italic" size="icon-sm" aria-label="Italic">
        <ToggleIcon>
          <Italic />
        </ToggleIcon>
      </Toggle>
      <Toggle value="underline" size="icon-sm" aria-label="Underline">
        <ToggleIcon>
          <Underline />
        </ToggleIcon>
      </Toggle>
    </ToggleGroup>
  )
}
