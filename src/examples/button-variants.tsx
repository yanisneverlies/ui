import { Button } from "@/components/ui/button"

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="primary">Publish</Button>
      <Button variant="secondary">Copy link</Button>
      <Button variant="tonal">Open</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="destructive">Remove all highlights</Button>
      <Button variant="link">Read letter 2</Button>
    </div>
  )
}
