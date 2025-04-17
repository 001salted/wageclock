import styled from "styled-components";
import wonImage from "../assets/wonImage.png";

const WonSigns = () => {
  return (
    <Wrapper>
      <Container>
        {Array.from({ length: 30 }).map((_, index) => (
          <Icon key={index} src={wonImage} alt="₩" />
        ))}
      </Container>
    </Wrapper>

  )
}

export default WonSigns;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 84%;
  background-color: #CCD9C4;
  margin: 17px auto;
  padding: 0 24px;
  min-width: 600px;
  border-radius: 10px;
`

const Container = styled.div`
  flex-wrap: nowrap;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  border-radius: 10px;
  padding: 0 0;
`

const Icon = styled.img`
  image-rendering: pixelated;
  width: 123px; 
`;