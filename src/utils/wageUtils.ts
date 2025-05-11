export function calculatePerMinuteWage(
  wageType: 'hourly' | 'monthly',
  wageAmount: number,
  totalMonthlyWorkMinutes: number,
): number {
  if (wageType === 'hourly') {
    return wageAmount / 60;
  } else {
    if (totalMonthlyWorkMinutes === 0) return 0;
    return wageAmount / totalMonthlyWorkMinutes;
  }
}

export function calculateTodayEarnings(passedMinutesToday: number, perMinuteWage: number): number {
  return Math.round(passedMinutesToday * perMinuteWage);
}

export function calculateMonthlyEarnings(
  passedMinutesThisMonth: number,
  perMinuteWage: number,
): number {
  return Math.round(passedMinutesThisMonth * perMinuteWage);
}
