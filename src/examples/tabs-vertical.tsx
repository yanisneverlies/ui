import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"

export default function TabsVertical() {
  return (
    <Tabs defaultValue="reading" orientation="vertical" className="flex w-full max-w-[480px] gap-6">
      <TabsList aria-label="Settings" className="shrink-0 flex-col items-stretch overflow-x-visible">
        <TabsTab value="reading">Reading</TabsTab>
        <TabsTab value="translation">Translation</TabsTab>
        <TabsTab value="email">Email</TabsTab>
      </TabsList>
      <div className="min-w-0 flex-1">
        <TabsPanel value="reading" className="pt-1 text-body text-soft-foreground">
          Choose whether footnotes show, and turn on focus mode to hide everything but the letter.
        </TabsPanel>
        <TabsPanel value="translation" className="pt-1 text-body text-soft-foreground">
          Pick the language the letters open in. You can switch on any letter.
        </TabsPanel>
        <TabsPanel value="email" className="pt-1 text-body text-soft-foreground">
          Set the address that gets the weekly letter.
        </TabsPanel>
      </div>
    </Tabs>
  )
}
