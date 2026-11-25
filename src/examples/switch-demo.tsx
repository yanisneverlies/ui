import { Switch } from "@/components/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <label className="inline-flex items-center gap-2 text-small text-soft-foreground">
        <Switch defaultChecked />
        Show footnotes
      </label>
      <label className="inline-flex items-center gap-2 text-small text-soft-foreground">
        <Switch size="sm" />
        Focus mode
      </label>
      <label className="inline-flex items-center gap-2 text-small text-faint-foreground">
        <Switch disabled />
        Sync highlights
      </label>
    </div>
  )
}
