"use client"

import * as React from "react"
import {
  Command as CommandPart,
  CommandEmpty as CommandEmptyPart,
  CommandGroup,
  CommandGroupLabel as CommandGroupLabelPart,
  CommandInput as CommandInputPart,
  CommandItem as CommandItemPart,
  CommandItemIcon as CommandItemIconPart,
  CommandItemText,
  CommandList as CommandListPart,
  CommandSeparator as CommandSeparatorPart,
  CommandShortcut as CommandShortcutPart,
  CommandStatus,
} from "@ui-sdk/react/command"
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogShortcut,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/react/dialog"
import { Search } from "lucide-react"

import { cn, cx } from "@/lib/utils"
import { listItem, popupSurface } from "./popup-classes"

/** The search field and the list share one column. Add your own surface, or put it in a CommandDialog. */
function Command({ className, ...props }: React.ComponentProps<typeof CommandPart>) {
  return <CommandPart className={cx("flex min-h-0 flex-col", className)} {...props} />
}

/**
 * A borderless field with a leading search icon. Give it an `aria-label`: there's no visible label.
 * `className` goes on the input; the icon and row are fixed.
 */
function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandInputPart>) {
  return (
    <div data-slot="command-input-row" className="flex h-12 shrink-0 items-center gap-3 px-4">
      <Search aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
      <CommandInputPart
        autoComplete="off"
        spellCheck={false}
        className={cx(
          "min-w-0 flex-1 border-0 bg-transparent text-body text-foreground ring-0 outline-none placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none",
          className
        )}
        {...props}
      />
    </div>
  )
}

/** Holds the groups and items. Scrolls when it's long; arrow keys scroll the highlighted item into view. */
function CommandList({ className, ...props }: React.ComponentProps<typeof CommandListPart>) {
  return (
    <CommandListPart
      className={cx("max-h-80 min-h-0 flex-1 overflow-y-auto overscroll-contain p-2 outline-none", className)}
      {...props}
    />
  )
}

function CommandGroupLabel({ className, ...props }: React.ComponentProps<typeof CommandGroupLabelPart>) {
  return <CommandGroupLabelPart className={cx("px-2 pt-3 pb-1 text-small text-muted-foreground", className)} {...props} />
}

/** Shows while nothing matches. Put it outside the list. */
function CommandEmpty({ className, ...props }: React.ComponentProps<typeof CommandEmptyPart>) {
  return <CommandEmptyPart className={cx("text-body text-muted-foreground data-empty:px-4 data-empty:py-6", className)} {...props} />
}

/** Separates groups with space, not a line. */
function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandSeparatorPart>) {
  return <CommandSeparatorPart className={cx("h-2 shrink-0", className)} {...props} />
}

/** 44px rows with 12px corners (a step up from Menu's 36px), so the list reads as a palette. */
function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandItemPart>) {
  return (
    <CommandItemPart
      className={cx(cn(listItem, "h-11 gap-3 rounded-lg data-pending:opacity-70"), className)}
      {...props}
    />
  )
}

/** A small tile for the item's icon, as in the site's search. */
function CommandItemIcon({ className, ...props }: React.ComponentProps<typeof CommandItemIconPart>) {
  return (
    <CommandItemIconPart
      className={cx("grid size-6 shrink-0 place-items-center rounded-sm bg-secondary text-muted-foreground", className)}
      {...props}
    />
  )
}

/** Right-aligned muted text at the end of an item: a letter's title, a state, "On". */
function CommandItemMeta({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-item-meta"
      className={cn("ms-auto shrink-0 ps-4 text-small text-muted-foreground in-data-highlighted:text-soft-foreground tnum", className)}
      {...props}
    />
  )
}

/** The item's keyboard shortcut, from its `shortcut` prop, aligned like CommandItemMeta. */
function CommandShortcut({ className, ...props }: React.ComponentProps<typeof CommandShortcutPart>) {
  return (
    <CommandShortcutPart
      className={cx("ms-auto shrink-0 ps-4 text-small text-muted-foreground in-data-highlighted:text-soft-foreground tnum", className)}
      {...props}
    />
  )
}

/** A 48px bar on a secondary tone for action hints. A plain div: put Kbd hints in it. */
function CommandFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command-footer"
      className={cn("flex h-12 shrink-0 items-center gap-4 bg-secondary px-4 text-small text-muted-foreground", className)}
      {...props}
    />
  )
}

/** CommandDialogContent's own props. It also takes every UI SDK DialogContent prop. */
interface CommandDialogContentOwnProps {
  /**
   * The dialog's accessible name. It isn't shown.
   * @defaultValue "Command palette"
   */
  title?: string
}

type CommandDialogContentProps = Omit<React.ComponentProps<typeof DialogContent>, "children"> &
  CommandDialogContentOwnProps & { children?: React.ReactNode }

/**
 * The panel: a modal in the upper third of the page. It opens without animation, since a palette is opened
 * many times a day. Brings its backdrop along. Put a `Command` (and an optional `CommandFooter`) inside it.
 */
function CommandDialogContent({ title = "Command palette", className, children, ...props }: CommandDialogContentProps) {
  return (
    <>
      <DialogBackdrop className="fixed inset-0 bg-black/30 transition-none dark:bg-black/60" />
      <DialogContent
        className={cx(
          cn(
            popupSurface,
            "fixed inset-x-0 top-[14vh] bottom-auto m-auto flex max-h-[calc(100dvh-32px)] w-[min(640px,calc(100vw-32px))] flex-col overflow-hidden overscroll-contain rounded-2xl p-0 transition-none"
          ),
          className
        )}
        {...props}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {children}
      </DialogContent>
    </>
  )
}

export {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandGroupLabel,
  CommandItem,
  CommandItemIcon,
  CommandItemText,
  CommandItemMeta,
  CommandShortcut,
  CommandSeparator,
  CommandEmpty,
  CommandStatus,
  CommandFooter,
  Dialog as CommandDialog,
  DialogTrigger as CommandDialogTrigger,
  CommandDialogContent,
  DialogShortcut as CommandDialogShortcut,
  type CommandDialogContentProps,
  type CommandDialogContentOwnProps,
}
