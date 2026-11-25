"use client"

import * as React from "react"
import {
  Slider as SliderPart,
  SliderControl as SliderControlPart,
  SliderIndicator as SliderIndicatorPart,
  SliderThumb as SliderThumbPart,
  SliderTrack as SliderTrackPart,
  SliderValue as SliderValuePart,
} from "@ui-sdk/react/slider"

import { cx } from "@/lib/utils"

function Slider({ className, ...props }: React.ComponentProps<typeof SliderPart>) {
  return (
    <SliderPart
      className={cx("flex w-full flex-col gap-2 data-disabled:opacity-45 data-[orientation=vertical]:h-48 data-[orientation=vertical]:w-auto", className)}
      {...props}
    />
  )
}

/** Where presses land. Taller than the track so it is easy to hit: 24px, 44px on coarse pointers. */
function SliderControl({ className, ...props }: React.ComponentProps<typeof SliderControlPart>) {
  return (
    <SliderControlPart
      className={cx(
        "flex h-6 w-full touch-none items-center select-none pointer-coarse:h-11 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-6 data-[orientation=vertical]:justify-center pointer-coarse:data-[orientation=vertical]:w-11",
        className
      )}
      {...props}
    />
  )
}

/** The 3:1 rail. */
function SliderTrack({ className, ...props }: React.ComponentProps<typeof SliderTrackPart>) {
  return (
    <SliderTrackPart
      className={cx(
        "relative h-1.5 w-full rounded-full bg-input data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
        className
      )}
      {...props}
    />
  )
}

function SliderIndicator({ className, ...props }: React.ComponentProps<typeof SliderIndicatorPart>) {
  return <SliderIndicatorPart className={cx("rounded-full bg-foreground", className)} {...props} />
}

/** Draws a 2px ring when its hidden range input has keyboard focus. */
function SliderThumb({ className, ...props }: React.ComponentProps<typeof SliderThumbPart>) {
  return (
    <SliderThumbPart
      className={cx(
        "relative size-4 rounded-full border border-input bg-background shadow-float outline-none after:absolute after:-inset-1 pointer-coarse:after:-inset-3.5 after:content-[''] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-foreground data-dragging:border-foreground",
        className
      )}
      {...props}
    />
  )
}

/** The formatted value, or a range joined with an en dash. */
function SliderValue({ className, ...props }: React.ComponentProps<typeof SliderValuePart>) {
  return <SliderValuePart className={cx("text-small text-muted-foreground tnum", className)} {...props} />
}

export { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb, SliderValue }
