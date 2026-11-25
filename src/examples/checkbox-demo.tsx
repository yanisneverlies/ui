import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      <label className="inline-flex items-center gap-2 text-small text-soft-foreground">
        <Checkbox defaultChecked />
        Show footnotes
      </label>
      <label className="inline-flex items-center gap-2 text-small text-soft-foreground">
        <Checkbox />
        Focus mode
      </label>
      <label className="inline-flex items-center gap-2 text-small text-faint-foreground">
        <Checkbox disabled />
        Sync highlights
      </label>
    </div>
  )
}
