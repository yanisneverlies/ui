import { Field, FieldLabel } from "@/components/ui/field"
import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack, SliderValue } from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <Field className="w-full max-w-[320px]">
      <Slider defaultValue={1.6} min={1.4} max={2} step={0.1} format={{ minimumFractionDigits: 1 }}>
        <div className="flex items-baseline justify-between gap-4">
          <FieldLabel>Line height</FieldLabel>
          <SliderValue />
        </div>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </Slider>
    </Field>
  )
}
