import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="text" className="w-full max-w-[480px]">
      <TabsList aria-label="Letter 1">
        <TabsTab value="text">Text</TabsTab>
        <TabsTab value="analysis">Analysis</TabsTab>
        <TabsTab value="highlights">Highlights</TabsTab>
      </TabsList>
      <TabsPanel value="text" className="text-body text-soft-foreground">
        Hold every hour in your grasp. Lay hold of today&apos;s task, and you will not need to depend so much upon
        tomorrow&apos;s.
      </TabsPanel>
      <TabsPanel value="analysis" className="text-body text-soft-foreground">
        Seneca opens the collection with a plain instruction: take back your time before you try to improve anything
        else.
      </TabsPanel>
      <TabsPanel value="highlights" className="text-body text-soft-foreground">
        Two passages are highlighted in this letter.
      </TabsPanel>
    </Tabs>
  )
}
