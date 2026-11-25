"use client"

import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldErrorExample() {
  return (
    <form
      noValidate
      onSubmit={(event) => event.preventDefault()}
      className="flex w-full max-w-[320px] flex-col items-start gap-4"
    >
      <Field name="email" className="w-full">
        <FieldLabel>Newsletter email</FieldLabel>
        <Input type="email" required defaultValue="reader@example" />
        <FieldDescription>We send one letter a week.</FieldDescription>
        <FieldError match="valueMissing">Enter your email address.</FieldError>
        <FieldError match="typeMismatch">Enter an address like reader@example.com.</FieldError>
      </Field>
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
