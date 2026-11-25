"use client"

import { Switch } from "@/components/ui/switch"
import { Playground, jsx } from "../playground"

const sizes = ["sm", "md"] as const

export function SwitchPlayground() {
  return (
    <Playground
      controls={[
        { prop: "size", options: sizes },
        { prop: "defaultChecked", type: "boolean" },
        { prop: "disabled", type: "boolean" },
      ]}
      initial={{ size: "md", defaultChecked: true, disabled: false }}
      render={(v) => (
        <label className="inline-flex items-center gap-2 text-small text-soft-foreground">
          <Switch
            key={String(v.defaultChecked)}
            size={v.size as (typeof sizes)[number]}
            defaultChecked={v.defaultChecked as boolean}
            disabled={v.disabled as boolean}
          />
          Show footnotes
        </label>
      )}
      code={(v) => jsx("Switch", v)}
    />
  )
}
