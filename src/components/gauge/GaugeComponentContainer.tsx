import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GaugeComponent from './GaugeComponent';

interface GaugeComponentContainerProps {
  state: number;
  type: string;
  leastTime: number;
  payday: number | null;
}

function GaugeComponentContainer({ state, type, leastTime }: GaugeComponentContainerProps) {
  const isDaily = type === '일급';
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (isDaily) {
      if (leastTime >= 60) {
        setHour(Math.round(leastTime / 60));
        setMinutes(leastTime % 60);
      }
    }
  }, [leastTime]);

  return (
    <GaugeComponentContainerWrap $type={type}>
      <GaugeComponent state={state} type={type} />
      {isDaily ? (
        <OutDoorTime $type={type}>
          {leastTime >= 60 ? (
            <Time $type={type}>{`${hour}시간 ${minutes}분 후`}</Time>
          ) : (
            <Time $type={type}>{`${leastTime}분 후`}</Time>
          )}
          {'퇴근!'}
        </OutDoorTime>
      ) : (
        <OutDoorTime $type={type}>
          <Time $type={type}>{`${leastTime}일 후는`}</Time>
          {'월급날!'}
        </OutDoorTime>
      )}
    </GaugeComponentContainerWrap>
  );
}

export default GaugeComponentContainer;

const GaugeComponentContainerWrap = styled.div<{ $type: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 17px auto 0;
  padding: 24px;
  width: 84%;
  min-width: 800px;
  height: 165px;
  background-color: #${props => (props.$type === '일급' ? `1F4223` : `1F42230`)};
  border-radius: 10px;
`;

const OutDoorTime = styled.div<{ $type: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 250px;
  height: 85%;
  padding-right: 20px;
  font-size: 48px;
  font-family: 'DungGeunMo';
  color: #${props => (props.$type === '일급' ? `B0FE5B` : `062D0A`)};
`;

const Time = styled.div<{ $type: string }>`
  font-size: 27px;
  color: #${props => (props.$type === '일급' ? `ffffff` : `1F4223`)};
  margin-bottom: 10%;
`;
