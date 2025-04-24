import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styled from "styled-components";

const WorkdayCalendar = () => {
  const [selectedDays, setSelectedDays] = useState<Date[]>([]);

  const handleSelect = (dates: Date[] | undefined) => {
    setSelectedDays(dates ?? []);
  };

  return (
    <CalendarWrapper>
      <DayPicker
        mode="multiple"
        selected={selectedDays}
        onSelect={handleSelect}
        footer={<p>총 {selectedDays.length}일 근무 선택됨</p>}
        required={false}
      />
    </CalendarWrapper>
  );
};

export default WorkdayCalendar;

const CalendarWrapper = styled.div``;
