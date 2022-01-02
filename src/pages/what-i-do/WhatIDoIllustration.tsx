import styled from "styled-components";

import orangeBall from "../../assets/hero/main-pic-5.png";
import pinkCube from "../../assets/hero/main-pic-1.png";
import purpleCube from "../../assets/expanding/dark-purple-cube.png";
import lightCube from "../../assets/expanding/light-purple-cube.png";
import whiteBall from "../../assets/expanding/white-ball.png";
import { useDevice } from "../../hooks/use-device";

const Illustration = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 1;

  height: 100vh;
  width: 100vh;
  right: 30%;
  @media only screen and (max-width: 1400px) {
    height: 80vh;
    width: 80vh;
    right: 25%;
  }
  @media only screen and (max-width: 639px) {
    height: 100vw;
    width: 100vw;
    top: auto;
    bottom: 4.6rem;
    right: 0;
    transform: none;
  }
`;

const OrangeBall = styled.img`
  position: absolute;
  left: 46%;
  top: 43.5%;

  width: 5.3%;
  @media only screen and (max-width: 639px) {
    width: 9.5%;
  }
`;

const PinkCube = styled.img`
  position: absolute;
  top: 25%;

  width: 18%;
  left: 39.5%;
  @media only screen and (max-width: 639px) {
    width: 33%;
    left: 34.5%;
  }
`;

const PurpleCube = styled.img`
  position: absolute;

  width: 70%;
  top: 46%;
  left: 4%;
  @media only screen and (max-width: 639px) {
    width: 130%;
    top: 40%;
    left: -32%;
  }
`;

const LeftCube = styled.img`
  position: absolute;

  width: 88%;
  top: 37%;
  left: -13%;
  @media only screen and (max-width: 639px) {
    width: 164%;
    top: 30%;
    left: -60%;
  }
`;

const RightCube = styled.img`
  position: absolute;

  width: 88%;
  top: 42%;
  left: 7%;
  @media only screen and (max-width: 639px) {
    width: 164%;
    top: 38%;
    left: -30%;
  }
`;

const LeftBall = styled.img`
  position: absolute;
  left: 37%;
  top: 35%;

  width: 4.5%;
  @media only screen and (max-width: 639px) {
    width: 9%;
  }
`;

const RightBall = styled.img`
  position: absolute;
  left: 58%;
  top: 45%;

  width: 4%;
  @media only screen and (max-width: 639px) {
    width: 8%;
  }
`;

interface Props {
  scrollPercent: number;
}

const WhatIDoIllustration = ({ scrollPercent }: Props) => {
  const { isMobile } = useDevice();

  return (
    <Illustration>
      <OrangeBall src={orangeBall} />
      <LeftCube
        src={lightCube}
        style={{
          transform: `translateX(calc(${scrollPercent} * -${
            isMobile ? 100 : 200
          }px))`,
        }}
      />
      <PinkCube
        src={pinkCube}
        style={{
          transform: `translateY(calc(${scrollPercent} * -${
            isMobile ? 150 : 300
          }px))`,
        }}
      />
      <PurpleCube
        src={purpleCube}
        style={{
          transform: `translateY(calc(${scrollPercent} * ${
            isMobile ? 150 : 300
          }px))`,
        }}
      />
      <RightCube
        src={lightCube}
        style={{
          transform: `translateX(calc(${scrollPercent} * ${
            isMobile ? 100 : 200
          }px))`,
        }}
      />
      <LeftBall
        src={whiteBall}
        style={{
          transform: `translate(calc(${scrollPercent} * -${
            isMobile ? 200 : 400
          }px), calc(${scrollPercent} * -${isMobile ? 200 : 400}px))`,
        }}
      />
      <RightBall
        src={whiteBall}
        style={{
          transform: `translate(calc(${scrollPercent} * ${
            isMobile ? 150 : 300
          }px), calc(${scrollPercent} * -${isMobile ? 150 : 300}px))`,
        }}
      />
    </Illustration>
  );
};

export default WhatIDoIllustration;
