import { readFile } from "node:fs/promises"
import path from "node:path"
import { ServerCodeBlock } from "fumadocs-ui/components/codeblock.rsc"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"

import { examples, type ExampleName } from "@/examples"
import { cn } from "@/lib/utils"

/** Renders an example from src/examples and shows its exact source, so the copied code is the code that runs. */
export async function ComponentPreview({ name, className }: { name: ExampleName; className?: string }) {
  const Example = examples[name]
  const source = await readFile(path.join(process.cwd(), "src/examples", `${name}.tsx`), "utf8")
  const code = source.replace(/^"use client"\n\n/, "").trimEnd()

  return (
    <Tabs items={["Preview", "Code"]} className="not-prose border-0 bg-secondary">
      <Tab value="Preview" className="bg-transparent p-2">
        <div
          className={cn(
            "flex min-h-[180px] flex-wrap items-center justify-center gap-4 rounded-lg bg-background p-4 sm:p-8",
            className
          )}
        >
          <Example />
        </div>
      </Tab>
      <Tab value="Code">
        <ServerCodeBlock code={code} lang="tsx" />
      </Tab>
    </Tabs>
  )
}
