import styled from "styled-components";

interface ToggleProps {
  value: string;
  onChange: (val: string) => void;
  variant?: 'default' | 'compact';
  options?: string[];
}

// WageTypeToggle: 토글 버튼 컴포넌트
const WageTypeToggle = ({ value, onChange, 
                          variant = 'default', 
                          options = ['시급', '월급']}: ToggleProps) => {
 return(
  <ToggleWrapper variant={variant}>
    {/*초록색 슬라이더*/}
    <Slide $selected={value} variant={variant} options={options} /> 
    {options.map((type) => (
      <ToggleButton
        key={type}
        onClick={() => onChange(type)}
        isActive={value === type}
        variant={variant}
      >
        {type}
      </ToggleButton>
    ))}
  </ToggleWrapper>
 )                           
}

export default WageTypeToggle;

// 스타일 정의
const ToggleWrapper = styled.div<{ variant: 'default' | 'compact' }>`
  position: relative;
  display: flex;
  background-color: #ffffff;
  border-radius: 999px;
  width: ${({ variant }) => (variant === 'default' ? '309px' : '257px')};
  height: ${({ variant }) => (variant === 'default' ? '88px' : '51px')};
`;

const ToggleButton = styled.button<{
  isActive: boolean;
  variant: 'default' | 'compact';
}>`
  flex:1;
  z-index: 1;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Pretendard';
  font-size: ${({ variant }) => (variant === 'default' ? '24px' : '16px')};
`;

const Slide = styled.div<{
  $selected: string;
  variant: 'default' | 'compact';
  options: string[];
}>`
  position: absolute;
  ${({ $selected, variant, options }) => {
    const isFirst = $selected === options[0];

    if (variant === 'default') {
      return `
        top: 7px;
        left: ${isFirst ? '8px' : '155px'};
        width: 147px;
        height: 73px;
      `;
    } else {
      return `
        top: 5px;
        left: ${isFirst ? '7px' : '128px'};
        width: 122px;
        height: 41px;
      `
    }
  }}

  background-color: #B0FE5B;
  border-radius: 999px;
  transition: all 0.3s ease;
  z-index: 0;
`;