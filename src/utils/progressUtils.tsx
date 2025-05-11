export function calculateWorkProgressToday(
  passedMinutesToday: number,
  totalWorkMinutesPerDay: number
): number {
  if (totalWorkMinutesPerDay === 0) return 0;
  const progress = (passedMinutesToday / totalWorkMinutesPerDay) * 100;

  if (progress < 0) return 0;
  if (progress > 100) return 100;

  return Math.round(progress);
}

export function calculateWorkProgressThisMonth(
  passedMinutesThisMonth: number,
  totalWorkMinutesPerMonth: number
): number {
  if (totalWorkMinutesPerMonth === 0) return 0;
  const progress = (passedMinutesThisMonth / totalWorkMinutesPerMonth) * 100;

  if (progress < 0) return 0;
  if (progress > 100) return 100;

  return Math.round(progress);
}
