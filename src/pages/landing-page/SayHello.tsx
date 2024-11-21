import { useRef } from "react";
import styled from "styled-components";

import LineHeader from "../../components/LineHeader";
import Socials from "../../components/Socials";
import { useScroll } from "../../hooks/use-scroll";
import getScrollPercent from "../../utils/scroll-percent";
import SayHelloIllustration from "./SayHelloIllustration";

const StyledSayHello = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;

  @media only screen and (max-width: 639px) {
    margin-top: 0;
    width: calc(100% + 60px);
    left: -30px;
  }
  @media only screen and (max-width: 639px) {
    padding: 0 30px;
    padding-top: 30px;
  }
`;

const Container = styled.div`
  position: relative;
  padding: 60px;
  background: var(--bg);

  border-radius: 48px;
  @media only screen and (max-width: 639px) {
    border-radius: 0;
  }
  @media only screen and (max-width: 639px) {
    padding: 0;
  }
`;

const Bold = styled.p`
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;

  font-size: 72px;
  margin-bottom: 60px;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 639px) {
    font-size: 42px;
    margin-bottom: 30px;
  }
`;

const FooterExtension = styled.div`
  width: 150vw;
  height: 1000px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) rotate(-20deg);
  background: var(--dark-bg);

  @media only screen and (max-width: 639px) {
    display: none;
  }
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

  @media only screen and (max-width: 639px) {
    display: none;
  }
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

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const SayHello = () => {
  const scroll = useScroll();
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
