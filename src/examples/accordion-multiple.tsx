import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/components/ui/accordion"

export default function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["reading", "translation"]} className="w-full max-w-[480px]">
      <AccordionItem value="reading">
        <AccordionTrigger>Reading</AccordionTrigger>
        <AccordionPanel>Show footnotes, turn on focus mode and set the text size.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="translation">
        <AccordionTrigger>Translation</AccordionTrigger>
        <AccordionPanel>Choose the language each letter opens in.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="email">
        <AccordionTrigger>Newsletter</AccordionTrigger>
        <AccordionPanel>Set the address that gets the weekly letter.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
