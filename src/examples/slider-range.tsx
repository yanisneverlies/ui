import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack, SliderValue } from "@/components/ui/slider"

export default function SliderRange() {
  return (
    <Field className="w-full max-w-[320px]">
      <Slider defaultValue={[1, 20]} min={1} max={124} step={1}>
        <div className="flex items-baseline justify-between gap-4">
          <FieldLabel>Letters</FieldLabel>
          <SliderValue />
        </div>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb index={0} aria-label="First letter" />
            <SliderThumb index={1} aria-label="Last letter" />
          </SliderTrack>
        </SliderControl>
      </Slider>
      <FieldDescription>The range of letters to export, out of 124.</FieldDescription>
    </Field>
  )
}
