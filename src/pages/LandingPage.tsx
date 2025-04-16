import { useNavigate } from "react-router-dom";
import StartButton from "../components/StartButton";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>wageclock</h1>
      <StartButton onClick={() => navigate("/step1")}>
        시작하기
      </StartButton>
    </main>
  )
}

export default LandingPage;