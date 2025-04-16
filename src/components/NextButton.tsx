import styled from "styled-components";

import { FaArrowRight } from 'react-icons/fa';

interface NextButtonProps {
  onClick?: () => void;
  label?: string; // 아래 표시할 텍스트
}

const NextButton = ({ onClick, label = 'NEXT' }: NextButtonProps) => {
  return (
    <Wrapper>
      <IconButton onClick={onClick}>
        <FaArrowRight size={36} />
      </IconButton>
      <Label>{label}</Label>
    </Wrapper>
  )
}

export default NextButton;

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  width: 119px;
  height: 90px;
  background-color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: #A8E665;
  }

  &:active {
    background-color: #B0D097;
  }

  svg {
  color: #1F4223;
 }
`;

const Label = styled.span`
  font-family: 'DungGeunMo';
  font-size: 20px;
  color: #1F4223;
`