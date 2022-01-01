import { useRef } from "react";
import styled from "styled-components";

import LineHeader from "../../components/LineHeader";
import arrow from "../../assets/ui/arrow.svg";
import pinkSquare from "../../assets/hero/main-pic-8.png";
import whiteSquare from "../../assets/hero/main-pic-9.png";
import getScrollPercent from "../../utils/scroll-percent";

const StyledAboutMePage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  padding: 60px 0;
  padding-left: calc(15% + 60px);
  @media only screen and (max-width: 1550px) {
    padding-left: calc(10% + 60px);
  }
  @media only screen and (max-width: 1450px) {
    padding-left: calc(5% + 60px);
  }
  @media only screen and (max-width: 639px) {
    padding-left: 0;
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
  font-size: 42px;
  line-height: 1.3333;
  font-weight: 600;
  max-width: 850px;
`;

const Bold = styled.p`
  font-size: 132px;
  line-height: 1.02;
  letter-spacing: -1.3px;
  font-weight: 600;
  max-width: 850px;
  margin-top: 50px;
`;

const Button = styled.button`
  background-color: var(--purple);
  border-radius: 20px;
  padding: 26px 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 60px;

  transition: all 0.3s;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  :hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
`;

const ButtonText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: var(--bg);
`;

const ButtonArrow = styled.img`
  margin-left: 16px;
  width: 22px;
`;

const Illustration = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vh;
  overflow: hidden;
`;

const PinkSquare = styled.img`
  position: absolute;
  right: -34%;
  top: 15%;
  width: 120%;
  transition: all 0.2s;
`;

const WhiteSquare = styled.img`
  position: absolute;
  right: 48%;
  top: 85%;
  width: 30%;
  transition: all 0.2s;
`;

const BlurredSquare = styled.img`
  position: absolute;
  filter: blur(2px);
  right: 45%;
  top: 4%;
  width: 18%;
  transition: all 0.2s;
`;

interface Props {
  scroll: number;
}

const AboutMePage = ({ scroll }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  console.log(scrollPercent);

  return (
    <StyledAboutMePage ref={pageRef} id="about-me-scroll">
      <Illustration>
        <PinkSquare
          src={pinkSquare}
          style={{
            transform: `translateY(calc(${scrollPercent} * -200px))`,
          }}
        />
        <WhiteSquare
          src={whiteSquare}
          style={{
            transform: `translateY(calc(${scrollPercent} * -400px))`,
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
            I'm a developer living in London building DeFi and NFT products.
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
            <ButtonText>View my GitHub</ButtonText>
            <ButtonArrow src={arrow} />
          </Button>
        </div>
      </Content>
    </StyledAboutMePage>
  );
};

export default AboutMePage;
