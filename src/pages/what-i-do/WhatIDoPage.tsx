import { useRef } from "react";
import styled from "styled-components";

import LineHeader from "../../components/LineHeader";
import ScrollDown from "../../components/ScrollDown";
import lightBlueCube from "../../assets/greeble/light-blue-cube.png";
import getScrollPercent from "../../utils/scroll-percent";
import WhatIDoIllustration from "./WhatIDoIllustration";

const StyledWhatIDoPage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--dark);
  overflow: hidden;

  height: 100vh;
  @media only screen and (max-width: 1400px) {
    height: 80vh;
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
    padding-left: 0;
  }

  ::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);

    top: 50%;
    transform: translate(50%, -50%);

    right: 30%;
    height: 160vh;
    width: 160vh;
    @media only screen and (max-width: 1400px) {
      right: 25%;
      height: 130vh;
      width: 130vh;
    }
  }

  ::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);

    top: 50%;
    transform: translate(50%, -50%);

    right: 30%;
    height: 100vh;
    width: 100vh;
    @media only screen and (max-width: 1400px) {
      right: 25%;
      height: 80vh;
      width: 80vh;
    }
  }
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 570px;
`;

const TextContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const LightCube = styled.img`
  position: absolute;
  top: -55%;
  left: 0%;
  width: 16%;
  transition: all 0.2s;
`;

const Bold = styled.p`
  position: relative;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;
  color: var(--bg);

  font-size: 72px;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
  }
`;

const Smaller = styled.p`
  position: relative;
  line-height: 1.77778;
  color: var(--bg);
  margin-top: 50px;

  font-size: 18px;
  @media only screen and (max-width: 1400px) {
    font-size: 16px;
  }
`;

interface Props {
  scroll: number;
}

const WhatIDoPage = ({ scroll }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledWhatIDoPage ref={pageRef} id="what-i-do-scroll">
      <WhatIDoIllustration scrollPercent={scrollPercent} />
      <Content>
        <div />
        <TextContent>
          <LightCube
            src={lightBlueCube}
            style={{
              transform: `translateY(calc(${scrollPercent} * 200px))`,
            }}
          />
          <LineHeader pink text="What I do" />
          <Bold>I love creating beautiful user experiences.</Bold>
          <Smaller>
            Most of my development experience and interest is in React front end
            development. More recently I have also been using Solidity to write
            smart contracts on Ethereum.
          </Smaller>
        </TextContent>
        <ScrollDown target="portfolio-scroll" white />
      </Content>
    </StyledWhatIDoPage>
  );
};

export default WhatIDoPage;
