import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-[560px] flex-1 flex-col justify-center gap-6 px-4 py-12">
      <p className="tnum text-small text-muted-foreground">404</p>
      <h1 className="font-display text-display tracking-[-0.02em]">There&apos;s no page here.</h1>
      <p className="text-lead text-muted-foreground">
        The link may be old, or the page moved. Start from the docs, or search them.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button variant="primary" render={<Link href="/docs" />}>Go to the docs</Button>
        <Button variant="ghost" render={<Link href="/" />}>Go home</Button>
      </div>
    </main>
  )
}
