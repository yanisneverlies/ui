import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack } from "@/components/ui/progress"

export default function ProgressIndeterminate() {
  return (
    <Progress value={null} className="max-w-[360px]">
      <ProgressLabel>Translating Letter 47</ProgressLabel>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  )
}
