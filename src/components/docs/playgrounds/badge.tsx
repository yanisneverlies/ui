"use client"

import { Badge } from "@/components/ui/badge"
import { Playground, jsx } from "../playground"

const tones = ["neutral", "brand", "success", "warning", "info", "destructive", "muted"] as const
const shapes = ["rect", "pill"] as const
const sizes = ["sm", "md"] as const

export function BadgePlayground() {
  return (
    <Playground
      controls={[
        { prop: "tone", options: tones },
        { prop: "shape", options: shapes },
        { prop: "size", options: sizes },
      ]}
      initial={{ tone: "success", shape: "rect", size: "md" }}
      render={(v) => (
        <Badge
          tone={v.tone as (typeof tones)[number]}
          shape={v.shape as (typeof shapes)[number]}
          size={v.size as (typeof sizes)[number]}
        >
          Shipped
        </Badge>
      )}
      code={(v) => jsx("Badge", v, "Shipped")}
    />
  )
}
