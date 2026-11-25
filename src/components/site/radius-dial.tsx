"use client"

import * as React from "react"
import { ExternalLink, File, GitBranch } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardPanel, CardTitle } from "@/components/ui/card"
import { repoUrl } from "@/lib/shared"

const FILES = [
  { path: "LICENSE", added: 21, removed: 0 },
  { path: "README.md", added: 1, removed: 1 },
  { path: "package.json", added: 2, removed: 1 },
]

function Range({
  id,
  label,
  value,
  min,
  max,
  onChange,
}: {
  id: string
  label: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-small text-muted-foreground">
          {label}
        </label>
        <output htmlFor={id} className="tnum text-small font-medium">
          {value}px
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-6 w-full cursor-pointer accent-(--brand)"
      />
    </div>
  )
}

/** Quarter-circle guides drawn over the live card: frame corners solid, inner corners dashed. */
function Guides({ width, height, radius, inset }: { width: number; height: number; radius: number; inset: number }) {
  if (!width || !height) return null
  const outer = radius + inset
  const r = radius
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-visible"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="var(--brand)"
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      {outer > 0 && (
        <>
          <path d={`M 0 ${outer} A ${outer} ${outer} 0 0 1 ${outer} 0`} />
          <path d={`M ${width - outer} ${height} A ${outer} ${outer} 0 0 0 ${width} ${height - outer}`} />
        </>
      )}
      {r > 0 && (
        <g strokeDasharray="3 3">
          <path d={`M ${inset} ${inset + r} A ${r} ${r} 0 0 1 ${inset + r} ${inset}`} />
          <path d={`M ${width - inset - r} ${height - inset} A ${r} ${r} 0 0 0 ${width - inset} ${height - inset - r}`} />
        </g>
      )}
    </svg>
  )
}

export function RadiusDial() {
  const [radius, setRadius] = React.useState(12)
  const [inset, setInset] = React.useState(8)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [size, setSize] = React.useState({ width: 0, height: 0 })

  React.useLayoutEffect(() => {
    const node = cardRef.current
    if (!node) return
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return
      const box = entry.borderBoxSize[0]
      setSize({ width: box?.inlineSize ?? node.offsetWidth, height: box?.blockSize ?? node.offsetHeight })
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const outer = radius + inset

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_256px] lg:gap-12">
      <div className="relative min-w-0" style={{ "--radius": `${radius}px` } as React.CSSProperties}>
        <Card ref={cardRef} style={{ "--card-inset": `${inset}px` } as React.CSSProperties}>
          <CardPanel>
            <CardHeader>
              <CardTitle>
                <GitBranch className="size-4" strokeWidth={1.75} />
                <span className="truncate">ui</span>
                <Badge>main</Badge>
              </CardTitle>
              <CardAction className="self-center">yanisneverlies/ui</CardAction>
            </CardHeader>
            <CardContent className="flex min-w-0 items-center gap-3">
              <span
                aria-hidden="true"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary text-small font-medium"
              >
                Y
              </span>
              <span className="min-w-0 truncate">Add MIT license</span>
              <span className="ms-auto shrink-0 text-small text-muted-foreground">Nov 25</span>
            </CardContent>
            <CardContent>
              <ul className="flex flex-col gap-2">
                {FILES.map((file) => (
                  <li key={file.path} className="flex min-w-0 items-center gap-3 text-soft-foreground">
                    <File className="size-4 shrink-0 text-faint-foreground" strokeWidth={1.5} aria-hidden="true" />
                    <span className="min-w-0 truncate">{file.path}</span>
                    <span className="ms-auto tnum text-small font-medium text-success">+{file.added}</span>
                    <span className="w-6 text-end tnum text-small font-medium text-destructive">−{file.removed}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </CardPanel>
          <CardFooter>
            <span className="truncate">3 files changed</span>
            <Button variant="tonal" render={<a href={`${repoUrl}/commits/main`} target="_blank" rel="noreferrer" />}>
                Open
                <ExternalLink />
              </Button>
          </CardFooter>
        </Card>
        <Guides width={size.width} height={size.height} radius={radius} inset={inset} />
      </div>

      <div className="flex flex-col gap-6">
        <Range id="dial-radius" label="Radius" value={radius} min={0} max={24} onChange={setRadius} />
        <Range id="dial-inset" label="Inset" value={inset} min={0} max={16} onChange={setInset} />
        <p className="flex flex-wrap items-baseline gap-x-2 tnum text-body text-muted-foreground" aria-live="polite">
          <span className="text-foreground">{radius}</span>+<span className="text-foreground">{inset}</span>=
          <span className="font-medium text-brand-strong">{outer}px</span>
          <span className="basis-full text-small">inner + inset = frame</span>
        </p>
      </div>
    </div>
  )
}
