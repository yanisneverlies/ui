"use client"

import { Switch } from "@/components/ui/switch"
import { useSound } from "@/lib/sound"

export default function SoundToggle() {
  const { enabled, setEnabled } = useSound()
  return (
    <label className="inline-flex items-center gap-2 text-small text-soft-foreground">
      <Switch checked={enabled} onCheckedChange={setEnabled} sound={false} />
      Sound
    </label>
  )
}
