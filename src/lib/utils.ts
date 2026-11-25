import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge the custom type scale, so `text-small` and `text-muted` don't cancel each other.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["micro", "small", "body", "lead", "title", "display"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ClassName<State> = string | ((state: State) => string | undefined) | undefined

/**
 * Prepends a component's own classes to the className a caller passes, keeping UI SDK's support for
 * className as a function of the part's state.
 */
export function cx<State>(base: string, className?: ClassName<State>) {
  return typeof className === "function" ? (state: State) => cn(base, className(state)) : cn(base, className)
}
