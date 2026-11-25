import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"

export default function AvatarGroupExample() {
  return (
    <AvatarGroup aria-label="People in the letters">
      <Avatar role="img" aria-label="Lucilius">
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar role="img" aria-label="Epicurus">
        <AvatarFallback>E</AvatarFallback>
      </Avatar>
      <Avatar role="img" aria-label="Cato">
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}
