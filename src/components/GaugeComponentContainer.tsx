import styled from 'styled-components';
import GaugeComponent from './GaugeComponent';

interface GaugeComponentContainerProps {
  state: number;
  type: string;
}

function GaugeComponentContainer({ state, type }: GaugeComponentContainerProps) {
  return (
    <GaugeComponentContainerWrap $type={type}>
      <GaugeComponent state={state} type={type} />
      <OutDoorTime $type={type}>
        <Time $type={type}>{`3시간 58분 후`}</Time>
        {'퇴근!'}
      </OutDoorTime>
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
