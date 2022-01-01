import { useRef } from "react";
import styled from "styled-components";

import LineHeader from "../../components/LineHeader";
import Socials from "../../components/Socials";
import getScrollPercent from "../../utils/scroll-percent";
import SayHelloIllustration from "./SayHelloIllustration";

const StyledSayHello = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;
`;

const Container = styled.div`
  position: relative;
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

const FooterExtension = styled.div`
  width: 150vw;
  height: 1000px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) rotate(-20deg);
  background: var(--dark-bg);
`;

const SecondLayer = styled.div`
  position: absolute;
  left: 50%;
  bottom: -16px;
  transform: translateX(-50%);
  background: #203696;
  border-radius: 34px;
  height: 100%;
  width: calc(100% - 48px);
`;

const ThirdLayer = styled.div`
  position: absolute;
  left: 50%;
  bottom: -32px;
  transform: translateX(-50%);
  background: #1b1b87;
  border-radius: 34px;
  height: 100%;
  width: calc(100% - 98px);
`;

interface Props {
  scroll: number;
}

const SayHello = ({ scroll }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledSayHello ref={pageRef}>
      <FooterExtension />
      <ThirdLayer />
      <SecondLayer />
      <Container>
        <LineHeader text="Say hello 👋" />
        <Bold>My Socials.</Bold>
        <Socials />
        <SayHelloIllustration scrollPercent={scrollPercent} />
      </Container>
    </StyledSayHello>
  );
};

export default SayHello;
