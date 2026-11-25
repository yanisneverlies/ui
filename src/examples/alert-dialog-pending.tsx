"use client"

import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function deleteHighlights() {
  // The dialog stays open, with the button pending, until this settles.
  return new Promise<void>((resolve) => setTimeout(resolve, 1200))
}

export default function AlertDialogPending() {
  return (
    <AlertDialog pendingAnnouncement="Deleting highlights">
      <AlertDialogTrigger render={<Button />}>Clear all highlights</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Clear every highlight?</AlertDialogTitle>
          <AlertDialogDescription>
            Highlights from all 124 letters will be removed from this device. This can&apos;t be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogClose render={<Button variant="ghost" />}>Cancel</AlertDialogClose>
          <AlertDialogClose
            value="confirm"
            action={deleteHighlights}
            render={(props, state) => (
              <Button {...props} variant="destructive">
                {state.pending ? "Clearing…" : "Clear highlights"}
              </Button>
            )}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
