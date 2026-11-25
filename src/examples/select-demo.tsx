import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select placeholder="Choose a language" defaultValue="en">
      <div className="flex w-64 flex-col gap-2">
        <SelectLabel>Reading language</SelectLabel>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </div>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="la">Latin</SelectItem>
        <SelectItem value="zh">Chinese</SelectItem>
        <SelectItem value="ru">Russian</SelectItem>
      </SelectContent>
    </Select>
  )
}
