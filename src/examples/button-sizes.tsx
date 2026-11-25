import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Open in a new tab">
        <ExternalLink />
      </Button>
    </div>
  )
}
