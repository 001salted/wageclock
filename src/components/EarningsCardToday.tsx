import { useState } from 'react';
import styled from 'styled-components';

interface EarningsCardProps {
  wonAmount: string;
  itemAmount: string;
  itemName: string;
}

const EarningsCardToday = ({ wonAmount, itemAmount, itemName }: EarningsCardProps) => {
  const [showItem, setShowItem] = useState(false);

  return (
    <Card>
      <Arrow onClick={() => setShowItem(prev => !prev)}>{'<'}</Arrow>
      <BoxWrapper>
        <TextBox>
          <Top>오늘 출근해서 현재까지</Top>
          <Bottom>
            <Amount>{showItem ? `${itemAmount}` : `${wonAmount}`}</Amount>
            <AmountUnit>{showItem ? `${itemName}` : `원`}</AmountUnit>
            <AmountText> 벌었습니다!</AmountText>
          </Bottom>
        </TextBox>
      </BoxWrapper>
      <Arrow onClick={() => setShowItem(prev => !prev)}>{'>'}</Arrow>
    </Card>
  );
};

export default EarningsCardToday;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 84%;
  margin: 17px auto 0;
  padding: 24px;
  border-radius: 10px;
  background-color: #317f38;
  height: 173px;
  align-items: center;
  min-width: 800px;
`;

const Arrow = styled.button`
  font-family: 'Press Start 2P';
  border: none;
  color: white;
  background-color: transparent;
  font-size: 48px;
  cursor: pointer;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TextBox = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 48px;
  flex-direction: column;
  flex-grow: 1;
`;

const Top = styled.div`
  color: #b0fe5b;
  font-family: 'DungGeunMo';
  padding-bottom: 15px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: baseline;
`;

const Amount = styled.div`
  color: white;
  font-family: 'Press Start 2P', DungGeunMo;
  padding-right: 20px;
  position: relative;
  top: 9px;
`;

const AmountUnit = styled.div`
  color: white;
  font-family: 'DungGeunMo';
  margin-right: 20px;
`;

const AmountText = styled.div`
  color: #b0fe5b;
  font-family: 'DungGeunMo';
`;
