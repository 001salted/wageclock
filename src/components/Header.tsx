import styled from "styled-components";
import WageTypeToggle from "./WageTypeToggle";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  wageType: 'hourly' | 'monthly';
  onChange: (val: 'hourly' | 'monthly') => void;
}

const Header = ({ wageType, onChange }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>wageclock</Logo>
      <WageTypeToggle
        value={wageType === 'hourly' ? '일급' : '월급'}
        onChange={(val) => onChange(val === '일급' ? 'hourly' : 'monthly')}
        options={['일급', '월급']}
        variant="compact"
      />
    </Container>
  )
}

export default Header;

// 스타일 정의
const Container = styled.div`
  width: 84%;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin: 0 auto;
  align-items: center;
  height: 78px;
  background-color: #B0F25B;
  border-radius: 10px;
  min-width: 800px;
`

const Logo = styled.h1`
  font-size: 40px;
  font-family: 'Press Start 2P';
  color: #1F4223;
`
