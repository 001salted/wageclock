import { ToggleWrapper, ToggleButton, Slide } from "./ToggleStyles"

interface ToggleProps {
  value: string
  onChange: (val: string) => void
}

const GaugeViewToggle = ({ value, onChange }: ToggleProps) => {
  const options = ['일급', '월급']
  const variant = "compact"

  return (
    <ToggleWrapper variant={variant}>
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

export default GaugeViewToggle;