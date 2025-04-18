import { useNavigate } from "react-router-dom";
import InputPageLayout from "../components/InputPageLayout";
import WageInput from "../components/WageInput";
import WageTypeToggle from "../components/WageTypeToggle";
import { useState } from "react";



function Step1InputPage() {
  const [wageType, setWageType] = useState<'hourly' | 'monthly'>('monthly');
  const navigate = useNavigate();

  return (
    <main>
      <InputPageLayout 
        step={1}
        sections={[
          {
            title: "급여 기준을 선택해주세요.",
            content: (
              <WageTypeToggle
                value={wageType === 'hourly' ? '시급' : '월급'}
                onChange={(val) => {
                  const type = val === '시급' ? 'hourly' : 'monthly';
                  setWageType(type);
                }}
              />
            )
          },
          {
            title: "급여를 입력해주세요.",
            content: <WageInput wageType={wageType} />
          }
        ]}
        onNext={() => navigate("/step2")}
      />
    </main>

  )
}

export default Step1InputPage;