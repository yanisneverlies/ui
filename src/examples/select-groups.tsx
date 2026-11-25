import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectGroups() {
  return (
    <Select placeholder="Choose a letter">
      <div className="flex w-64 flex-col gap-2">
        <SelectLabel>Jump to letter</SelectLabel>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </div>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Book 1</SelectGroupLabel>
          <SelectItem value="1">Letter 1: On saving time</SelectItem>
          <SelectItem value="2">Letter 2: On discursiveness in reading</SelectItem>
          <SelectItem value="7">Letter 7: On crowds</SelectItem>
          <SelectItem value="8">Letter 8: On the philosopher&rsquo;s seclusion</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Book 2</SelectGroupLabel>
          <SelectItem value="13">Letter 13: On groundless fears</SelectItem>
          <SelectItem value="16">Letter 16: On philosophy, the guide of life</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
