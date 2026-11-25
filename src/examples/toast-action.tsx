"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default function ToastAction() {
  return (
    <Button
      onClick={() =>
        toast("Highlight deleted", {
          action: { label: "Undo", onAction: () => toast("Highlight restored") },
        })
      }
    >
      Delete highlight
    </Button>
  )
}
