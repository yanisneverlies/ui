"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { Check, Copy } from "lucide-react"

import { useCopy } from "@/components/site/copy-command"
import { cn } from "@/lib/utils"

export type Control =
  | { prop: string; label?: string; options: readonly string[] }
  | { prop: string; label?: string; type: "boolean" }

export type Values = Record<string, string | boolean>

function Segmented({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: readonly string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <span className="font-mono text-small text-muted-foreground">{label}</span>
      <div role="group" aria-label={label} className="flex flex-wrap gap-1 rounded-lg bg-secondary p-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
            className={cn(
              "pressable h-8 rounded-sm px-3 text-small text-muted-foreground hover:text-foreground",
              value === option && "bg-background text-foreground shadow-raised"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

/**
 * Pick a prop value: the preview morphs to it and the matching line in the code lights up.
 * `render` draws the component; `code` returns one string per line, and `line` says which line shows a prop.
 */
export function Playground({
  controls,
  initial,
  render,
  code,
}: {
  controls: Control[]
  initial: Values
  render: (values: Values) => React.ReactNode
  code: (values: Values) => { lines: string[]; propLine: Record<string, number> }
}) {
  const [values, setValues] = React.useState<Values>(initial)
  const [changed, setChanged] = React.useState<string | null>(null)
  const reduce = useReducedMotion()
  const { state, copy } = useCopy()
  const { lines, propLine } = code(values)
  const lit = changed ? propLine[changed] : undefined

  function set(prop: string, value: string | boolean) {
    setValues((current) => ({ ...current, [prop]: value }))
    setChanged(prop)
  }

  return (
    <div className="not-prose flex flex-col gap-4 rounded-2xl bg-secondary p-2">
      <div className="flex min-h-[160px] items-center justify-center rounded-lg bg-background p-8">
        <motion.div layout={!reduce} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
          {render(values)}
        </motion.div>
      </div>
      <div className="flex flex-wrap gap-4 px-2">
        {controls.map((control) =>
          "options" in control ? (
            <Segmented
              key={control.prop}
              label={control.label ?? control.prop}
              options={control.options}
              value={String(values[control.prop])}
              onChange={(value) => set(control.prop, value)}
            />
          ) : (
            <Segmented
              key={control.prop}
              label={control.label ?? control.prop}
              options={["false", "true"]}
              value={String(values[control.prop])}
              onChange={(value) => set(control.prop, value === "true")}
            />
          )
        )}
      </div>
      <div className="relative min-w-0 rounded-lg bg-background">
        <pre className="me-12 overflow-x-auto overscroll-x-contain p-4 pe-4 font-mono text-small leading-6">
          {lines.map((line, index) => (
            <span
              key={index}
              className={cn(
                "-mx-4 block px-4 transition-colors duration-300",
                index === lit ? "bg-brand-soft text-foreground" : "text-soft-foreground"
              )}
            >
              {line || " "}
            </span>
          ))}
        </pre>
        <button
          type="button"
          onClick={() => copy(lines.join("\n"))}
          aria-label={state === "copied" ? "Copied" : "Copy code"}
          className="pressable absolute end-2 top-2 grid size-8 place-items-center rounded-sm text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          {state === "copied" ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
        </button>
        {state === "denied" ? (
          <p role="status" className="px-4 pb-4 text-small text-muted-foreground">
            Your browser blocked the clipboard. Select the code and copy it.
          </p>
        ) : null}
      </div>
    </div>
  )
}

/** Builds JSX lines for one element with string or boolean props, tracking which line holds each prop. */
export function jsx(tag: string, props: Values, children?: string) {
  const lines = [`<${tag}`]
  const propLine: Record<string, number> = {}
  for (const [key, value] of Object.entries(props)) {
    propLine[key] = lines.length
    lines.push(typeof value === "boolean" ? (value ? `  ${key}` : `  ${key}={false}`) : `  ${key}="${value}"`)
  }
  if (children === undefined) {
    lines.push("/>")
  } else {
    lines.push(">", `  ${children}`, `</${tag}>`)
  }
  return { lines, propLine }
}
