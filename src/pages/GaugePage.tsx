import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EarningsCardMonth from '../components/EarningsCardMonth';
import EarningsCardToday from '../components/EarningsCardToday';
import GaugeComponentContainer from '../components/GaugeComponentContainer';
import Header from '../components/Header';
import WonSigns from '../components/WonSigns';

interface GaugePageState {
  todayProgress: number;
  todayEarnings: number;
  monthlyProgress: number;
  monthlyEarnings: number;
  perMinuteWage: number;
}

function GaugePage() {
  const { state } = useLocation();

  const { todayProgress, todayEarnings, monthlyProgress, monthlyEarnings } =
    state as GaugePageState;

  const [viewType, setViewType] = useState<'daily' | 'monthly'>('daily');

  return (
    <GaugeMain>
      <Header viewType={viewType} onChange={setViewType} />

      {viewType === 'daily' && (
        <>
          <GaugeComponentContainer state={todayProgress} type="일급" />
          <EarningsCardToday
            wonAmount={todayEarnings.toLocaleString()}
            itemAmount="3"
            itemName="뿌링클"
          />
        </>
      )}

      {viewType === 'monthly' && (
        <>
          <GaugeComponentContainer state={monthlyProgress} type="월급" />
          <EarningsCardMonth wageAmount={monthlyEarnings.toLocaleString()} />
        </>
      )}

      <WonSigns />
    </GaugeMain>
  );
}

export default GaugePage;

const GaugeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
