import { useNavigate } from "react-router-dom";
import InputPageLayout from "../components/InputPageLayout";
import WageInput from "../components/WageInput";
import WageTypeToggle from "../components/WageTypeToggle";
import { useWage } from "../contexts/WageContext";

function Step1InputPage() {
  const { wageData, setWageData } = useWage();
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
                value={wageData.wageType === "hourly" ? "시급" : "월급"}
                onChange={(val) => {
                  const type = val === "시급" ? "hourly" : "monthly";
                  setWageData((prev) => ({ ...prev, wageType: type }));
                }}
              />
            ),
          },
          {
            title: "급여를 입력해주세요.",
            content: (
              <WageInput
                wageType={wageData.wageType}
                value={wageData.wageAmount}
                onChange={(val) =>
                  setWageData((prev) => ({ ...prev, wageAmount: val }))
                }
              />
            ),
          },
        ]}
        onNext={() => navigate("/step2")}
      />
    </main>
  );
}

export default Step1InputPage;
