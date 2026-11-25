"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useDocsSearch, type SearchResultRecord } from "fumadocs-core/search/client"
import {
  Command,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandList,
  CommandStatus,
} from "@ui-sdk/react/command"
import { AlignLeft, FileText, Hash, Search, type LucideIcon } from "lucide-react"

import { Wordmark } from "@/components/site/wordmark"
import { Dialog as DialogRoot, DialogBackdrop, DialogContent } from "@ui-sdk/react/dialog"

import { DialogTitle } from "@/components/ui/dialog"
import { popupSurface } from "@/components/ui/popup-classes"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { cn } from "@/lib/utils"

/** The props Fumadocs passes to a custom search dialog. */
interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type RowKind = "page" | "heading" | "text"

interface Row {
  value: string
  kind: RowKind
  title: string
  detail?: string
  href: string
}

const kindMeta: Record<RowKind, { icon: LucideIcon; label: string; action: string }> = {
  page: { icon: FileText, label: "Page", action: "Open page" },
  heading: { icon: Hash, label: "Section", action: "Open section" },
  text: { icon: AlignLeft, label: "Text", action: "Open page" },
}

const suggestions: Row[] = [
  { value: "s-intro", kind: "page", title: "Introduction", detail: "Docs", href: "/docs" },
  { value: "s-install", kind: "page", title: "Installation", detail: "Docs", href: "/docs/installation" },
  { value: "s-theming", kind: "page", title: "Theming", detail: "Docs", href: "/docs/theming" },
  { value: "s-button", kind: "page", title: "Button", detail: "Components", href: "/docs/components/button" },
  { value: "s-card", kind: "page", title: "Card", detail: "Components", href: "/docs/components/card" },
  { value: "s-dialog", kind: "page", title: "Dialog", detail: "Components", href: "/docs/components/dialog" },
  { value: "s-select", kind: "page", title: "Select", detail: "Components", href: "/docs/components/select" },
]

const browseRow: Row = {
  value: "browse",
  kind: "page",
  title: "Browse the docs",
  detail: "Docs",
  href: "/docs",
}

/** Search content is raw MDX: drop markdown markers from what we show. */
function clean(text: string) {
  return text.replace(/[`*]/g, "").replace(/\s+/g, " ").trim()
}

/** A line that is only a JSX tag, such as <Install name="card" />, is not something to read. */
function isJsxLine(text: string) {
  const t = text.trim()
  return t.startsWith("<") && t.endsWith(">")
}

function toRow(result: SearchResultRecord, index: number): Row {
  const detail = result.breadcrumbs?.length ? clean(result.breadcrumbs.join(" › ")) : undefined
  return {
    value: `r${index}:${result.id}`,
    kind: result.type,
    title: clean(result.content),
    detail,
    href: result.url,
  }
}

function ResultRow({ row }: { row: Row }) {
  const { icon: Icon, label } = kindMeta[row.kind]
  return (
    <CommandItem
      value={row.value}
      label={row.title}
      className="flex h-11 min-w-0 cursor-default items-center gap-3 rounded-lg px-2 text-body outline-none data-highlighted:bg-accent"
    >
      <CommandItemIcon className="grid size-6 shrink-0 place-items-center rounded-sm bg-secondary text-muted-foreground [&_svg]:size-4">
        <Icon aria-hidden="true" />
      </CommandItemIcon>
      <span className="min-w-0 shrink truncate text-foreground">{row.title}</span>
      {row.detail ? (
        <span className="hidden min-w-0 flex-1 truncate text-muted-foreground sm:block">{row.detail}</span>
      ) : (
        <span className="flex-1" />
      )}
      <span className="shrink-0 text-small text-muted-foreground">{label}</span>
    </CommandItem>
  )
}

function Group({ label, rows }: { label: string; rows: Row[] }) {
  if (rows.length === 0) return null
  return (
    <CommandGroup>
      <CommandGroupLabel className="px-2 pt-3 pb-1 text-small text-muted-foreground">{label}</CommandGroupLabel>
      {rows.map((row) => (
        <ResultRow key={row.value} row={row} />
      ))}
    </CommandGroup>
  )
}

function SkeletonRows() {
  return (
    <div aria-hidden="true" className="px-2 pb-2">
      <div className="px-2 pt-3 pb-1 text-small text-muted-foreground">Searching</div>
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex h-11 items-center gap-3 px-2">
          <div className="size-6 shrink-0 rounded-sm bg-secondary motion-safe:animate-pulse" />
          <div
            className={cn("h-3 rounded-sm bg-secondary motion-safe:animate-pulse", i === 1 ? "w-2/5" : "w-1/3")}
          />
          <div className="h-3 min-w-0 flex-1 rounded-sm bg-secondary/60 motion-safe:animate-pulse" />
        </div>
      ))}
    </div>
  )
}

function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter()
  const { search, onSearchChange, isLoading, data, error } = useDocsSearch({ type: "fetch", api: "/api/search" })
  const [highlighted, setHighlighted] = React.useState<string | null>(null)
  const [slow, setSlow] = React.useState(false)

  const trimmed = search.trim()

  React.useEffect(() => {
    if (!isLoading || !trimmed) {
      setSlow(false)
      return
    }
    const timer = setTimeout(() => setSlow(true), 300)
    return () => clearTimeout(timer)
  }, [isLoading, trimmed])

  const records = React.useMemo(
    () => (data?.items ?? []).filter((item): item is SearchResultRecord => item.type !== "table" && !isJsxLine(item.content)),
    [data]
  )
  const rows = React.useMemo(() => records.map(toRow), [records])
  const fresh = data?.query === search

  type Mode = "suggestions" | "loading" | "error" | "empty" | "results" | "pending"
  let mode: Mode
  if (!trimmed) mode = "suggestions"
  else if (slow && isLoading) mode = "loading"
  else if (error && !fresh) mode = "error"
  else if (fresh && !isLoading && rows.length === 0) mode = "empty"
  else if (rows.length > 0) mode = "results"
  else mode = "pending"

  const pages = mode === "results" ? rows.filter((r) => r.kind === "page") : []
  const sections = mode === "results" ? rows.filter((r) => r.kind !== "page") : []

  const byValue = React.useMemo(() => {
    const map = new Map<string, Row>()
    for (const row of [...suggestions, browseRow, ...rows]) map.set(row.value, row)
    return map
  }, [rows])

  const current = highlighted ? byValue.get(highlighted) : undefined
  const action = kindMeta[current?.kind ?? "page"].action

  function handleOpenChange(next: boolean) {
    onOpenChange(next)
    if (!next) {
      onSearchChange("")
      setHighlighted(null)
    }
  }

  function run(value: string) {
    const row = byValue.get(value)
    if (!row) return
    router.push(row.href)
    handleOpenChange(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={(next) => handleOpenChange(next)}>
      {/* A command palette opens many times a day: no fade or scale on the panel or its backdrop. */}
      <DialogBackdrop className="fixed inset-0 bg-black/30 transition-none dark:bg-black/60" />
      <DialogContent
        className={cn(
          popupSurface,
          "fixed inset-x-0 top-[14vh] bottom-auto m-auto flex max-h-[calc(100dvh-32px)] w-[min(720px,calc(100vw-32px))] flex-col overflow-hidden overscroll-contain rounded-2xl p-0 transition-none"
        )}
      >
        <DialogTitle className="sr-only">Search the docs</DialogTitle>
        <Command
          filter={false}
          query={search}
          onQueryChange={(query) => onSearchChange(query)}
          value={highlighted}
          onValueChange={(value) => setHighlighted(value)}
          onAction={run}
          loop
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="flex h-16 shrink-0 items-center gap-3 px-4">
            <Search aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
            <CommandInput
              aria-label="Search the docs"
              placeholder="Search the docs…"
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 border-0 bg-transparent text-title text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none"
            />
            <Kbd aria-hidden="true">Esc</Kbd>
          </div>

          <CommandStatus className="sr-only">
            {mode === "loading"
              ? "Searching"
              : mode === "error"
                ? "Search couldn't load."
                : mode === "empty"
                  ? "No results"
                  : mode === "results"
                    ? `${rows.length} ${rows.length === 1 ? "result" : "results"}`
                    : ""}
          </CommandStatus>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-2 [max-height:min(420px,calc(100dvh-176px))]">
            {mode === "loading" ? <SkeletonRows /> : null}

            {mode === "error" ? (
              <p role="alert" className="px-4 py-6 text-body text-muted-foreground">
                Search couldn&apos;t load. Browse the sidebar instead.
              </p>
            ) : null}

            {mode === "empty" ? (
              <div className="px-2">
                <p className="px-2 py-4 text-body text-muted-foreground">No pages match “{trimmed}”.</p>
              </div>
            ) : null}

            <CommandList className={cn("px-2 outline-none", mode === "loading" || mode === "error" ? "hidden" : null)}>
              {mode === "suggestions" ? <Group label="Suggestions" rows={suggestions} /> : null}
              {mode === "results" ? (
                <>
                  <Group label="Pages" rows={pages} />
                  <Group label="In pages" rows={sections} />
                </>
              ) : null}
              {mode === "empty" ? <ResultRow row={browseRow} /> : null}
            </CommandList>
          </div>
        </Command>

        <div className="flex h-12 shrink-0 items-center justify-between gap-3 rounded-b-2xl bg-secondary px-4 text-small text-muted-foreground">
          <Wordmark />
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              {action}
              <Kbd aria-hidden="true">↵</Kbd>
            </span>
            <span className="flex items-center gap-2">
              Move
              <KbdGroup aria-hidden="true">
                <Kbd>↑</Kbd>
                <Kbd>↓</Kbd>
              </KbdGroup>
            </span>
          </div>
        </div>
      </DialogContent>
    </DialogRoot>
  )
}

export { SearchDialog, type SearchDialogProps }
