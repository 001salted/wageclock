import { useState } from 'react';
import styled from 'styled-components';

interface EarningsCardProps {
  wonAmount: string;
  itemAmount: string;
  itemName: string;
}

const EarningsCardToday = ({ wonAmount, itemAmount, itemName }: EarningsCardProps) => {
  const [showItem, setShowItem] = useState(false);

  const topText = showItem ? `지금까지 번 돈으로` : `오늘 출근해서 현재까지`;

  const amountText = showItem ? ` 살 수 있어요!` : ` 벌었습니다!`;

  return (
    <Card $showItem={showItem}>
      <Arrow $showItem={showItem} onClick={() => setShowItem(prev => !prev)}>
        {'<'}
      </Arrow>
      <BoxWrapper>
        <TextBox>
          <Top $showItem={showItem}>{topText}</Top>
          <Bottom>
            <Amount $showItem={showItem}>{showItem ? `${itemAmount}` : `${wonAmount}`}</Amount>
            <AmountUnit $showItem={showItem}>{showItem ? itemName : `원`}</AmountUnit>
            <AmountText $showItem={showItem}>{amountText}</AmountText>
          </Bottom>
        </TextBox>
      </BoxWrapper>
      <Arrow $showItem={showItem} onClick={() => setShowItem(prev => !prev)}>
        {'>'}
      </Arrow>
    </Card>
  );
};

export default EarningsCardToday;

const Card = styled.div<{ $showItem: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 84%;
  margin: 17px auto 0;
  padding: 24px;
  border-radius: 10px;
  background-color: ${props => (props.$showItem ? '#b0fe5b' : '#317f38')};
  height: 173px;
  align-items: center;
  min-width: 800px;
`;

const Arrow = styled.button<{ $showItem: boolean }>`
  font-family: 'Press Start 2P';
  border: none;
  color: ${props => (props.$showItem ? '#1f4223' : 'white')};
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

const Top = styled.div<{ $showItem: boolean }>`
  color: ${props => (props.$showItem ? '#1f4223' : 'white')};
  font-family: 'DungGeunMo';
  padding-bottom: 15px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: baseline;
`;

const Amount = styled.div<{ $showItem: boolean }>`
  color: ${props => (props.$showItem ? '#1f4223' : '#b0fe5b')};
  font-family: 'Press Start 2P', DungGeunMo;
  padding-right: 20px;
  position: relative;
  top: 9px;
`;

const AmountUnit = styled.div<{ $showItem: boolean }>`
  color: ${props => (props.$showItem ? 'black' : 'white')};
  font-family: 'DungGeunMo';
  margin-right: 20px;
`;

const AmountText = styled.div<{ $showItem: boolean }>`
  color: ${props => (props.$showItem ? '#1f4223' : 'white')};
  font-family: 'DungGeunMo';
`;
