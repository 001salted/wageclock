import { useState } from "react";
import { useLocation } from "react-router-dom";
import EarningsCardMonth from "../components/EarningsCardMonth";
import EarningsCardToday from "../components/EarningsCardToday";
import GaugeComponent from "../components/GaugeComponent";
import Header from "../components/Header";
import WonSigns from "../components/WonSigns";

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

  const [viewType, setViewType] = useState<"daily" | "monthly">("daily");

  return (
    <main>
      <Header viewType={viewType} onChange={setViewType} />

      {viewType === "daily" && (
        <>
          <GaugeComponent state={todayProgress} type="일급" />
          <EarningsCardToday
            wonAmount={todayEarnings.toLocaleString()}
            itemAmount="3"
            itemName="뿌링클"
          />
        </>
      )}

      {viewType === "monthly" && (
        <>
          <GaugeComponent state={monthlyProgress} type="월급" />
          <EarningsCardMonth wageAmount={monthlyEarnings.toLocaleString()} />
        </>
      )}

      <WonSigns />
    </main>
  );
}

export default GaugePage;
