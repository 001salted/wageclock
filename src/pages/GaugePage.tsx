import Header from "../components/Header";
import { useState } from "react";
import WonSigns from "../components/WonSigns";

function GaugePage() {
  const [wageType, setWageType] = useState<'hourly' | 'monthly'>('hourly');

  return (
    <main>
      <h1>Gauge</h1>
      <Header wageType={wageType} onChange={setWageType}/>
      {/* {wageType === "시급" ? <DailyContent /> : <MonthlyContent />} */}
      <WonSigns />

    </main>

  )
}

export default GaugePage;