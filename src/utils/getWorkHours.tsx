function getWorkHours(
  start: { hour: string; minute: string; period: "오전" | "오후" },
  end: { hour: string; minute: string; period: "오전" | "오후" }
) {
  let startHour = parseInt(start.hour, 10);
  let endHour = parseInt(end.hour, 10);

  if (start.period === "오후" && startHour !== 12) startHour += 12;
  if (end.period === "오후" && endHour !== 12) endHour += 12;
  if (start.period === "오전" && startHour === 12) startHour = 0;
  if (end.period === "오전" && endHour === 12) endHour = 0;

  const startMinutes = startHour * 60 + parseInt(start.minute, 10);
  const endMinutes = endHour * 60 + parseInt(end.minute, 10);

  const diffMinutes = endMinutes - startMinutes;
  const workHours = diffMinutes / 60;

  return workHours;
}

export default getWorkHours;
