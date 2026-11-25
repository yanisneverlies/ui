"use client"

import * as React from "react"
import {
  play as playCue,
  setEnabled as setCueEnabled,
  setTheme as setCueTheme,
  setVolume as setCueVolume,
  unlock,
  type PlayOptions,
  type SoundName,
  type ThemeName,
} from "cuelume"

/**
 * Sounds are off until the app opts in. With no <SoundProvider>, every component stays silent.
 *
 * Sounds confirm something the user just did (a toggle, a copy, a save). Never on hover, never on
 * page load, never repeated for errors. Keep a visible mute in the UI: a <Switch> bound to
 * `useSound().enabled` is enough.
 */

export type { SoundName, PlayOptions }

/** A cue name, or a cue with options: `{ name: "success", emphasis: "subtle" }`. */
export type SoundCue = SoundName | ({ name: SoundName } & PlayOptions)

/** What a component's `sound` prop accepts. `false` or `null` silences it. */
export type SoundProp = SoundCue | false | null | undefined

type SoundContextValue = {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
  /** Plays a cue if sound is on. `defaults` fill options the cue doesn't set. */
  play: (cue: SoundProp, defaults?: PlayOptions) => void
}

const SoundContext = React.createContext<SoundContextValue>({
  enabled: false,
  setEnabled: () => {},
  play: () => {},
})

type SoundProviderProps = {
  children: React.ReactNode
  /** Used until the user makes a choice. Default false. */
  defaultEnabled?: boolean
  /** Where the user's choice is kept. Set `null` to not persist. */
  storageKey?: string | null
  /** cuelume material: "default", "press", "mech", "bubble", … */
  theme?: ThemeName
  /** Global volume, 0–1. */
  volume?: number
}

function SoundProvider({
  children,
  defaultEnabled = false,
  storageKey = "ui:sound",
  theme,
  volume,
}: SoundProviderProps) {
  const [enabled, setEnabledState] = React.useState(defaultEnabled)

  React.useEffect(() => {
    if (!storageKey) return
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored === "on" || stored === "off") setEnabledState(stored === "on")
    } catch {}
  }, [storageKey])

  React.useEffect(() => setCueEnabled(enabled), [enabled])
  React.useEffect(() => {
    if (theme) setCueTheme(theme)
  }, [theme])
  React.useEffect(() => {
    if (volume !== undefined) setCueVolume(volume)
  }, [volume])

  const setEnabled = React.useCallback(
    (next: boolean) => {
      setEnabledState(next)
      if (storageKey) {
        try {
          localStorage.setItem(storageKey, next ? "on" : "off")
        } catch {}
      }
      // Called from the click that turns sound on, so the browser lets audio start.
      if (next) void unlock()
    },
    [storageKey]
  )

  const play = React.useCallback(
    (cue: SoundProp, defaults?: PlayOptions) => {
      if (!enabled || !cue) return
      const { name, ...options } = typeof cue === "string" ? { name: cue } : cue
      playCue(name, { ...defaults, ...options })
    },
    [enabled]
  )

  const value = React.useMemo(() => ({ enabled, setEnabled, play }), [enabled, setEnabled, play])

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

function useSound() {
  return React.useContext(SoundContext)
}

export { SoundProvider, useSound }
