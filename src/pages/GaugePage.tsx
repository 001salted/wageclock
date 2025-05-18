import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EarningsCardMonth from '../components/EarningsCardMonth';
import EarningsCardToday from '../components/EarningsCardToday';
import GaugeComponentContainer from '../components/GaugeComponentContainer';
import Header from '../components/Header';
import WonSigns from '../components/WonSigns';
import { convertToUnits } from '../utils/moneyUtils';

import styled from 'styled-components';

interface GaugePageState {
  todayProgress: number;
  todayEarnings: number;
  monthlyProgress: number;
  monthlyEarnings: number;
  perMinuteWage: number;
}

const ITEM_ORDER = ['담배', '아이스아메리카노', '뿌링클'] as const;

const itemNameMap: Record<(typeof ITEM_ORDER)[number], string> = {
  담배: '담배',
  아이스아메리카노: '아이스아메리카노',
  뿌링클: '뿌링클',
};

function GaugePage() {
  const { state } = useLocation();

  const { todayProgress, todayEarnings, monthlyProgress, monthlyEarnings } =
    state as GaugePageState;

  const [viewType, setViewType] = useState<'daily' | 'monthly'>('daily');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemAmount, setItemAmount] = useState('');
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    const units = convertToUnits(todayEarnings);
    const updateItem = () => {
      const currentItem = ITEM_ORDER[currentIndex];
      const amount = units[currentItem];
      setItemAmount(amount.toFixed(1));
      setItemName(itemNameMap[currentItem]);
    };

    updateItem(); // 초기 호출

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % ITEM_ORDER.length;
        const nextItem = ITEM_ORDER[nextIndex];
        const units = convertToUnits(todayEarnings);
        setItemAmount(units[nextItem].toFixed(1));
        setItemName(itemNameMap[nextItem]);
        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [todayEarnings]);

  return (
    <GaugeMain>
      <Header viewType={viewType} onChange={setViewType} />

      {viewType === 'daily' && (
        <>
          <GaugeComponentContainer state={todayProgress} type="일급" />
          <EarningsCardToday
            wonAmount={todayEarnings.toLocaleString()}
            itemAmount={itemAmount}
            itemName={itemName}
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
  align-items: center;
  height: 100vh;
`;
