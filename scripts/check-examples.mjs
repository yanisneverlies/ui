// Docs render examples from a Server Component, so an example that passes a function (an arrow function,
// a handler, a render function) or uses a hook must be a Client Component. Fails the build if one isn't.
import { readdirSync, readFileSync } from "node:fs"

const dir = new URL("../src/examples/", import.meta.url)
const bad = readdirSync(dir)
  .filter((file) => file.endsWith(".tsx"))
  .filter((file) => {
    const source = readFileSync(new URL(file, dir), "utf8")
    const isClient = /^\s*["']use client["']/.test(source)
    const needsClient = /=>|\buse[A-Z]\w*\(|\btoast\(/.test(source)
    return needsClient && !isClient
  })

if (bad.length) {
  console.error(`These examples pass functions or use hooks but lack "use client":\n  ${bad.join("\n  ")}`)
  process.exit(1)
}
console.log("examples: ok")
