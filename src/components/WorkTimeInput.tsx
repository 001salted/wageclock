import styled from 'styled-components';
import { TimeValue } from './TimePickerModal';

interface WorkTimeInputProps {
  label: string;
  value: TimeValue;
  onClick: () => void;
}

const WorkTimeInput = ({ label, value, onClick }: WorkTimeInputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TimeButton onClick={onClick}>{`${value.period} ${value.hour} : ${value.minute}`}</TimeButton>
    </Container>
  );
};

export default WorkTimeInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  gap: 30px;
  height: 90px;
`;

const Label = styled.label`
  font-family: 'DungGeunMo';
  font-size: 32px;
  white-space: nowrap;
  color: #1f4223;
`;

const TimeButton = styled.button`
  font-family: 'Pretendard';
  font-size: 32px;
  border-radius: 30px;
  background-color: white;
  border: none;
  cursor: pointer;
  width: 220px;
  height: 100%;
`;
