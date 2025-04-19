import styled from "styled-components";
import Indicator from "./Indicator";
import NextButton from "./NextButton";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface InputPageLayoutProps {
  step: number;
  sections: Section[];
  onNext: () => void;
  nextLabel?: string;
}

export default function InputPageLayout({
  step,
  sections,
  onNext,
  nextLabel = "Next"
}: InputPageLayoutProps) {
  return (
    <Wrapper>
      <Heading>시작하기</Heading>
      <Indicator step={step} />
      {sections.map((section, idx) => (
        <SectionWrapper key={idx}>
          <SubTitle>{section.title}</SubTitle>
          {section.content}
        </SectionWrapper>
      ))}
      <BottomRightWrapper>
        <NextButton label={nextLabel} onClick={onNext} /> 
      </BottomRightWrapper>

    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #F1F6EC;
  min-height: 100vh;
  min-width: 900px;
  padding: 0;
`;

const Heading = styled.h1`
  font-family: DungGeunMo;
  font-size: 32px;
  color: #062D0A;
  align-self: flex-start;
  padding-bottom: 10px;
  margin-left: 40px;
  margin-top: 40px;
  font-weight: 400;
`;

const SectionWrapper = styled.div`
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 26px;
`;

const SubTitle = styled.h2`
  font-family: DungGeunMo;
  font-weight: 400;
  color: #062D0A;
`;

const BottomRightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  margin-right: 120px;
  padding-bottom: 40px;
`;