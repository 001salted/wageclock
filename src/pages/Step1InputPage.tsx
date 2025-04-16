import { useState } from "react";
import WageTypeToggle from "../components/WageTypeToggle";
import WageInput from "../components/WageInput";
import NextButton from "../components/NextButton";
import { useNavigate } from "react-router-dom";

function Step1InputPage() {
  const [wageType, setWageType] = useState<'hourly' | 'monthly'>('monthly');
  const navigate = useNavigate();

  return (
    <main>
      <h1>시작하기</h1>
      
      <h2>급여 기준을 선택해주세요.</h2>
      <WageTypeToggle 
        value={wageType === 'hourly' ? '시급' : '월급'}
        onChange={(val) => {
          const type = val === '시급' ? 'hourly' : 'monthly';
          setWageType(type);
        }} 
      />
      <h2>급여를 입력해주세요.</h2>
      <WageInput wageType={wageType} />
      <NextButton label="NEXT" onClick={() => navigate("/step2")} />
    </main>

  )
}

export default Step1InputPage;