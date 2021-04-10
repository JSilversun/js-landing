import { dayjs } from "@/utils/dayjs";

export function humanizeDuration(durationMilliseconds: number): string {
  const duration = dayjs.duration(durationMilliseconds);
  const units = ["y", "m", "d"];
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const formattedDuration = [years, months];
  if (years === 0 && months === 0) formattedDuration.push(days);
  return formattedDuration.reduce((result, currentDuration, index) => {
    if (currentDuration === 0) return result;
    const joinCharacter = result === "" ? "" : " ";
    result += joinCharacter + currentDuration + units[index];
    return result;
  }, "");
}
