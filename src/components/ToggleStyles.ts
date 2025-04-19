import styled from "styled-components";

export const ToggleWrapper = styled.div<{ variant: 'default' | 'compact' }>`
  position: relative;
  display: flex;
  background-color: #ffffff;
  border-radius: 999px;
  width: ${({ variant }) => (variant === 'default' ? '309px' : '257px')};
  height: ${({ variant }) => (variant === 'default' ? '88px' : '51px')};
`

export const ToggleButton = styled.button<{
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
`

export const Slide = styled.div<{
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