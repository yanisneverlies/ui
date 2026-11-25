import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue } from "@/components/ui/progress"

export default function ProgressDemo() {
  return (
    <Progress value={62} className="max-w-[360px]">
      <ProgressLabel>Reading progress, Letter 1</ProgressLabel>
      <ProgressValue />
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  )
}
