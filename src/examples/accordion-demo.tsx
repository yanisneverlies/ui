import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["theme"]} className="w-full max-w-[480px]">
      <AccordionItem value="theme">
        <AccordionTrigger>What is Letter 1 about?</AccordionTrigger>
        <AccordionPanel>
          Time. Seneca tells Lucilius to claim every hour for himself, because most of it is lost to carelessness or
          taken by others.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="advice">
        <AccordionTrigger>What does Seneca ask Lucilius to do?</AccordionTrigger>
        <AccordionPanel>
          Gather and save his time, and take today&apos;s task in hand instead of leaning on tomorrow&apos;s.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="disabled" disabled>
        <AccordionTrigger>Parallel Latin text</AccordionTrigger>
        <AccordionPanel>Not available for this letter yet.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
