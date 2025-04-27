import { WageData } from "../contexts/WageContext";
import calculateWage from "./calculateWage";
import getWorkHours from "./getWorkHours";

export function calculatePerMinuteWage(data: WageData) {
  const { startTime, endTime, selectedDays } = data;

  const workHours = getWorkHours(startTime, endTime);
  const totalMonthlyHours = workHours * selectedDays.length;

  const monthlyWage = calculateWage(data).monthlyWage;

  const perMinuteWage = monthlyWage / (totalMonthlyHours * 60);

  console.log(workHours);
  return {
    monthlywage: monthlyWage,
    perMinuteWage: Math.round(perMinuteWage),
  };
}
