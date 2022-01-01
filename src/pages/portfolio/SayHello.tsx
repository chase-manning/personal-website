import styled from "styled-components";
import LineHeader from "../../components/LineHeader";
import Socials from "../../components/Socials";

const StyledSayHello = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 60px;
  background: var(--bg);
  border-radius: 48px;
`;

const Bold = styled.p`
  font-size: 72px;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;
  margin-bottom: 70px;
`;

const SayHello = () => {
  return (
    <StyledSayHello>
      <Container>
        <LineHeader text="Say hello 👋" />
        <Bold>My Socials.</Bold>
        <Socials />
      </Container>
    </StyledSayHello>
  );
};

export default SayHello;
