import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NextButton from '../components/NextButton';
import UserTypeCard from '../components/UserTypeCard';

const UserTypeSelectPage = () => {
  const [selected, setSelected] = useState<'default' | 'custom' | null>(null);
  const navigate = useNavigate();

  return (
    <Main>
      <Title>먼저, 일하는 스타일을 선택해 주세요!</Title>
      <CardContainer>
        <UserTypeCard
          title="전형적인 직장인이에요"
          points={[
            '오전 9시 - 오후 6시 일해요',
            '공휴일을 제외한 월~금 일해요',
            '월급 단위로 급여를 받아요',
          ]}
          selected={selected === 'default'}
          onClick={() => setSelected('default')}
        />
        <UserTypeCard
          title="근무 날짜를 직접 입력할래요"
          points={[
            '출퇴근 시간이 일반 직장인과 달라요',
            '근무 요일이나 날짜가 자유로워요',
            '시급 또는 월급 단위로 급여를 받아요',
          ]}
          selected={selected === 'custom'}
          onClick={() => setSelected('custom')}
        />
      </CardContainer>
      <BottomRightWrapper>
        <NextButton label={'Next'} onClick={() => navigate('/step1')} />
      </BottomRightWrapper>
    </Main>
  );
};

export default UserTypeSelectPage;

const Main = styled.main`
  margin: 0;
  padding: 0;
  background-color: #f1f5ec;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 120px;
`;

const Title = styled.h1`
  font-family: DungGeunMo;
  font-weight: 400;
  font-size: 42px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 100px;
`;

const BottomRightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 120px;
  padding-bottom: 40px;
`;
