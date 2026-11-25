import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CardSurface() {
  return (
    <Card variant="surface" className="w-full max-w-[480px]">
      <CardHeader>
        <CardDescription>Letter 1</CardDescription>
        <CardTitle className="font-display font-normal">On saving time</CardTitle>
        <CardAction>
          <Badge tone="brand" shape="pill" size="sm">
            2 highlights
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="text-soft-foreground">
        Continue to act thus, my dear Lucilius—set yourself free for your own sake; gather and save your time, which
        till lately has been forced from you, or filched away, or has merely slipped from your hands.
      </CardContent>
      <CardFooter>
        <Button size="sm">Copy quote</Button>
      </CardFooter>
    </Card>
  )
}
