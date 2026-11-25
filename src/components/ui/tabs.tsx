"use client"

import * as React from "react"
import {
  Tabs,
  TabsIndicator,
  TabsList as TabsListPart,
  TabsPanel as TabsPanelPart,
  TabsTab as TabsTabPart,
} from "@ui-sdk/react/tabs"

import { cx } from "@/lib/utils"

/** The list brings its own indicator: a raised pill that slides to the selected tab. */
function TabsList({ className, children, ...props }: React.ComponentProps<typeof TabsListPart>) {
  return (
    <TabsListPart
      className={cx(
        "relative inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-lg bg-secondary p-1 data-[orientation=vertical]:overflow-x-auto sm:data-[orientation=vertical]:flex-col sm:data-[orientation=vertical]:items-stretch sm:data-[orientation=vertical]:overflow-visible",
        className
      )}
      {...props}
    >
      {(state) => (
        <>
          <TabsIndicator className="absolute top-(--active-tab-top) left-(--active-tab-left) h-(--active-tab-height) w-(--active-tab-width) rounded-sm bg-background shadow-raised transition-[left,top,width,height] duration-200 ease-(--ease-out) data-[activation-direction=none]:transition-none motion-reduce:transition-none" />
          {typeof children === "function" ? children(state) : children}
        </>
      )}
    </TabsListPart>
  )
}

function TabsTab({ className, ...props }: React.ComponentProps<typeof TabsTabPart>) {
  return (
    <TabsTabPart
      className={cx(
        "relative z-10 inline-flex h-8 shrink-0 pointer-coarse:after:absolute pointer-coarse:after:inset-x-0 pointer-coarse:after:-inset-y-1.5 pointer-coarse:after:content-['']  items-center gap-2 rounded-sm px-3 text-small font-medium whitespace-nowrap text-muted-foreground transition-colors duration-150 hover:text-foreground data-selected:text-foreground data-disabled:opacity-45 [&_svg]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsPanel({ className, ...props }: React.ComponentProps<typeof TabsPanelPart>) {
  return <TabsPanelPart className={cx("min-w-0 pt-4 sm:in-data-[orientation=vertical]:pt-0 outline-none focus-visible:rounded-sm", className)} {...props} />
}

/** Vertical tabs sit beside their panels from `sm` up; below that the list becomes a scrolling row above them. */
function TabsRoot({ className, ...props }: React.ComponentProps<typeof Tabs>) {
  return <Tabs className={cx("data-[orientation=vertical]:flex data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-4 sm:data-[orientation=vertical]:flex-row sm:data-[orientation=vertical]:gap-6", className)} {...props} />
}

export { TabsRoot as Tabs, TabsList, TabsTab, TabsPanel }
