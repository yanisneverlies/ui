"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardPanel, CardTitle } from "@/components/ui/card"
import { Playground, type Values } from "../playground"

const variants = ["shell", "surface"] as const
const insets = ["4px", "8px", "12px", "16px"] as const

function code(v: Values) {
  const shell = v.variant === "shell"
  const open = shell ? `<Card className="[--card-inset:${v.inset}]">` : `<Card variant="surface">`
  const lines = shell
    ? [
        open,
        "  <CardPanel>",
        "    <CardHeader>",
        "      <CardDescription>Letter 1</CardDescription>",
        "      <CardTitle>On saving time</CardTitle>",
        "    </CardHeader>",
        "    <CardContent>Continue to act thus, my dear Lucilius…</CardContent>",
        "  </CardPanel>",
        "  <CardFooter>",
        "    2 highlights",
        '    <Button variant="tonal">Open</Button>',
        "  </CardFooter>",
        "</Card>",
      ]
    : [
        open,
        "  <CardHeader>",
        "    <CardDescription>Letter 1</CardDescription>",
        "    <CardTitle>On saving time</CardTitle>",
        "  </CardHeader>",
        "  <CardContent>Continue to act thus, my dear Lucilius…</CardContent>",
        "</Card>",
      ]
  return { lines, propLine: { variant: 0, inset: 0 } }
}

export function CardPlayground() {
  return (
    <Playground
      controls={[
        { prop: "variant", options: variants },
        { prop: "inset", label: "--card-inset (shell)", options: insets },
      ]}
      initial={{ variant: "shell", inset: "8px" }}
      render={(v) => {
        const header = (
          <CardHeader>
            <CardDescription>Letter 1</CardDescription>
            <CardTitle className="font-display font-normal">On saving time</CardTitle>
          </CardHeader>
        )
        const content = <CardContent className="truncate">Continue to act thus, my dear Lucilius…</CardContent>
        return v.variant === "shell" ? (
          <Card className="w-[min(320px,70vw)]" style={{ "--card-inset": v.inset } as React.CSSProperties}>
            <CardPanel>
              {header}
              {content}
            </CardPanel>
            <CardFooter>
              <span className="truncate">2 highlights</span>
              <Button variant="tonal">Open</Button>
            </CardFooter>
          </Card>
        ) : (
          <Card variant="surface" className="w-[min(320px,70vw)]">
            {header}
            {content}
          </Card>
        )
      }}
      code={code}
    />
  )
}
