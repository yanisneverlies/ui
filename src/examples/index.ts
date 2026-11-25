import type { ComponentType } from "react"

import AccordionDemoExample from "./accordion-demo"
import AccordionMultipleExample from "./accordion-multiple"
import BadgeShapesExample from "./badge-shapes"
import BadgeTonesExample from "./badge-tones"
import ButtonAsChildExample from "./button-as-child"
import ButtonDemoExample from "./button-demo"
import ButtonSizesExample from "./button-sizes"
import ButtonSoundExample from "./button-sound"
import ButtonVariantsExample from "./button-variants"
import CardShellExample from "./card-shell"
import CardSurfaceExample from "./card-surface"
import CheckboxDemoExample from "./checkbox-demo"
import CheckboxFieldExample from "./checkbox-field"
import CheckboxGroupExample from "./checkbox-group"
import DialogControlledExample from "./dialog-controlled"
import DialogDemoExample from "./dialog-demo"
import DialogFormExample from "./dialog-form"
import FieldDemoExample from "./field-demo"
import FieldErrorExample from "./field-error"
import FieldInvalidExample from "./field-invalid"
import FieldSetExample from "./field-set"
import InputDemoExample from "./input-demo"
import InputSearchExample from "./input-search"
import InputStatesExample from "./input-states"
import KbdDemoExample from "./kbd-demo"
import MenuDemoExample from "./menu-demo"
import MenuGroupsExample from "./menu-groups"
import MenuPendingExample from "./menu-pending"
import PopoverDemoExample from "./popover-demo"
import PopoverFormExample from "./popover-form"
import PopoverPlacementExample from "./popover-placement"
import SegmentedControlDemoExample from "./segmented-control-demo"
import SegmentedControlFieldExample from "./segmented-control-field"
import SelectControlledExample from "./select-controlled"
import SelectDemoExample from "./select-demo"
import SelectGroupsExample from "./select-groups"
import SoundToggleExample from "./sound-toggle"
import SwitchDemoExample from "./switch-demo"
import TabsDemoExample from "./tabs-demo"
import TabsIconsExample from "./tabs-icons"
import TabsVerticalExample from "./tabs-vertical"
import TextareaCountExample from "./textarea-count"
import TextareaDemoExample from "./textarea-demo"
import TextareaInvalidExample from "./textarea-invalid"
import ToastActionExample from "./toast-action"
import ToastDemoExample from "./toast-demo"
import ToastTypesExample from "./toast-types"
import TooltipDemoExample from "./tooltip-demo"
import TooltipShortcutExample from "./tooltip-shortcut"
import TooltipSideExample from "./tooltip-side"

export const examples = {
  "accordion-demo": AccordionDemoExample,
  "accordion-multiple": AccordionMultipleExample,
  "badge-shapes": BadgeShapesExample,
  "badge-tones": BadgeTonesExample,
  "button-as-child": ButtonAsChildExample,
  "button-demo": ButtonDemoExample,
  "button-sizes": ButtonSizesExample,
  "button-sound": ButtonSoundExample,
  "button-variants": ButtonVariantsExample,
  "card-shell": CardShellExample,
  "card-surface": CardSurfaceExample,
  "checkbox-demo": CheckboxDemoExample,
  "checkbox-field": CheckboxFieldExample,
  "checkbox-group": CheckboxGroupExample,
  "dialog-controlled": DialogControlledExample,
  "dialog-demo": DialogDemoExample,
  "dialog-form": DialogFormExample,
  "field-demo": FieldDemoExample,
  "field-error": FieldErrorExample,
  "field-invalid": FieldInvalidExample,
  "field-set": FieldSetExample,
  "input-demo": InputDemoExample,
  "input-search": InputSearchExample,
  "input-states": InputStatesExample,
  "kbd-demo": KbdDemoExample,
  "menu-demo": MenuDemoExample,
  "menu-groups": MenuGroupsExample,
  "menu-pending": MenuPendingExample,
  "popover-demo": PopoverDemoExample,
  "popover-form": PopoverFormExample,
  "popover-placement": PopoverPlacementExample,
  "segmented-control-demo": SegmentedControlDemoExample,
  "segmented-control-field": SegmentedControlFieldExample,
  "select-controlled": SelectControlledExample,
  "select-demo": SelectDemoExample,
  "select-groups": SelectGroupsExample,
  "sound-toggle": SoundToggleExample,
  "switch-demo": SwitchDemoExample,
  "tabs-demo": TabsDemoExample,
  "tabs-icons": TabsIconsExample,
  "tabs-vertical": TabsVerticalExample,
  "textarea-count": TextareaCountExample,
  "textarea-demo": TextareaDemoExample,
  "textarea-invalid": TextareaInvalidExample,
  "toast-action": ToastActionExample,
  "toast-demo": ToastDemoExample,
  "toast-types": ToastTypesExample,
  "tooltip-demo": TooltipDemoExample,
  "tooltip-shortcut": TooltipShortcutExample,
  "tooltip-side": TooltipSideExample,
} satisfies Record<string, ComponentType>

export type ExampleName = keyof typeof examples
