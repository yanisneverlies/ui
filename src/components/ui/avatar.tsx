"use client"

import * as React from "react"
import { Avatar as AvatarPart, AvatarFallback as AvatarFallbackPart, AvatarImage as AvatarImagePart } from "@ui-sdk/react/avatar"

import { cn, cx } from "@/lib/utils"

type AvatarSize = "sm" | "md" | "lg"

const sizeClasses: Record<AvatarSize, string> = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
}

const AvatarSizeContext = React.createContext<AvatarSize>("md")

/** Avatar's own props. It also takes every UI SDK `Avatar` prop. */
interface AvatarOwnProps {
  /**
   * The width and height: 24, 32 or 40 px. `sm` shows one letter of the fallback.
   * @defaultValue "md"
   */
  size?: AvatarSize
}

type AvatarProps = React.ComponentProps<typeof AvatarPart> & AvatarOwnProps

function Avatar({ className, size = "md", ...props }: AvatarProps) {
  return (
    <AvatarSizeContext.Provider value={size}>
      <AvatarPart
        data-size={size}
        className={cx(
          `relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-secondary ${sizeClasses[size]}`,
          className
        )}
        {...props}
      />
    </AvatarSizeContext.Provider>
  )
}

/** Covers the avatar once it loads. */
function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarImagePart>) {
  return <AvatarImagePart className={cx("absolute inset-0 size-full object-cover", className)} {...props} />
}

/** Initials while the image loads, and for good if it fails. At `sm` a text fallback shrinks to its first letter. */
function AvatarFallback({ className, children, ...props }: React.ComponentProps<typeof AvatarFallbackPart>) {
  const size = React.useContext(AvatarSizeContext)
  return (
    <AvatarFallbackPart
      className={cx("flex size-full items-center justify-center text-small font-medium text-soft-foreground", className)}
      {...props}
    >
      {typeof children === "string" && size === "sm" ? Array.from(children)[0] : children}
    </AvatarFallbackPart>
  )
}

/** An overlapping row. Each avatar gets a 2px ring in the page color so the overlap reads. */
function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="avatar-group"
      className={cn("flex items-center -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, type AvatarProps, type AvatarOwnProps }
