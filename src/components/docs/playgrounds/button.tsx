"use client"

import { Button } from "@/components/ui/button"
import { Playground, jsx } from "../playground"

const variants = ["primary", "secondary", "tonal", "ghost", "destructive", "link"] as const
const sizes = ["sm", "md", "lg"] as const
const labels: Record<string, string> = {
  primary: "Save changes",
  secondary: "Copy link",
  tonal: "Open",
  ghost: "Cancel",
  destructive: "Remove highlight",
  link: "Read letter 2",
}

export function ButtonPlayground() {
  return (
    <Playground
      controls={[
        { prop: "variant", options: variants },
        { prop: "size", options: sizes },
        { prop: "disabled", type: "boolean" },
      ]}
      initial={{ variant: "primary", size: "md", disabled: false }}
      render={(v) => (
        <Button
          variant={v.variant as (typeof variants)[number]}
          size={v.size as (typeof sizes)[number]}
          disabled={v.disabled as boolean}
        >
          {labels[v.variant as string]}
        </Button>
      )}
      code={(v) => jsx("Button", v, labels[v.variant as string])}
    />
  )
}
