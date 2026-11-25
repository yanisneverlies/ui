import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button />}>Show footnote</PopoverTrigger>
      <PopoverContent>
        <PopoverTitle>Letter 1, on time</PopoverTitle>
        <PopoverDescription>
          Seneca opens the collection by telling Lucilius that nothing is truly ours except time.
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  )
}
