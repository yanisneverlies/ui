import { StrictMode, useEffect, useState } from "react"
import { createRoot } from "react-dom/client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Switch } from "@/components/ui/switch"
import { SoundProvider, useSound } from "@/lib/sound"

import "./index.css"

type ThemePref = "system" | "light" | "dark"

function applyTheme(pref: ThemePref) {
  const dark = pref === "dark" || (pref === "system" && matchMedia("(prefers-color-scheme: dark)").matches)
  document.documentElement.dataset.theme = dark ? "dark" : "light"
}

function ThemeSwitch() {
  const [pref, setPref] = useState<ThemePref>(() => {
    try {
      return (localStorage.getItem("ui:theme") as ThemePref) || "system"
    } catch {
      return "system"
    }
  })
  useEffect(() => {
    applyTheme(pref)
    try {
      localStorage.setItem("ui:theme", pref)
    } catch {}
    const mq = matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => pref === "system" && applyTheme("system")
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [pref])

  return (
    <div role="group" aria-label="Theme" className="inline-flex gap-1 rounded-md bg-well p-1">
      {(["system", "light", "dark"] as const).map((p) => (
        <Button
          key={p}
          size="sm"
          variant={pref === p ? "tonal" : "ghost"}
          aria-pressed={pref === p}
          className="h-7 rounded-[8px] capitalize"
          sound={{ name: "select", emphasis: "subtle" }}
          onClick={() => setPref(p)}
        >
          {p}
        </Button>
      ))}
    </div>
  )
}

function SoundSwitch() {
  const { enabled, setEnabled } = useSound()
  return (
    <label className="inline-flex items-center gap-2 text-small text-text-2">
      <Switch checked={enabled} onCheckedChange={setEnabled} sound={false} />
      Sound
    </label>
  )
}

function BranchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="5" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="6" cy="19" r="2" />
      <path d="M6 7v10M18 9c0 5-6 4-11.5 8.5" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" className="size-4 text-faint">
      <path d="M6 3h8l4 4v14H6z M14 3v4h4" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

function CommitCard() {
  return (
    <Card className="w-full max-w-[560px]">
      <CardPanel>
        <CardHeader>
          <CardTitle>
            <BranchIcon />
            <span className="truncate">ui</span>
            <Badge>main</Badge>
          </CardTitle>
          <CardAction className="self-center">yanisneverlies/ui</CardAction>
        </CardHeader>
        <CardContent className="flex min-w-0 items-center gap-3">
          <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-well text-micro font-medium">
            Y
          </span>
          <span className="min-w-0 truncate">Add README</span>
          <span className="ms-auto shrink-0 text-small text-faint">today</span>
        </CardContent>
        <CardContent>
          <ul className="flex flex-col gap-2">
            <li className="flex min-w-0 items-center gap-3 text-text-2">
              <FileIcon />
              <span className="min-w-0 truncate">README.md</span>
              <span className="ms-auto tnum text-small font-medium text-success">+34</span>
              <span className="tnum text-small font-medium text-danger">−0</span>
            </li>
          </ul>
        </CardContent>
      </CardPanel>
      <CardFooter>
        <span className="truncate">1 file changed</span>
        <Button variant="tonal" asChild>
          <a href="https://github.com/yanisneverlies/ui" target="_blank" rel="noreferrer">
            Open
            <ExternalIcon />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function LetterCard() {
  return (
    <Card variant="surface" className="w-full max-w-[560px]">
      <CardHeader>
        <CardDescription className="text-micro font-medium tracking-[0.08em] text-muted uppercase">Letter 1</CardDescription>
        <CardTitle className="font-display text-title font-normal">On saving time</CardTitle>
        <CardAction>
          <Badge tone="primary" shape="pill" size="sm" className="tnum">
            2 highlights
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="text-text-2">
        Continue to act thus, my dear Lucilius—set yourself free for your own sake; gather and save your time, which till
        lately has been forced from you, or filched away, or has merely slipped from your hands.
      </CardContent>
      <CardFooter>
        <Button size="sm" sound={{ name: "success", emphasis: "subtle" }}>
          Copy quote
        </Button>
        <Button size="sm" variant="ghost">
          Focus mode
          <Kbd>F</Kbd>
        </Button>
      </CardFooter>
    </Card>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-micro font-medium tracking-[0.08em] text-muted uppercase">{title}</h2>
      {children}
    </section>
  )
}

function App() {
  const [focus, setFocus] = useState(false)
  return (
    <SoundProvider>
      <main className="mx-auto flex max-w-[720px] flex-col gap-12 px-4 py-12 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-display">ui</h1>
          <div className="flex flex-wrap items-center gap-4">
            <SoundSwitch />
            <ThemeSwitch />
          </div>
        </header>

        <Section title="Card">
          <CommitCard />
          <LetterCard />
        </Section>

        <Section title="Button">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="primary" sound="tap">
              Save
              <Kbd variant="on-primary">⌘S</Kbd>
            </Button>
            <Button>Copy link</Button>
            <Button variant="ghost">Cancel</Button>
            <Button variant="danger" sound={{ name: "close", emphasis: "strong" }}>
              Remove all highlights
            </Button>
            <Button variant="link">Read letter 2</Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Small</Button>
            <Button>Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Open in new tab">
              <ExternalIcon />
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section title="Badge">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>feat/7702-auth</Badge>
            <Badge tone="primary">Current</Badge>
            <Badge tone="success">Shipped</Badge>
            <Badge tone="warning">Needs review</Badge>
            <Badge tone="info">Draft</Badge>
            <Badge tone="danger">Build failed</Badge>
            <Badge tone="muted" shape="pill">
              Archived
            </Badge>
          </div>
        </Section>

        <Section title="Kbd">
          <div className="flex flex-wrap items-center gap-4 text-small text-muted">
            <span className="flex items-center gap-2">
              <Kbd variant="keycap">J</Kbd> Previous paragraph
            </span>
            <span className="flex items-center gap-2">
              <Kbd variant="keycap">K</Kbd> Next paragraph
            </span>
            <span className="flex items-center gap-2">
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
              Search letters
            </span>
          </div>
        </Section>

        <Section title="Switch">
          <div className="flex flex-wrap items-center gap-8">
            <label className="inline-flex items-center gap-2 text-small text-text-2">
              <Switch checked={focus} onCheckedChange={setFocus} />
              Focus mode
            </label>
            <label className="inline-flex items-center gap-2 text-small text-text-2">
              <Switch size="sm" defaultChecked />
              Show footnotes
            </label>
            <label className="inline-flex items-center gap-2 text-small text-faint">
              <Switch disabled />
              Sync highlights
            </label>
          </div>
        </Section>
      </main>
    </SoundProvider>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
