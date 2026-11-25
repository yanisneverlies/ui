"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default function ToastDemo() {
  return (
    <Button onClick={() => toast("Quote copied", { description: "Letter 1, paragraph 1" })}>Copy quote</Button>
  )
}
