import { useRef } from "react";
import styled from "styled-components";

import LineHeader from "../../components/LineHeader";
import ScrollDown from "../../components/ScrollDown";
import lightBlueCube from "../../assets/greeble/light-blue-cube.png";
import getScrollPercent from "../../utils/scroll-percent";

const StyledThirdPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: var(--dark);
  overflow: hidden;

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

  ::before {
    content: "";
    position: absolute;
    height: 160vh;
    width: 160vh;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);

    right: 30%;
    top: 50%;
    transform: translate(50%, -50%);
  }

  ::after {
    content: "";
    position: absolute;
    height: 100vh;
    width: 100vh;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);

    right: 30%;
    top: 50%;
    transform: translate(50%, -50%);
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

interface AssetProps {
  scrollPercent: number;
}

const LightCube = styled.img`
  position: absolute;
  top: 13%;
  left: 11%;
  width: 20%;
  transform: translateY(
    ${(props: AssetProps) => `${props.scrollPercent * 200}px`}
  );
  transition: all 0.2s;
`;

const Bold = styled.p`
  font-size: 72px;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;
  color: var(--bg);
`;

const Smaller = styled.p`
  font-size: 18px;
  line-height: 1.77778;
  color: var(--bg);
  margin-top: 50px;
`;

interface Props {
  scroll: number;
}

const ThirdPage = ({ scroll }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledThirdPage ref={pageRef}>
      <Content>
        <div />
        <TextContent>
          <LightCube src={lightBlueCube} scrollPercent={scrollPercent} />
          <LineHeader pink text="What tech I use" />
          <Bold>Art Direction for Global Leading Brands.</Bold>
          <Smaller>
            I research and create breakthrough - delightful ideas, leading
            visual designers.
          </Smaller>
        </TextContent>
        <ScrollDown white />
      </Content>
    </StyledThirdPage>
  );
};

export default ThirdPage;
