import { ExternalLink, GitBranch } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardPanel, CardTitle } from "@/components/ui/card"

export default function CardShell() {
  return (
    <Card className="w-full max-w-[480px]">
      <CardPanel>
        <CardHeader>
          <CardTitle>
            <GitBranch className="size-4" />
            <span className="truncate">ui</span>
            <Badge>main</Badge>
          </CardTitle>
          <CardAction className="self-center">yanisneverlies/ui</CardAction>
        </CardHeader>
        <CardContent className="truncate">Add MIT license</CardContent>
      </CardPanel>
      <CardFooter>
        <span className="truncate">3 files changed</span>
        <Button variant="tonal" render={<a href="https://github.com/yanisneverlies/ui/commits/main" />}>
            Open
            <ExternalLink />
          </Button>
      </CardFooter>
    </Card>
  )
}
