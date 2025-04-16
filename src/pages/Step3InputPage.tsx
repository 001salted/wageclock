import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";
import PaydaySelector from "../components/PaydaySelector";

function Step3InputPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>시작하기</h1>
      <h2>급여일을 선택해주세요.</h2>
      <PaydaySelector />
      <NextButton label="계산하기" onClick={() => navigate("/load")} />
    </main>

  )
}

export default Step3InputPage;