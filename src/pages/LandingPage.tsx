import { useNavigate } from "react-router-dom";
import StartButton from "../components/StartButton";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { FaWonSign } from "react-icons/fa6";

function LandingPage() {
  const navigate = useNavigate();
  const [animationState, setAnimationState] = useState<boolean[]>([false, false, false, false, false, false, false])

  useEffect(() => {

    const wonBoxTimer = setTimeout(() => {
      setAnimationState((prev)=>{
        const newState = [...prev];
        newState[0] = !newState[0];

        return newState;
      })
    }, 1000)
    
    const monyBoxTimer = setTimeout(() => {
      setAnimationState((prev)=>{
        const newState = [...prev];
        newState[1] = !newState[1];
        
        return newState;
      })
    }, 2000)

    const doallerBoxTimer = setTimeout(() => {
      setAnimationState((prev)=>{
        const newState = [...prev];
        newState[2] = !newState[2];
        
        return newState;
      })
    }, 3000)

    const arrowBoxTimer = setTimeout(() => {
      setAnimationState((prev)=>{
        const newState = [...prev];
        newState[3] = !newState[3];
        
        return newState;
      })
    }, 4000)

    const salaryBoxTimer = setTimeout(() => {
      setAnimationState((prev)=>{
        const newState = [...prev];
        newState[4] = !newState[4];
        
        return newState;
      })
    }, 5000)

    const krwBoxTimer = setTimeout(() => {
      setAnimationState((prev)=>{
        const newState = [...prev];
        newState[5] = !newState[5];
        
        return newState;
      })
    }, 6000)

    const outTimer = setTimeout(() => {
      setAnimationState([false, false, false, false, false, false, false])
    }, 7000)

    const startButtonTimer = setTimeout(() => {
      setAnimationState((prev)=>{
        const newState = [...prev];
        newState[6] = !newState[6];
        
        return newState;
      })
    }, 8000)

    return(() => {

        clearTimeout(wonBoxTimer);
        clearTimeout(monyBoxTimer);
        clearTimeout(doallerBoxTimer);
        clearTimeout(arrowBoxTimer);
        clearTimeout(salaryBoxTimer);
        clearTimeout(krwBoxTimer);
        clearTimeout(outTimer);
        clearTimeout(startButtonTimer);

      }
    )

  }, [])

  return (
    <LandingPageWrap>
      <h1>wageclock</h1>
      <StartButtonWrap $state = {animationState[6]}>
        <StartButton onClick={() => navigate("/step1")}>
          시작하기
        </StartButton>
      </StartButtonWrap>
      <WonBox $state = {animationState[0]}>
        <FaWonSign size={70}/>
      </WonBox>
      <MoneyBox $state = {animationState[1]}>money</MoneyBox>
      <DollarBox $state = {animationState[2]}>
        <TbCurrencyDollar color="#ffffff"/>
      </DollarBox>
      <ArrowBox $state = {animationState[3]}>
        <MdKeyboardDoubleArrowRight color="#ffffff"/>
        </ArrowBox>
      <SalaryBox $state = {animationState[4]}>salary</SalaryBox>
      <KRWBoxWrap $state = {animationState[5]}>
        <KRWBox>
          <Money>+10,000</Money>
          <KRW>
            <div>KRW</div>
            <MdKeyboardDoubleArrowRight/>
          </KRW>
        </KRWBox>
      </KRWBoxWrap>
    </LandingPageWrap>
  )
}

export default LandingPage;

const LandingPageWrap = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #062D0A;
  font-size: 50px;
  font-family: 'Press Start 2P';
  color: #B0FE5B;
  > h1 {
    margin-top: 9%;
    font-size: 85px;
  }
`;

const StartButtonWrap = styled.div<{$state:boolean}>`
  margin-top: 5%;
  opacity: ${props=>(props.$state? `1` : `0`)};
  transition-duration: 400ms;
  pointer-events: ${props=>(props.$state? `null` : `none`)};
`

const WonBox = styled.div<{$state:boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 23%;

  width: 115px;
  height: 115px;

  background-color: #B0D097;
  opacity: ${props=>(props.$state? `1` : `0`)};
  transition-duration: 400ms;
  border-radius: 30px;

  font-size: 80px;
  color: #000000;
`;

const MoneyBox = styled(WonBox)<{$state:boolean}>`
  width: 145px;
  height: 135px;
  top: 22%;
  left: -2.5%;
  font-size: 20px;
  background-color: #A8E665;
`;

const DollarBox = styled(WonBox)<{$state:boolean}>`
  width: 90px;
  height: 90px;
  top: 20%;
  left: 63%;
  font-size: 55px;
  background-color: #5E953F;
  color: #ffffff;
`;

const ArrowBox = styled(WonBox)<{$state:boolean}>`
  width: 100px;
  height: 100px;
  top: 70%;
  left: 68%;
  font-size: 60px;
`;

const SalaryBox = styled(WonBox)<{$state:boolean}>`
  width: 145px;
  height: 135px;
  top: 320px;
  left: 90%;

  background-color: #031E05;

  font-size: 20px;
  color: #ffffff;
`;

const KRWBoxWrap = styled(WonBox)<{$state:boolean}>`
  width: 155px;
  height: 155px;
  top: 65%;
  left: 18%;
  
  background-color: #1F4223;
`;

const KRWBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80%;
`

const Money = styled.div`
  width: 90%;
  font-size: 26px;
  color: #ffffff;
  font-family: 'Public Sans';
`;

const KRW = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  font-size: 21px;
  color: #ffffff;
  font-family: 'Public Sans';
`;