"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function DialogControlled() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-start gap-3">
      <Button onClick={() => setOpen(true)}>Share letter</Button>
      <p className="text-small text-muted-foreground tnum">Dialog is {open ? "open" : "closed"}.</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showClose={false}>
          <DialogHeader>
            <DialogTitle>Share Letter 1</DialogTitle>
            <DialogDescription>
              Anyone with the link can read &ldquo;On saving time&rdquo; and see your highlights on it.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
            <DialogClose render={<Button variant="primary" />}>Copy link</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
