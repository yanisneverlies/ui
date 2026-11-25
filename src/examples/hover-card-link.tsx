import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function HoverCardLink() {
  return (
    <p className="text-body">
      Read{" "}
      <HoverCard>
        <HoverCardTrigger href="/docs/components/hover-card#linked-letter">Letter 49</HoverCardTrigger>
        <HoverCardContent>
          <p className="text-body font-medium">On the shortness of life</p>
          <p className="text-small text-muted-foreground">
            A man is indeed lazy and careless, my dear Lucilius, if he is reminded of a friend only by seeing some landscape
            which stirs the memory.
          </p>
          <p className="text-small text-muted-foreground tnum">6 min read</p>
        </HoverCardContent>
      </HoverCard>{" "}
      next.
    </p>
  )
}
