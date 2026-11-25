import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

import { SoundToggle } from "@/components/site/sound-toggle"
import { Wordmark } from "@/components/site/wordmark"
import { repoUrl } from "./shared"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: { title: <Wordmark /> },
    githubUrl: repoUrl,
    themeSwitch: { mode: "light-dark-system" },
    links: [
      { text: "Docs", url: "/docs", active: "nested-url", on: "nav" },
      { text: "Components", url: "/docs/components/button", active: "none", on: "nav" },
      { type: "custom", secondary: true, children: <SoundToggle /> },
    ],
  }
}
