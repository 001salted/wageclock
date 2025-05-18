import { Slide, ToggleButton, ToggleWrapper } from '../common/ToggleStyles';

interface ToggleProps {
  value: string;
  onChange: (val: string) => void;
}

// WageTypeToggle: 토글 버튼 컴포넌트
const WageTypeToggle = ({ value, onChange }: ToggleProps) => {
  const options = ['시급', '월급'];
  const variant = 'default';

  return (
    <ToggleWrapper variant={variant}>
      {/*초록색 슬라이더*/}
      <Slide $selected={value} variant={variant} options={options} />
      {options.map(type => (
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
  );
};

export default WageTypeToggle;
