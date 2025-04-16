import { useState } from 'react';
import styled from 'styled-components';

const PaydaySelector = () => {
  const [day, setDay] = useState<number | ''>('');

  return (
    <Container>
      <Label htmlFor="day-select">매달</Label>
      <SelectorBox>
        <Select
          id="day-select"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        >
          <option value="" />
          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Select>
        <UnitBadge>
          일
        </UnitBadge>
      </SelectorBox>
    </Container>
    
  )
}

export default PaydaySelector;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
`

const SelectorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: white;
  width: 160px;
  height: 90px;
  border-radius: 30px;
  flex: 1;
  
  select::-webkit-scrollbar {
    display: none;
  }

  option {
    text-align: center;
  }
`

const Label = styled.label`
  font-size: 32px;
  font-family: 'DungGeunMo';
  color: #1F4223;
  white-space: nowrap;
`

const Select = styled.select`
  font-size: 32px;
  text-align: right;
  font-family: 'Pretendard';
  color: #000;
  border-radius: 30px;
  border: none;
  flex: 1;
  background-color: transparent;
  height: 90px;


  /* 우측 화살표 제거 */
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`

const UnitBadge = styled.span`
  font-family: 'DungGeunMo';
  font-size: 32px;
  color: #1F4223;
  margin-left: 16px;
  margin-right: 5px;
`