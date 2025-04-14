import styled from "styled-components";

interface StartButtonProps {
  onClick? : () => void;
  children: React.ReactNode;
}

const StartButton = ({ onClick, children }: StartButtonProps) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default StartButton;

const ButtonStyled = styled.button`
  width: 371px;
  height: 90px;
  border: none;
  border-radius: 999px;
  font-size: 29px;
  font-family: "DungGeunMo";
  cursor: pointer;

  transition: background-color 0.2s;
  
  // 기본 상태
  background-color: #A8E665; 

  // hover 상태
  &:hover {
    background-color: #B0FE5B;
  }

  &:active {
    background-color: #B0D097;
  }
`