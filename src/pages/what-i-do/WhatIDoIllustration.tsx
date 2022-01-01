import styled from "styled-components";

import orangeBall from "../../assets/hero/main-pic-5.png";
import pinkCube from "../../assets/hero/main-pic-1.png";
import purpleCube from "../../assets/expanding/dark-purple-cube.png";
import lightCube from "../../assets/expanding/light-purple-cube.png";
import whiteBall from "../../assets/expanding/white-ball.png";

const Illustration = styled.div`
  position: absolute;
  right: 30%;
  top: 50%;
  transform: translate(50%, -50%);
  height: 100vh;
  width: 100vh;
`;

const OrangeBall = styled.img`
  position: absolute;
  left: 46%;
  top: 43.5%;
  width: 5.3%;
`;

const PinkCube = styled.img`
  position: absolute;
  left: 39.5%;
  top: 25%;
  width: 18%;
`;

const PurpleCube = styled.img`
  position: absolute;
  left: 4%;
  top: 46%;
  width: 70%;
`;

const LeftCube = styled.img`
  position: absolute;
  left: -13%;
  top: 37%;
  width: 88%;
`;

const RightCube = styled.img`
  position: absolute;
  left: 7%;
  top: 42%;
  width: 88%;
`;

const LeftBall = styled.img`
  position: absolute;
  left: 37%;
  top: 35%;
  width: 4.5%;
`;

const RightBall = styled.img`
  position: absolute;
  left: 58%;
  top: 45%;
  width: 4%;
`;

interface Props {
  scrollPercent: number;
}

const WhatIDoIllustration = ({ scrollPercent }: Props) => {
  return (
    <Illustration>
      <OrangeBall src={orangeBall} />
      <PinkCube
        src={pinkCube}
        style={{
          transform: `translateY(calc(${scrollPercent} * -300px))`,
        }}
      />
      <PurpleCube
        src={purpleCube}
        style={{
          transform: `translateY(calc(${scrollPercent} * 300px))`,
        }}
      />
      <LeftCube
        src={lightCube}
        style={{
          transform: `translateX(calc(${scrollPercent} * -200px))`,
        }}
      />
      <RightCube
        src={lightCube}
        style={{
          transform: `translateX(calc(${scrollPercent} * 200px))`,
        }}
      />
      <LeftBall
        src={whiteBall}
        style={{
          transform: `translate(calc(${scrollPercent} * -400px), calc(${scrollPercent} * -400px))`,
        }}
      />
      <RightBall
        src={whiteBall}
        style={{
          transform: `translate(calc(${scrollPercent} * 300px), calc(${scrollPercent} * -300px))`,
        }}
      />
    </Illustration>
  );
};

export default WhatIDoIllustration;
