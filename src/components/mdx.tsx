import defaultMdxComponents from "fumadocs-ui/mdx"
import { Step, Steps } from "fumadocs-ui/components/steps"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { createGenerator } from "fumadocs-typescript"
import { AutoTypeTable } from "fumadocs-typescript/ui"
import type { MDXComponents } from "mdx/types"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Install } from "@/components/docs/install"
import { BadgePlayground } from "@/components/docs/playgrounds/badge"
import { ButtonPlayground } from "@/components/docs/playgrounds/button"
import { CardPlayground } from "@/components/docs/playgrounds/card"
import { KbdPlayground } from "@/components/docs/playgrounds/kbd"
import { SwitchPlayground } from "@/components/docs/playgrounds/switch"

const generator = createGenerator()

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Step,
    Steps,
    Tab,
    Tabs,
    ComponentPreview,
    Install,
    ButtonPlayground,
    BadgePlayground,
    CardPlayground,
    KbdPlayground,
    SwitchPlayground,
    AutoTypeTable: (props: React.ComponentProps<typeof AutoTypeTable>) => (
      <AutoTypeTable
        {...props}
        generator={generator}
        options={{
          // Show the real type ("primary" | "secondary" | …), not fumadocs' "union" shorthand.
          transform(entry) {
            entry.simplifiedType = entry.type.replace(/ \| undefined$/, "")
          },
        }}
      />
    ),
    ...components,
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
