import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm" role="img" aria-label="Lucilius">
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar size="md" role="img" aria-label="Lucilius">
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar size="lg" role="img" aria-label="Lucilius">
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
    </div>
  )
}
