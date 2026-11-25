"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default function ToastTypes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button onClick={() => toast.success("Letter 12 saved for offline reading")}>Save offline</Button>
      <Button onClick={() => toast.error("Couldn't save the highlight", { description: "Your selection is still there. Try again." })}>
        Save highlight
      </Button>
      <Button
        onClick={() =>
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
            loading: "Translating Letter 1",
            success: "Translation ready",
            error: "Translation failed",
          })
        }
      >
        Translate letter
      </Button>
    </div>
  )
}
