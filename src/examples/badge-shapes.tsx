import { Badge } from "@/components/ui/badge"

export default function BadgeShapes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge shape="rect">main</Badge>
      <Badge shape="pill" tone="success">
        Shipped
      </Badge>
      <Badge shape="pill" tone="brand" size="sm" className="tnum">
        12
      </Badge>
    </div>
  )
}
