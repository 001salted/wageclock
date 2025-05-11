import { createContext, ReactNode, useContext, useState } from 'react';

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
}

const WageContext = createContext<WageContextType | undefined>(undefined);

export function WageProvider({ children }: { children: ReactNode }) {
  const [wageData, setWageData] = useState<WageData>({
    wageType: 'monthly',
    wageAmount: '',
    startTime: { hour: '09', minute: '00', period: '오전' },
    endTime: { hour: '06', minute: '00', period: '오후' },
    selectedDays: [],
    payday: null,
  });

  console.log(wageData);

  return <WageContext.Provider value={{ wageData, setWageData }}>{children}</WageContext.Provider>;
}

export function useWage() {
  const context = useContext(WageContext);
  if (!context) {
    throw new Error('useWage는 WageProvider 안에서 사용해야 합니다!');
  }
  return context;
}
