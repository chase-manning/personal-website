import { useRef } from "react";
import styled from "styled-components";

import LineHeader from "../../components/LineHeader";
import arrow from "../../assets/ui/arrow.svg";
import pinkSquare from "../../assets/hero/main-pic-8.png";
import whiteSquare from "../../assets/hero/main-pic-9.png";
import getScrollPercent from "../../utils/scroll-percent";
import { useDevice } from "../../hooks/use-device";
import { useScroll } from "../../hooks/use-scroll";

const StyledAboutMe = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  height: 100vh;
  @media only screen and (max-width: 1400px) {
    height: 80vh;
  }
  @media only screen and (max-width: 639px) {
    height: auto;
  }

  padding: 60px 0;
  padding-left: calc(15% + 60px);
  @media only screen and (max-width: 1550px) {
    padding-left: calc(10% + 60px);
  }
  @media only screen and (max-width: 1450px) {
    padding-left: calc(5% + 35px);
  }
  @media only screen and (max-width: 639px) {
    padding: 60px 30px;
  }
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  line-height: 1.3333;
  font-weight: 600;

  font-size: 42px;
  max-width: 850px;
  @media only screen and (max-width: 1400px) {
    font-size: 32px;
    max-width: 650px;
  }
  @media only screen and (max-width: 639px) {
    font-size: 20px;
    max-width: 270px;
  }
`;

const Bold = styled.p`
  line-height: 1.02;
  letter-spacing: -1.3px;
  font-weight: 600;

  font-size: 132px;
  max-width: 850px;
  margin-top: 50px;
  @media only screen and (max-width: 1400px) {
    font-size: 96px;
    max-width: 650px;
    margin-top: 30px;
  }
  @media only screen and (max-width: 639px) {
    font-size: 72px;
    max-width: 550px;
    margin-top: 130px;
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 60px;

  transition: all 0.3s;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  :hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }

  padding: 26px 50px;
  @media only screen and (max-width: 1400px) {
    padding: 20px 40px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 639px) {
    width: 100%;
    margin-top: 3.3rem;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonText = styled.div`
  font-weight: 500;
  color: var(--bg);

  font-size: 18px;
  @media only screen and (max-width: 1400px) {
    font-size: 16px;
  }
`;

const ButtonArrow = styled.img`
  margin-left: 16px;
  width: 22px;
`;

const Illustration = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  height: 100vh;
  width: 100vh;
  @media only screen and (max-width: 639px) {
    height: 200vw;
    width: 100vw;
  }
`;

const PinkSquare = styled.img`
  position: absolute;
  width: 120%;
  transition: all 0.2s;

  top: 15%;
  right: -34%;
  @media only screen and (max-width: 639px) {
    top: 24%;
    right: -44%;
  }
`;

const WhiteSquare = styled.img`
  position: absolute;
  width: 30%;
  transition: all 0.2s;

  top: 85%;
  right: 48%;
  @media only screen and (max-width: 639px) {
    top: 68%;
    right: -2%;
  }
`;

const BlurredSquare = styled.img`
  position: absolute;
  filter: blur(2px);
  right: 45%;
  top: 4%;
  width: 18%;
  transition: all 0.2s;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const AboutMe = () => {
  const scroll = useScroll();
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);
  const { isMobile } = useDevice();

  return (
    <StyledAboutMe ref={pageRef} id="about-me-scroll">
      <Illustration>
        <PinkSquare
          src={pinkSquare}
          style={{
            transform: `translateY(calc(${scrollPercent} * -${
              isMobile ? 100 : 200
            }px))`,
          }}
        />
        <WhiteSquare
          src={whiteSquare}
          style={{
            transform: `translateY(calc(${scrollPercent} * -${
              isMobile ? 200 : 400
            }px))`,
          }}
        />
        <BlurredSquare
          src={whiteSquare}
          style={{
            transform: `translateY(calc(${scrollPercent} * 200px))`,
          }}
        />
      </Illustration>
      <Content>
        <TopSection>
          <LineHeader text="About me" />
          <Description>
            I'm a developer living in London, building DeFi and NFT products.
          </Description>
        </TopSection>
        <Bold>Check out my work.</Bold>
        <div>
          <Button
            onClick={() =>
              (window as any)
                .open("https://github.com/chase-manning", "_blank")
                .focus()
            }
          >
            <ButtonContent>
              <ButtonText>View my GitHub</ButtonText>
              <ButtonArrow src={arrow} />
            </ButtonContent>
          </Button>
        </div>
      </Content>
    </StyledAboutMe>
  );
};

export default AboutMe;
