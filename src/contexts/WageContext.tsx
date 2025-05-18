import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface TimeValue {
  hour: string;
  minute: string;
  period: '오전' | '오후';
}

export interface WageData {
  wageType: 'hourly' | 'monthly';
  wageAmount: number | '';
  startTime: TimeValue;
  endTime: TimeValue;
  selectedDays: Date[];
  payday: number | null;
}

interface WageContextType {
  wageData: WageData;
  setWageData: React.Dispatch<React.SetStateAction<WageData>>;
  resetWageData: () => void;
}

const STORAGE_KEY = 'wageData';

const WageContext = createContext<WageContextType | undefined>(undefined);

export function WageProvider({ children }: { children: ReactNode }) {
  const defaultWageData: WageData = {
    wageType: 'monthly',
    wageAmount: '',
    startTime: { hour: '09', minute: '00', period: '오전' },
    endTime: { hour: '06', minute: '00', period: '오후' },
    selectedDays: [],
    payday: null,
  };

  const [wageData, setWageData] = useState<WageData>(defaultWageData);

  // 1. 마운트 시 로컬스토리지에서 불러오기
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: WageData = JSON.parse(stored);
        parsed.selectedDays = parsed.selectedDays.map(d => new Date(d));
        setWageData(parsed);
      } catch (err) {
        console.error('로컬스토리지 파싱 오류: ', err);
      }
    }
  }, []);

  // 2. wageData 변경 시 자동 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wageData));
  }, [wageData]);

  // 3. 초기화 함수
  const resetWageData = () => {
    setWageData(defaultWageData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <WageContext.Provider value={{ wageData, setWageData, resetWageData }}>
      {children}
    </WageContext.Provider>
  );
}

export function useWage() {
  const context = useContext(WageContext);
  if (!context) {
    throw new Error('useWage는 WageProvider 안에서 사용해야 합니다!');
  }
  return context;
}
