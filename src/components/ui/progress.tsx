"use client"

import * as React from "react"
import {
  Progress as ProgressPart,
  ProgressIndicator as ProgressIndicatorPart,
  ProgressLabel as ProgressLabelPart,
  ProgressTrack as ProgressTrackPart,
  ProgressValue as ProgressValuePart,
} from "@ui-sdk/react/progress"

import { cx } from "@/lib/utils"

/** The label sits on the left and the value on the right, above a full-width track. */
function Progress({ className, ...props }: React.ComponentProps<typeof ProgressPart>) {
  return <ProgressPart className={cx("grid w-full grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-2", className)} {...props} />
}

function ProgressLabel({ className, ...props }: React.ComponentProps<typeof ProgressLabelPart>) {
  return <ProgressLabelPart className={cx("min-w-0 text-small", className)} {...props} />
}

function ProgressValue({ className, ...props }: React.ComponentProps<typeof ProgressValuePart>) {
  return <ProgressValuePart className={cx("col-start-2 text-small text-muted-foreground tnum", className)} {...props} />
}

function ProgressTrack({ className, ...props }: React.ComponentProps<typeof ProgressTrackPart>) {
  return (
    <ProgressTrackPart
      className={cx("relative col-span-2 h-1 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    />
  )
}

/** Its width follows the value over 200 ms. Without a value it becomes the sliding segment. */
function ProgressIndicator({ className, ...props }: React.ComponentProps<typeof ProgressIndicatorPart>) {
  return (
    <ProgressIndicatorPart
      className={cx(
        "block h-full rounded-full bg-brand transition-[width] duration-200 ease-(--ease-out) motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

export { Progress, ProgressLabel, ProgressValue, ProgressTrack, ProgressIndicator }
