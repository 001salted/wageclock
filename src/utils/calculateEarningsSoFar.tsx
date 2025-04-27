import { TimeValue } from "../contexts/WageContext";

export function calculateEarningsSoFar(
  startTime: TimeValue,
  perMinuteWage: number
) {
  const now = new Date();

  let startHour = parseInt(startTime.hour, 10);
  if (startTime.period === "오후" && startHour !== 12) startHour += 12;
  if (startTime.period === "오전" && startHour === 12) startHour = 0;

  const startMinutes = startHour * 60 + parseInt(startTime.minute, 10);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const diffMinutes = nowMinutes - startMinutes;

  if (diffMinutes < 0) return 0;

  console.log(perMinuteWage);
  return Math.round(diffMinutes * perMinuteWage);
}
