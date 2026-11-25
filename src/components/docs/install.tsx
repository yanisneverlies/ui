import { CopyCommand } from "@/components/site/copy-command"

export function Install({ name }: { name: string }) {
  return <CopyCommand command={`npx shadcn add @yanisneverlies/${name}`} className="not-prose" />
}
