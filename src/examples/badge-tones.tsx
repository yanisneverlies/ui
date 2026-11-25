import { Badge } from "@/components/ui/badge"

export default function BadgeTones() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>feat/7702-auth</Badge>
      <Badge tone="brand">Current</Badge>
      <Badge tone="success">Shipped</Badge>
      <Badge tone="warning">Needs review</Badge>
      <Badge tone="info">Draft</Badge>
      <Badge tone="destructive">Build failed</Badge>
      <Badge tone="muted">Archived</Badge>
    </div>
  )
}
