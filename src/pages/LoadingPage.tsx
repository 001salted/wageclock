import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWage } from "../contexts/WageContext";
import {
  calculateWorkProgressThisMonth,
  calculateWorkProgressToday,
} from "../utils/progressUtils";
import {
  calculatePassedWorkMinutesThisMonth,
  calculatePassedWorkMinutesToday,
  calculateTotalWorkMinutesPerMonth,
  calculateWorkMinutesPerDay,
  isTodayAWorkDay,
} from "../utils/timeUtils";
import {
  calculateMonthlyEarnings,
  calculatePerMinuteWage,
  calculateTodayEarnings,
} from "../utils/wageUtils";

function LoadingPage() {
  const { wageData } = useWage();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 1초 로딩 연출

      const { wageType, wageAmount, startTime, endTime, selectedDays } =
        wageData;

      // 1. 시간 관련 계산
      const totalWorkMinutesPerDay = calculateWorkMinutesPerDay(
        startTime,
        endTime
      );
      const passedMinutesToday = calculatePassedWorkMinutesToday(
        startTime,
        endTime
      );
      const totalWorkMinutesPerMonth = calculateTotalWorkMinutesPerMonth(
        startTime,
        endTime,
        selectedDays
      );
      const passedMinutesThisMonth = calculatePassedWorkMinutesThisMonth(
        startTime,
        endTime,
        selectedDays
      );

      // 2. 급여 관련 계산
      const perMinuteWage = calculatePerMinuteWage(
        wageType,
        wageAmount as number,
        totalWorkMinutesPerMonth
      );
      const isWorkdayToday = isTodayAWorkDay(selectedDays);
      const todayEarnings = isWorkdayToday
        ? calculateTodayEarnings(passedMinutesToday, perMinuteWage)
        : 0;
      const monthlyEarnings = calculateMonthlyEarnings(
        passedMinutesThisMonth,
        perMinuteWage
      );

      // 3. 퍼센트 관련 계산
      const todayProgress = calculateWorkProgressToday(
        passedMinutesToday,
        totalWorkMinutesPerDay
      );
      const monthlyProgress = calculateWorkProgressThisMonth(
        passedMinutesThisMonth,
        totalWorkMinutesPerMonth
      );

      // 결과 페이지로 이동하면서 계산 결과 전달
      navigate("/gauge", {
        state: {
          todayProgress,
          todayEarnings,
          monthlyProgress,
          monthlyEarnings,
          perMinuteWage,
        },
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate, wageData]);

  return (
    <main>
      <h1>계 산 중 . . .</h1>
    </main>
  );
}

export default LoadingPage;
