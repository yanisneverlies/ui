"use client"

import { Kbd } from "@/components/ui/kbd"
import { Playground, jsx } from "../playground"

const variants = ["default", "keycap", "on-primary"] as const

export function KbdPlayground() {
  return (
    <Playground
      controls={[{ prop: "variant", options: variants }]}
      initial={{ variant: "keycap" }}
      render={(v) => (
        <span className={v.variant === "on-primary" ? "inline-flex rounded-lg bg-primary p-2" : "inline-flex"}>
          <Kbd variant={v.variant as (typeof variants)[number]}>⌘K</Kbd>
        </span>
      )}
      code={(v) => jsx("Kbd", v, "⌘K")}
    />
  )
}
