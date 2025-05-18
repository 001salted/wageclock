import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

interface WorkdayCalendarProps {
  selectedDays: Date[];
  onChange: (dates: Date[]) => void;
}

const WorkdayCalendar = ({ selectedDays, onChange }: WorkdayCalendarProps) => {
  const handleSelect = (dates: Date[] | undefined) => {
    onChange(dates ?? []);
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

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    --rdp-today-color: black;
    --rdp-selected-border: #134318 2px solid;
    --rdp-accent-color: #134318;
  }

  .rdp-selected {
    font-size: 26px;
    font-weight: 400;
    background-color: #134318;
    border-radius: 50%;
    color: #ffffff;
  }
`;
