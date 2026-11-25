/**
 * Shared surface and motion for floating content: popover, menu, select, tooltip.
 * Enter with ease-out, leave with ease-in; with reduced motion only the opacity changes.
 */
export const popupMotion =
  "origin-(--transform-origin) transition-[opacity,scale] duration-150 ease-(--ease-out) data-ending-style:duration-150 data-ending-style:ease-(--ease-in) data-starting-style:opacity-0 data-ending-style:opacity-0 motion-safe:data-starting-style:scale-96 motion-safe:data-ending-style:scale-96"

/** A raised surface with no border; the browser's popover border and padding are reset. */
export const popupSurface = "m-0 border-0 bg-popover text-popover-foreground shadow-float outline-none"

/** The dimmed page behind a modal (Dialog, Alert dialog, Drawer). */
export const backdropClasses =
  "fixed inset-0 bg-black/30 transition-opacity duration-200 ease-(--ease-out) data-ending-style:ease-(--ease-in) data-starting-style:opacity-0 data-ending-style:opacity-0 dark:bg-black/60"

/** A centered modal panel: Dialog and Alert dialog share it. */
export const modalPanel =
  "fixed inset-0 m-auto h-fit max-h-[calc(100dvh-32px)] w-[min(480px,calc(100vw-32px))] overflow-y-auto overscroll-contain rounded-2xl p-6 transition-[opacity,scale] duration-200 ease-(--ease-out) data-ending-style:duration-150 data-ending-style:ease-(--ease-in) data-starting-style:opacity-0 data-ending-style:opacity-0 motion-safe:data-starting-style:scale-96 motion-safe:data-ending-style:scale-96"

/** Rows in a floating list (Menu, Select, Combobox, Command): 8px corners, 4px inside a 12px surface. */
export const listItem =
  "relative flex h-9 cursor-default items-center gap-2 rounded-sm px-2 text-body outline-none select-none data-highlighted:bg-accent data-disabled:opacity-45 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground"
