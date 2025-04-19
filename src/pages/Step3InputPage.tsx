import { useNavigate } from "react-router-dom";
import InputPageLayout from "../components/InputPageLayout";
import PaydaySelector from "../components/PaydaySelector";

function Step3InputPage() {
  const navigate = useNavigate();

  return (
    <>
      <InputPageLayout
        step={3}
        nextLabel="계산하기"
        onNext={() => navigate("/load")}
        sections={[
          {
            title: "급여일을 선택해주세요.",
            content: <PaydaySelector />
          }
        ]}
      />
    </>
  )
}

export default Step3InputPage;