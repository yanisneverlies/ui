import type { Metadata } from "next"
import type { ReactNode } from "react"
import { RootProvider } from "fumadocs-ui/provider/next"

import { SearchDialog } from "@/components/search/search-dialog"
import { Toaster } from "@/components/ui/toast"
import { SoundProvider } from "@/lib/sound"
import "./global.css"

export const metadata: Metadata = {
  title: { default: "ui — warm, quiet React components", template: "%s · ui" },
  description: "Accessible React components you copy into your project and own. Tokens, concentric corners, opt-in sound. MIT.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{ SearchDialog }}
          i18n={{
            translations: {
              "No results found(search dialog)": "No pages match. Try a component name, like Button or Card.",
            },
          }}
        >
          <SoundProvider>
            {children}
            <Toaster />
          </SoundProvider>
        </RootProvider>
      </body>
    </html>
  )
}
