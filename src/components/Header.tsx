import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GaugeViewToggle from './GaugeViewToggle';

interface HeaderProps {
  viewType: 'daily' | 'monthly';
  onChange: (val: 'daily' | 'monthly') => void;
}

const Header = ({ viewType, onChange }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate('/')}>wageclock</Logo>
      <GaugeViewToggle
        value={viewType === 'daily' ? '일급' : '월급'}
        onChange={val => onChange(val === '일급' ? 'daily' : 'monthly')}
      />
    </Container>
  );
};

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
  background-color: #b0f25b;
  border-radius: 10px;
  min-width: 800px;
`;

const Logo = styled.h1`
  font-size: 40px;
  font-family: 'Press Start 2P';
  color: #1f4223;
  cursor: pointer;
`;
