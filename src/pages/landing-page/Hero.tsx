import styled from "styled-components";

import HeroContent from "./HeroContent";
import Header from "../../components/Header";
import ScrollDown from "../../components/ScrollDown";
import bg from "../../assets/backgrounds/bg-main.jpg";
import HeroIllustration from "./HomeIllustration";
import { useScroll } from "../../hooks/use-scroll";

const StyledHero = styled.div`
  position: relative;
  overflow: hidden;

  height: 100vh;
  @media only screen and (max-width: 1400px) {
    height: 80vh;
  }
  @media only screen and (max-width: 639px) {
    height: auto;

    ::before {
      content: "";
      position: absolute;
      top: 420px;
      right: 0;
      z-index: -1;
      width: 226px;
      height: 370px;
      background: #1b1b87;
      -webkit-clip-path: polygon(0 120px, 100% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 120px, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const Illustration = styled.div`
  bottom: 0;
  right: 0;

  position: absolute;
  width: 89vh;
  height: 89vh;
  @media only screen and (max-width: 1400px) {
    height: 71vh;
    width: 71vh;
  }
  @media only screen and (max-width: 639px) {
    position: relative;
    width: 125vw;
    height: 125vw;
    transform: translateX(-15vw);
  }
`;

const Content = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  padding: 60px;
  height: 100%;
  @media only screen and (max-width: 1400px) {
    position: relative;
    padding: 30px 35px;
  }
  @media only screen and (max-width: 639px) {
    position: relative;
    padding: 30px;
    height: auto;
  }
`;

const Hero = () => {
  const scroll = useScroll();
  const scrollPercent = scroll / window.innerHeight;

  return (
    <StyledHero id="home-scroll">
      <Background src={bg} />
      <Content>
        <Header />
        <HeroContent scrollPercent={scrollPercent} />
        <ScrollDown target="about-me-scroll" spacing />
      </Content>
      <Illustration>
        <HeroIllustration scrollPercent={scrollPercent} />
      </Illustration>
    </StyledHero>
  );
};

export default Hero;
