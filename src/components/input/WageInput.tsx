import styled from 'styled-components';

interface WageInputProps {
  wageType: 'hourly' | 'monthly';
  value: number | '';
  onChange: (value: number | '') => void;
}

export default function WageInput({ wageType, value, onChange }: WageInputProps) {
  const label = wageType === 'hourly' ? '시급' : '월급';

  const formatNumber = (val: number | '') => {
    if (val === '') return '';
    return val.toLocaleString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, '').replace(/[^0-9]/g, '');
    if (raw === '') {
      onChange('');
    } else {
      onChange(Number(raw));
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>
        <Input
          type="text"
          inputMode="numeric"
          placeholder=""
          value={formatNumber(value)}
          onChange={handleChange}
        />
        <UnitBadge>원</UnitBadge>
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 30px;
  padding: 0 24px;
  width: fit-content;
  flex: 1;
`;

const Label = styled.span`
  font-family: 'DungGeunMo';
  font-size: 32px;
  color: #245028;
  white-space: nowrap;
`;

const Input = styled.input`
  border: none;
  flex: 1;
  text-align: right;
  font-family: 'Pretendard';
  font-size: 32px;
  color: #000;
  background-color: transparent;
  height: 90px;

  /* input 오른쪽 화살표 제거 */
  appearance: textfield;
  -moz-appearance: textfield;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }
`;

const UnitBadge = styled.div`
  background-color: white;
  color: #245028;
  font-family: 'Pretendard';
  font-size: 32px;
  border-radius: 999px;
  padding: 4px 12px;
  margin-left: 16px;
  white-space: nowrap;
`;
