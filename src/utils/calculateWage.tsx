import { WageData } from "../contexts/WageContext";
import getWorkHours from "./getWorkHours";

function calculateWage(data: WageData) {
  const { wageType, wageAmount, startTime, endTime, selectedDays, payday } =
    data;

  const workHours = getWorkHours(startTime, endTime);

  const totalMonthlyHours = workHours * selectedDays.length;

  let monthlyWage = 0;

  if (wageType === "hourly") {
    // 시급일 경우: 시급 * 월 총 근무시간
    monthlyWage = (wageAmount as number) * totalMonthlyHours;
  } else {
    // 월급일 경우: 그냥 월급
    monthlyWage = wageAmount as number;
  }

  return {
    monthlyWage: Math.round(monthlyWage),
    payday,
  };
}

export default calculateWage;
