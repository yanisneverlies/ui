/**
 * Shared surface and motion for floating content: popover, menu, select, tooltip.
 * Enter with ease-out, leave with ease-in; with reduced motion only the opacity changes.
 */
export const popupMotion =
  "origin-(--transform-origin) transition-[opacity,scale] duration-150 ease-(--ease-out) data-ending-style:duration-150 data-ending-style:ease-(--ease-in) data-starting-style:opacity-0 data-ending-style:opacity-0 motion-safe:data-starting-style:scale-96 motion-safe:data-ending-style:scale-96"

/** A raised surface with no border; the browser's popover border and padding are reset. */
export const popupSurface = "m-0 border-0 bg-popover text-popover-foreground shadow-float outline-none"
