import styled from "styled-components";

interface EarningsCardProps {
  wageAmount: string;
}

const EarningsCardMonth = ({ wageAmount }: EarningsCardProps) => {

  return(
    <Card>
      <BoxWrapper>
        <TextBox>
          <Top>이번 달 현재까지</Top>
          <Bottom>
            <Amount>{wageAmount}</Amount>
            <AmountText>원 벌었습니다!</AmountText>
          </Bottom>
        </TextBox>
      </BoxWrapper>
    </Card>
  );
};

export default EarningsCardMonth;

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 84%;
  margin: 17px auto 0;
  padding: 24px;
  border-radius: 10px;
  background-color: transparent;
  height: 173px;
  align-items: center;
  min-width: 800px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;

`

const TextBox = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 48px;
  flex-direction: column;
  flex-grow: 1;
`;

const Top = styled.div`
  color: #1F4223;
  font-family: 'DungGeunMo';
  padding-bottom: 15px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: baseline;
`;

const Amount = styled.div`
  color: #5E953F;
  font-family: 'Press Start 2P', DungGeunMo;
  padding-right: 20px;
  position: relative;
  top: 9px;
`;

const AmountText = styled.div`
  color: #1F4223;
  font-family: 'DungGeunMo';
`;