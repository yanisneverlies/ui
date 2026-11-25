"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"
import { useSound } from "@/lib/sound"

export type CopyState = "idle" | "copied" | "denied"

/** Copies text. "copied" resets after 2s; "denied" stays until the next try, so the hint doesn't vanish. */
export function useCopy() {
  const [state, setState] = React.useState<CopyState>("idle")
  const { play } = useSound()
  const timer = React.useRef<number | undefined>(undefined)

  React.useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = React.useCallback(
    async (text: string) => {
      window.clearTimeout(timer.current)
      try {
        await navigator.clipboard.writeText(text)
        setState("copied")
        play({ name: "success", emphasis: "subtle" })
        timer.current = window.setTimeout(() => setState("idle"), 2000)
      } catch {
        setState("denied")
      }
    },
    [play]
  )

  return { state, copy }
}

/** A shell command with a copy button. If the clipboard is blocked, the text stays selectable and says so. */
export function CopyCommand({ command, className }: { command: string; className?: string }) {
  const { state, copy } = useCopy()

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <div className="flex h-12 min-w-0 items-center gap-2 rounded-lg bg-secondary ps-4 pe-1">
        <span aria-hidden="true" className="shrink-0 font-mono text-small text-muted-foreground select-none">
          $
        </span>
        <code className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain font-mono text-small whitespace-nowrap text-foreground select-all [scrollbar-width:none]">{command}</code>
        <button
          type="button"
          onClick={() => copy(command)}
          aria-label={state === "copied" ? "Copied" : "Copy command"}
          className="pressable relative grid size-10 shrink-0 place-items-center rounded-sm text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          {state === "copied" ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
        </button>
      </div>
      <p aria-live="polite" className="text-small text-muted-foreground empty:hidden">
        {state === "denied" ? "Your browser blocked the clipboard. Select the command and copy it." : null}
      </p>
    </div>
  )
}
