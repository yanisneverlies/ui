"use client"

import { ScrollArea, ScrollAreaContent, ScrollAreaScrollbar, ScrollAreaViewport } from "@/components/ui/scroll-area"

const letters = Array.from({ length: 20 }, (_, index) => `Letter ${index + 1}`)

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-60 w-full max-w-[320px] rounded-xl bg-secondary">
      <ScrollAreaViewport role="region" aria-label="Letters 1 to 20">
        <ScrollAreaContent>
          <ul className="p-2">
            {letters.map((letter) => (
              <li key={letter} className="flex h-10 items-center rounded-lg px-3 text-body">
                {letter}
              </li>
            ))}
          </ul>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar />
    </ScrollArea>
  )
}
