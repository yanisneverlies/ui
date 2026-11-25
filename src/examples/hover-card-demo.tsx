import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <p className="max-w-md text-body">
      Seneca opens by telling Lucilius to{" "}
      <HoverCard>
        <HoverCardTrigger href="/docs/components/hover-card#footnote">set himself free</HoverCardTrigger>
        <HoverCardContent>
          <p className="text-body font-medium">Latin, Letter 1</p>
          <p className="text-body italic">Ita fac, mi Lucili: vindica te tibi.</p>
          <p className="text-small text-muted-foreground">
            Gummere: &ldquo;Continue to act thus, my dear Lucilius&mdash;set yourself free for your own sake.&rdquo;
          </p>
        </HoverCardContent>
      </HoverCard>
      , and to save his time.
    </p>
  )
}
