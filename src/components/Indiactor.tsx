import styled from "styled-components";

interface IndicaterProps {
    step: number;
}

function Indicator ({step}:IndicaterProps) {
    return(
        <>
        <IndicatorWrap>
            <Step1 $step = {step}>1</Step1>
            <Step2 $step = {step}>2</Step2>
            <Step3 $step = {step}>3</Step3>
        </IndicatorWrap>
        </>
    );
};

const IndicatorWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    height: 115px;
`;

const Step1 = styled.div<{$step: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color:  ${(props) => (props.$step === 1)?`#134318`:`#ccd9c4`};
    border-radius: 50%;
    font-size: 40px;
    color: #ffffff;
    font-family:'DungGeunMo';
`;

const Step2 = styled(Step1)`
    background-color:  ${(props) => (props.$step === 2)?`#134318`:`#ccd9c4`};
`;

const Step3 = styled(Step1)`
    background-color:  ${(props) => (props.$step === 3)?`#134318`:`#ccd9c4`};
`;

export default Indicator;