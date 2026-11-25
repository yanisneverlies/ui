import { Kbd, KbdGroup } from "@/components/ui/kbd"

export default function KbdDemo() {
  return (
    <div className="flex flex-col gap-3 text-small text-muted-foreground">
      <span className="flex items-center gap-2">
        <Kbd variant="keycap">J</Kbd> Previous paragraph
      </span>
      <span className="flex items-center gap-2">
        <Kbd variant="keycap">K</Kbd> Next paragraph
      </span>
      <span className="flex items-center gap-2">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        Search letters
      </span>
    </div>
  )
}
