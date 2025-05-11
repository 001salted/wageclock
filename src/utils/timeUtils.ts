import { TimeValue } from '../contexts/WageContext';

// 출근시간, 퇴근시간을 분 단위로 바꿔주는 공통 함수
export function parseTimeToMinutes(time: TimeValue): number {
  let hour = parseInt(time.hour, 10);
  const minute = parseInt(time.minute, 10);

  if (time.period === '오후' && hour !== 12) hour += 12;
  if (time.period === '오전' && hour === 12) hour = 0;

  return hour * 60 + minute;
}

// 하루 근무시간 (분)
export function calculateWorkMinutesPerDay(startTime: TimeValue, endTime: TimeValue): number {
  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = parseTimeToMinutes(endTime);

  return endMinutes - startMinutes;
}

// 오늘 현재시각까지 경과한 근무시간 (분)
export function calculatePassedWorkMinutesToday(startTime: TimeValue, endTime: TimeValue): number {
  const now = new Date();

  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = parseTimeToMinutes(endTime);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const totalWorkMinutes = endMinutes - startMinutes;
  const passedMinutes = nowMinutes - startMinutes;

  if (passedMinutes < 0) return 0;
  if (passedMinutes >= totalWorkMinutes) return totalWorkMinutes;

  return passedMinutes;
}

// 한달 총 근무시간 (분)
export function calculateTotalWorkMinutesPerMonth(
  startTime: TimeValue,
  endTime: TimeValue,
  selectedDays: Date[],
): number {
  const workMinutesPerDay = parseTimeToMinutes(endTime) - parseTimeToMinutes(startTime);
  const totalWorkMinutes = workMinutesPerDay * selectedDays.length;
  return totalWorkMinutes;
}

// 이번 달의 현재시각까지 경과한 근무시간 (분)
export function calculatePassedWorkMinutesThisMonth(
  startTime: TimeValue,
  endTime: TimeValue,
  selectedDays: Date[],
): number {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const workMinutesPerDay = calculateWorkMinutesPerDay(startTime, endTime);

  let totalPassedMinutes = 0;

  selectedDays.forEach(day => {
    const workDay = new Date(day.getFullYear(), day.getMonth(), day.getDate());

    if (workDay < today) {
      totalPassedMinutes += workMinutesPerDay;
    } else if (workDay.getTime() === today.getTime()) {
      const totalWorkMinutesToday = calculateWorkMinutesPerDay(startTime, endTime);
      const passedToday = calculatePassedWorkMinutesToday(startTime, endTime);

      if (passedToday <= 0) {
        // 출근 전
        totalPassedMinutes += 0;
      } else if (passedToday >= totalWorkMinutesToday) {
        // 퇴근 후
        totalPassedMinutes += totalWorkMinutesToday;
      } else {
        // 근무 중
        totalPassedMinutes += passedToday;
      }
    }
    // workDay > today면 아직 근무하지 않은 날짜이므로 아무것도 더하지 않음
  });
  return totalPassedMinutes;
}

export function isTodayAWorkDay(selectedDays: Date[]): boolean {
  const todayStr = new Date().toDateString();
  return selectedDays.some(day => new Date(day).toDateString() === todayStr);
}
