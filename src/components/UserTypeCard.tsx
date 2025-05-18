import styled from 'styled-components';

interface UserTypeCardProps {
  title: string;
  points: string[];
  selected: boolean;
  onClick: () => void;
}

const UserTypeCard = ({ title, points, selected, onClick }: UserTypeCardProps) => {
  return (
    <Card selected={selected} onClick={onClick}>
      <Title>{title}</Title>
      <PointList>
        {points.map((point, i) => (
          <Point key={i}>✅ {point}</Point>
        ))}
      </PointList>
    </Card>
  );
};

export default UserTypeCard;

const Card = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#a8e665' : '#ffffff')};
  border: 1px solid ${({ selected }) => (selected ? '#1f4223' : 'none')};
  border-radius: 30px;
  height: 369px;
  width: 400px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#b0fe5b' : '#F0F0F0')};
    border-color: #1f4223;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Title = styled.h2`
  font-family: DungGeunMo;
  font-weight: 400;
  font-size: 27px;
`;

const PointList = styled.ul`
  font-size: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Point = styled.li`
  margin: 6px 0;
`;
