import { Search } from "lucide-react"

import { Input, InputClear, InputGroup } from "@/components/ui/input"

export default function InputSearch() {
  return (
    <InputGroup className="w-full max-w-[320px]">
      <Search aria-hidden="true" />
      <Input type="search" aria-label="Search letters" placeholder="Search the letters" defaultValue="time" />
      <InputClear aria-label="Clear search" />
    </InputGroup>
  )
}
