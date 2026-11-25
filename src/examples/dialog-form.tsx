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
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Add note</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a note to Letter 7</DialogTitle>
          <DialogDescription>Notes are private and stay next to the passage you highlighted.</DialogDescription>
        </DialogHeader>
        <form method="dialog" className="mt-4 flex flex-col gap-4">
          <Field>
            <FieldLabel>Note</FieldLabel>
            <Textarea defaultValue="Avoid the crowd: the harm is in the company, not the arena." rows={3} />
            <FieldDescription>Gummere: &ldquo;Withdraw into yourself, as far as you can.&rdquo;</FieldDescription>
          </Field>
          <DialogFooter className="mt-0">
            <DialogClose render={<Button variant="ghost" />}>Discard note</DialogClose>
            <DialogClose render={<Button variant="primary" type="submit" />}>Save note</DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
