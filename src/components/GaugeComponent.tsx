import { FaRunning } from 'react-icons/fa';
import styled from 'styled-components';

interface GaugeComponentProps {
  state: number;
  type: string;
}

function GaugeComponent({ state, type }: GaugeComponentProps) {
  return (
    <GaugeComponentWrap>
      <Gauge $state={state} $type={type}>
        {state + '%'}
      </Gauge>
      <FaRunning size={60} color={type === '일급' ? 'B0FE5B' : '1F4223'} />
    </GaugeComponentWrap>
  );
}

export default GaugeComponent;

const GaugeComponentWrap = styled.div`
  display: flex;
  width: 810px;
  height: 60px;
`;

const Gauge = styled.div<{ $state: number; $type: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: ${props => `${(props.$state / 100) * 720}`}px;
  background-color: #${props => (props.$type === '일급' ? 'B0FE5B' : '1F4223')};
  padding-right: 20px;
  font-size: 32px;
  font-family: 'Press Start 2P';
  color: #${props => (props.$type === '일급' ? '062D0A' : 'B0FE5B')};
`;
