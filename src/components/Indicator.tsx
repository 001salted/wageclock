import styled from "styled-components";

interface IndicaterProps {
    step: number;
}

function Indicator ({step}:IndicaterProps) {
    return(
        <>
        <IndicatorWrap>
            <Step>
                <Circle $active={step === 1}>1</Circle>
                <Label $active={step === 1}>급여 정보</Label>
            </Step>
            <Step>
                <Circle $active={step === 2}>2</Circle>
                <Label $active={step === 2}>근무 일시</Label>
            </Step>
            <Step>
                <Circle $active={step === 3}>3</Circle>
                <Label $active={step === 3}>급여일</Label>
            </Step>
 
        </IndicatorWrap>
        </>
    );
};

const IndicatorWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    margin: 0 auto;
    font-family: DungGeunMo;
`;

const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Circle = styled.div<{ $active: boolean }>`
    display: flex;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${(props) => (props.$active ? "#134318" : "#ccd9c4")};
    color: white;
    font-size: 40px;
    align-items: center;
    justify-content: center;
`;

const Label = styled.div<{ $active: boolean }>`
    margin-top: 16px;
    font-size: 20px;
    color: ${(props) => (props.$active ? "#134318" : "#ccd9c4")};
`;


export default Indicator;