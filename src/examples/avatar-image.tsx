import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// A generated mark: a brand-orange arch on the avatar's own ground. No photo, no network request.
const mark =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M10 32V20a10 10 0 0 1 20 0v12z" fill="#ff3e00"/></svg>'
  )

export default function AvatarImageExample() {
  return (
    <Avatar size="lg" role="img" aria-label="Seneca Letters">
      <AvatarImage src={mark} alt="" />
      <AvatarFallback>SL</AvatarFallback>
    </Avatar>
  )
}
