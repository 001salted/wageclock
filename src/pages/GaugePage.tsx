import Header from "../components/Header";
import { useState } from "react";
import WonSigns from "../components/WonSigns";
import EarningsCardToday from "../components/EarningsCardToday";
import EarningsCardMonth from "../components/EarningsCardMonth";

function GaugePage() {
  const [wageType, setWageType] = useState<'hourly' | 'monthly'>('hourly');

  return (
    <main>
      <Header wageType={wageType} onChange={setWageType}/>

      {wageType === 'hourly' && (
        <EarningsCardToday 
          wonAmount="43,377"
          itemAmount="3"
          itemName="뿌링클"
        />
      )}
      
      {wageType === 'monthly' && (
        <EarningsCardMonth
          wageAmount="702,032"
        />
      )}
      
      <WonSigns />

    </main>

  )
}

export default GaugePage;