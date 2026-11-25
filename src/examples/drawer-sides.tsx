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

const sides = ["bottom", "right", "left"] as const

export default function DrawerSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((side) => (
        <Drawer key={side} side={side}>
          <DrawerTrigger render={<Button />} className="capitalize">
            {side}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Letters</DrawerTitle>
              <DrawerDescription>Jump to a letter in the collection of 124.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose render={<Button variant="ghost" />}>Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}
