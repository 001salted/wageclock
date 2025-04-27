import { useState } from "react";
import { useLocation } from "react-router-dom";
import EarningsCardMonth from "../components/EarningsCardMonth";
import EarningsCardToday from "../components/EarningsCardToday";
import GaugeComponent from "../components/GaugeComponent";
import Header from "../components/Header";
import WonSigns from "../components/WonSigns";

interface GaugeState {
  perMinuteWage: number;
  earningsSoFar: number;
}

function GaugePage() {
  const { state } = useLocation();
  const { earningsSoFar } = state as GaugeState;
  const [viewType, setViewType] = useState<"daily" | "monthly">("daily");

  return (
    <main>
      <Header viewType={viewType} onChange={setViewType} />

      {viewType === "daily" && (
        <>
          <GaugeComponent state={77} type="일급" />
          <EarningsCardToday
            wonAmount={earningsSoFar}
            itemAmount="3"
            itemName="뿌링클"
          />
        </>
      )}

      {viewType === "monthly" && (
        <>
          <GaugeComponent state={77} type="월급" />
          <EarningsCardMonth wageAmount="702,032" />
        </>
      )}

      <WonSigns />
    </main>
  );
}

export default GaugePage;
