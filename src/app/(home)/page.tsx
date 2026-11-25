import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { CopyCommand } from "@/components/site/copy-command"
import { RadiusDial } from "@/components/site/radius-dial"
import { Showcase } from "@/components/site/showcase"
import { Button } from "@/components/ui/button"
import { repoUrl } from "@/lib/shared"

const PRINCIPLES = [
  {
    title: "AA contrast in both themes",
    body: "Every text pair passes WCAG AA in light and dark. Buttons fill with #dd3400, so white text reaches 4.6:1.",
  },
  {
    title: "Sound stays off until you ask",
    body: "Wrap your app in SoundProvider to opt in. Cues confirm what the user just did, and never play on hover or page load.",
  },
  {
    title: "One knob for every corner",
    body: "Set --radius and everything follows, from a 6px badge to a 20px card frame.",
  },
  {
    title: "Your code, built for agents too",
    body: "The shadcn CLI copies the source into your project. An agent skill and /llms.txt teach your coding agent to use it.",
  },
]

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-[1080px] flex-col gap-12 px-4 pt-12 pb-12 sm:px-8 sm:gap-12">
      <section className="flex max-w-[640px] flex-col gap-6">
        <h1 className="font-display text-display tracking-[-0.02em]">Quiet React components you own.</h1>
        <p className="text-lead text-muted-foreground">
          Accessible components on UI SDK and Tailwind CSS v4, with one design language: warm neutrals, concentric
          corners, and sound that stays off until you ask for it. Copy them in with the shadcn CLI, then change
          anything.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" size="lg" render={<Link href="/docs" />}>
              Read the docs
              <ArrowRight />
            </Button>
          <Button size="lg" render={<a href={repoUrl} target="_blank" rel="noreferrer" />}>
              View on GitHub
            </Button>
        </div>
        <CopyCommand command="npx shadcn add @yanisneverlies/button" className="max-w-[480px]" />
      </section>

      <section aria-labelledby="corners" className="flex flex-col gap-8">
        <div className="flex max-w-[560px] flex-col gap-2">
          <h2 id="corners" className="font-display text-lead">
            Corners that line up
          </h2>
          <p className="text-muted-foreground">
            A card&apos;s frame adds its inset to the theme radius, so the panel inside and the button in its footer
            share one curve. Drag the values and watch the guides.
          </p>
        </div>
        <RadiusDial />
      </section>

      <section aria-labelledby="components" className="flex flex-col gap-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="components" className="font-display text-lead">
            Eighteen components
          </h2>
          <Link href="/docs/components/button" className="inline-flex min-h-6 items-center text-small text-muted-foreground hover:text-foreground">
            Browse the docs
          </Link>
        </div>
        <Showcase />
      </section>

      <section aria-labelledby="principles" className="flex flex-col gap-8">
        <h2 id="principles" className="font-display text-lead">
          What you get by default
        </h2>
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {PRINCIPLES.map((item) => (
            <li key={item.title} className="flex flex-col gap-2">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small text-muted-foreground">
        <span className="inline-flex min-h-6 items-center">MIT license</span>
        <a href={repoUrl} className="inline-flex min-h-6 items-center hover:text-foreground" target="_blank" rel="noreferrer">
          yanisneverlies/ui on GitHub
        </a>
        <a href="https://fumadocs.dev" className="inline-flex min-h-6 items-center hover:text-foreground" target="_blank" rel="noreferrer">
          Docs built with Fumadocs
        </a>
      </footer>
    </main>
  )
}
