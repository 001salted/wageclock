import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EarningsCardMonth from '../components/gauge/EarningsCardMonth';
import EarningsCardToday from '../components/gauge/EarningsCardToday';
import GaugeComponentContainer from '../components/gauge/GaugeComponentContainer';
import Header from '../components/gauge/Header';
import WonSigns from '../components/gauge/WonSigns';
import { convertToUnits } from '../utils/moneyUtils';

import styled from 'styled-components';
import { useWage } from '../contexts/WageContext';
import { calculateWorkProgressThisMonth, calculateWorkProgressToday } from '../utils/progressUtils';
import {
  calculatePassedWorkMinutesThisMonth,
  calculatePassedWorkMinutesToday,
  calculateTotalWorkMinutesPerMonth,
  calculateWorkMinutesPerDay,
  isTodayAWorkDay,
} from '../utils/timeUtils';
import {
  calculateMonthlyEarnings,
  calculatePerMinuteWage,
  calculateTodayEarnings,
} from '../utils/wageUtils';

const ITEM_ORDER = ['담배', '아이스아메리카노', '뿌링클'] as const;

const itemNameMap: Record<(typeof ITEM_ORDER)[number], string> = {
  담배: '담배',
  아이스아메리카노: '아이스아메리카노',
  뿌링클: '뿌링클',
};

function GaugePage() {
  const { wageData } = useWage();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { resetWageData } = useWage();

  const [todayProgress, setTodayProgress] = useState(state.todayProgress);
  const [todayEarnings, setTodayEarnings] = useState(state.todayEarnings);
  const [monthlyProgress, setMonthlyProgress] = useState(state.monthlyProgress);
  const [monthlyEarnings, setMonthlyEarnings] = useState(state.monthlyEarnings);
  const [leastTime, setLeastTime] = useState(0);

  const [viewType, setViewType] = useState<'daily' | 'monthly'>('daily');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemAmount, setItemAmount] = useState('');
  const [itemName, setItemName] = useState('');
  //data 불러오기
  const { wageType, wageAmount, startTime, endTime, selectedDays, payday } = wageData;
  const [leaveDay, setLeaveDay] = useState(0);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const lastDay = new Date(year, month + 1, 0);

  useEffect(() => {
    const units = convertToUnits(todayEarnings);
    if (payday) {
      setLeaveDay(lastDay.getDate() - day + payday);
    }
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
    }, 2000);

    const update = setInterval(() => {
      const isWorkdayToday = isTodayAWorkDay(selectedDays);
      //하루에 일하는 시간 (분)
      const totalWorkMinutesPerDay = calculateWorkMinutesPerDay(startTime, endTime);
      //일한 시간(분)
      const passedMinutesToday = calculatePassedWorkMinutesToday(startTime, endTime);
      //오늘 일한 % 계산
      setTodayProgress(() =>
        calculateWorkProgressToday(passedMinutesToday, totalWorkMinutesPerDay),
      );
      //이번 달에 일한 시간(분)
      const passedMinutesThisMonth = calculatePassedWorkMinutesThisMonth(
        startTime,
        endTime,
        selectedDays,
      );
      //이번 달에 일 해야하는 시간(분)
      const totalWorkMinutesPerMonth = calculateTotalWorkMinutesPerMonth(
        startTime,
        endTime,
        selectedDays,
      );
      //이번 달 일한 % 계산
      setMonthlyProgress(() =>
        calculateWorkProgressThisMonth(passedMinutesThisMonth, totalWorkMinutesPerMonth),
      );

      const perMinuteWage = calculatePerMinuteWage(
        wageType,
        wageAmount as number,
        totalWorkMinutesPerMonth,
      );

      if (isWorkdayToday) {
        setTodayEarnings(() => calculateTodayEarnings(passedMinutesToday, perMinuteWage));
      } else {
        setTodayEarnings(0);
      }

      setMonthlyEarnings(() => calculateMonthlyEarnings(passedMinutesThisMonth, perMinuteWage));

      setLeastTime(totalWorkMinutesPerDay - passedMinutesToday);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(update);
    };
  }, [todayEarnings, leaveDay]);

  const handleReset = () => {
    resetWageData();
    navigate('/step1');
  };

  return (
    <GaugeMain>
      <Header viewType={viewType} onChange={setViewType} />

      {viewType === 'daily' && (
        <>
          <GaugeComponentContainer
            state={todayProgress}
            payday={payday}
            leastTime={leastTime}
            type="일급"
          />
          <EarningsCardToday
            wonAmount={todayEarnings.toLocaleString()}
            itemAmount={itemAmount}
            itemName={itemName}
          />
        </>
      )}

      {viewType === 'monthly' && (
        <>
          <GaugeComponentContainer
            state={monthlyProgress}
            payday={payday}
            leastTime={leaveDay}
            type="월급"
          />
          <EarningsCardMonth wageAmount={monthlyEarnings.toLocaleString()} />
        </>
      )}

      <WonSigns />
      <ResetButton onClick={handleReset}>입력값 초기화하기</ResetButton>
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

const ResetButton = styled.button`
  font-family: DungGeunMo;
  border: none;
  background: none;
  font-size: 30px;
  margin-top: 10px;
  cursor: pointer;
`;
