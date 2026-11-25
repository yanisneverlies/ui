import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger render={<Button />}>Name highlight</PopoverTrigger>
      <PopoverContent>
        <PopoverTitle>Name this highlight</PopoverTitle>
        <PopoverDescription>Names appear in your highlights list.</PopoverDescription>
        <Field className="mt-2">
          <FieldLabel>Name</FieldLabel>
          <Input defaultValue="Time is the only thing we own" />
        </Field>
        <div className="mt-2 flex justify-end gap-2">
          <PopoverClose render={<Button variant="ghost" size="sm" />}>Cancel</PopoverClose>
          <PopoverClose render={<Button variant="primary" size="sm" />}>Save name</PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  )
}
