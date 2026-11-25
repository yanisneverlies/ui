import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonAsChild() {
  return (
    <Button variant="secondary" render={<Link href="/docs/components/card" />}>
        Next: Card
        <ArrowRight />
      </Button>
  )
}
