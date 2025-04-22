import Header from "../components/Header";
import { useState } from "react";
import GaugeComponent from "../components/GaugeComponent";
import WonSigns from "../components/WonSigns";
import EarningsCardToday from "../components/EarningsCardToday";
import EarningsCardMonth from "../components/EarningsCardMonth";

function GaugePage() {
  const [viewType, setViewType] = useState<"daily" | "monthly">("daily");

  return (
    <main>
      <Header viewType={viewType} onChange={setViewType} />

      {viewType === "daily" && (
        <>
          <GaugeComponent state={77} type="일급" />
          <EarningsCardToday
            wonAmount="43,377"
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
