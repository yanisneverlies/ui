import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="primary">
        Save changes
        <Kbd variant="on-primary">⌘S</Kbd>
      </Button>
      <Button>Copy link</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  )
}
