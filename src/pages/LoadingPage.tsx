import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWage } from "../contexts/WageContext";
import { calculateEarningsSoFar } from "../utils/calculateEarningsSoFar";
import { calculatePerMinuteWage } from "../utils/calculatePerMinuteWage";

function LoadingPage() {
  const { wageData } = useWage();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 1초 로딩 연출

      const perMinuteWage = calculatePerMinuteWage(wageData).perMinuteWage;

      const result = {
        perMinuteWage: perMinuteWage,
        earningsSoFar: calculateEarningsSoFar(
          wageData.startTime,
          perMinuteWage
        ),
      };
      // 결과 페이지로 이동하면서 계산 결과 전달
      navigate("/gauge", { state: result });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate, wageData]);

  return (
    <main>
      <h1>계 산 중 . . .</h1>
    </main>
  );
}

export default LoadingPage;
