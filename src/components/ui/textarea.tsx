"use client"

import * as React from "react"
import { Textarea as TextareaPart } from "@ui-sdk/react/textarea"

import { cx } from "@/lib/utils"
import { fieldBox } from "./input"

function Textarea({ className, ...props }: React.ComponentProps<typeof TextareaPart>) {
  return <TextareaPart className={cx(`${fieldBox} min-h-24 resize-y px-3 py-2 leading-6`, className)} {...props} />
}

export { Textarea }
