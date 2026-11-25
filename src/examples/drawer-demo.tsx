"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const highlights = [
  { letter: "Letter 1", text: "Nothing, Lucilius, is ours, except time." },
  { letter: "Letter 1", text: "Set yourself free for your own sake." },
]

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button />}>Your margin</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Your margin</DrawerTitle>
          <DrawerDescription>2 highlights from Letter 1.</DrawerDescription>
        </DrawerHeader>
        <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain px-6 pt-4">
          {highlights.map((h) => (
            <li key={h.text} className="flex flex-col gap-1 rounded-lg bg-secondary p-3">
              <span className="text-body">&ldquo;{h.text}&rdquo;</span>
              <span className="text-small text-muted-foreground">{h.letter}</span>
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <DrawerClose render={<Button variant="ghost" />}>Close</DrawerClose>
          <DrawerClose
            render={<Button variant="primary" />}
            action={() => navigator.clipboard.writeText(highlights.map((h) => h.text).join("\n"))}
          >
            Copy all
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
