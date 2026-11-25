import { BookOpen, Highlighter, StickyNote } from "lucide-react"

import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"

export default function TabsIcons() {
  return (
    <Tabs defaultValue="read" className="w-full max-w-[480px]">
      <TabsList aria-label="Letter 2 tools">
        <TabsTab value="read">
          <BookOpen aria-hidden="true" />
          Read
        </TabsTab>
        <TabsTab value="highlights">
          <Highlighter aria-hidden="true" />
          Highlights
        </TabsTab>
        <TabsTab value="notes">
          <StickyNote aria-hidden="true" />
          Notes
        </TabsTab>
        <TabsTab value="parallel" disabled>
          Parallel
        </TabsTab>
      </TabsList>
      <TabsPanel value="read" className="text-body text-soft-foreground">
        Be careful lest this reading of many authors and books of every sort may tend to make you discursive and
        unsteady.
      </TabsPanel>
      <TabsPanel value="highlights" className="text-body text-soft-foreground">
        &ldquo;Nowhere is he who is everywhere.&rdquo;
      </TabsPanel>
      <TabsPanel value="notes" className="text-body text-soft-foreground">
        No margin notes yet.
      </TabsPanel>
    </Tabs>
  )
}
