"use client"

import { Switch } from "@/components/ui/switch"
import { useSound } from "@/lib/sound"

/** The visible global mute. Off until the reader turns it on; the choice is remembered. */
export function SoundToggle() {
  const { enabled, setEnabled } = useSound()
  return (
    <label className="inline-flex h-8 cursor-pointer items-center gap-2 px-2 text-small text-muted-foreground">
      <Switch size="sm" checked={enabled} onCheckedChange={setEnabled} sound={false} aria-label="Sound" />
      <span>Sound</span>
    </label>
  )
}
