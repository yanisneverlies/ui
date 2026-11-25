"use client"

import * as React from "react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

function Tile({
  name,
  href,
  blurb,
  className,
  children,
}: {
  name: string
  href: string
  blurb: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <li className={cn("flex min-w-0 flex-col gap-4 rounded-2xl bg-secondary p-4", className)}>
      <div className="flex min-h-[120px] flex-wrap items-center justify-center gap-2 rounded-lg bg-background p-4">
        {children}
      </div>
      <div className="flex flex-col gap-1 px-2 pb-2">
        <Link href={href} className="font-medium underline-offset-4 hover:underline">
          {name}
        </Link>
        <p className="text-small text-muted-foreground">{blurb}</p>
      </div>
    </li>
  )
}

export function Showcase() {
  const [focus, setFocus] = React.useState(true)
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Tile
        name="Button"
        href="/docs/components/button"
        blurb="Six variants, three sizes, a pending state, optional sound."
        className="lg:col-span-2"
      >
        <Button variant="primary" sound="tap">
          Save
        </Button>
        <Button>Copy link</Button>
      </Tile>
      <Tile name="Card" href="/docs/components/card" blurb="A frame and a panel that share one curve.">
        <Card variant="surface" className="w-full max-w-[240px]">
          <CardHeader>
            <CardDescription>Letter 1</CardDescription>
            <CardTitle className="font-display font-normal">On saving time</CardTitle>
          </CardHeader>
          <CardContent className="line-clamp-2 text-small text-muted-foreground">
            Continue to act thus, my dear Lucilius—set yourself free for your own sake.
          </CardContent>
        </Card>
      </Tile>
      <Tile name="Badge" href="/docs/components/badge" blurb="Seven tones, rect or pill. Words carry the meaning.">
        <Badge tone="success">Shipped</Badge>
        <Badge tone="warning">Needs review</Badge>
        <Badge tone="destructive">Build failed</Badge>
        <Badge tone="muted" shape="pill">
          Archived
        </Badge>
      </Tile>
      <Tile name="Kbd" href="/docs/components/kbd" blurb="Flat hints, keycaps, and keys on a primary button.">
        <Kbd variant="keycap">J</Kbd>
        <Kbd variant="keycap">K</Kbd>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Tile>
      <Tile name="Switch" href="/docs/components/switch" blurb="UI SDK underneath. Plays a toggle cue when sound is on.">
        <label className="inline-flex items-center gap-2 text-small text-soft-foreground">
          <Switch checked={focus} onCheckedChange={setFocus} />
          Focus mode
        </label>
      </Tile>
    </ul>
  )
}
