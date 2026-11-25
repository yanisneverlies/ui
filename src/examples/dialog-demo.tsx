import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Delete highlight</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete this highlight?</DialogTitle>
          <DialogDescription>
            &ldquo;Set yourself free for your own sake&rdquo; in Letter 1 will be removed from your highlights. The
            letter itself stays.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Keep highlight</DialogClose>
          <DialogClose render={<Button variant="destructive" />}>Delete highlight</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
