import styled from "styled-components";

import floor from "../../assets/socials/floor.png";
import yellowCube from "../../assets/socials/yellow-cube.png";
import tealCube from "../../assets/socials/teal-cube.png";
import orangeBall from "../../assets/hero/main-pic-5.png";
import whiteBall from "../../assets/socials/white-ball.png";
import { useDevice } from "../../hooks/use-device";

const Illustration = styled.div`
  position: absolute;
  aspect-ratio: 1;

  width: 600px;
  bottom: 0;
  right: 0;
  @media only screen and (max-width: 1400px) {
    right: 10%;
    width: 500px;
  }
  @media only screen and (max-width: 639px) {
    right: -3%;
    bottom: -20%;
    width: 200px;
  }
`;

const Floor = styled.img`
  position: absolute;
  right: -15%;
  bottom: -6%;
  width: 140%;
`;

const TealCube = styled.img`
  position: absolute;
  right: 19%;
  bottom: 18%;
  width: 36%;

  @media only screen and (max-width: 639px) {
    bottom: 5%;
  }
`;

const YellowCube = styled.img`
  position: absolute;
  right: 8%;
  bottom: 24%;
  width: 50%;
`;

const OrangeBall = styled.img`
  position: absolute;
  right: 60.5%;
  bottom: -32%;
  width: 11%;

  @media only screen and (max-width: 639px) {
    bottom: -87%;
  }
`;

const RightWhiteBall = styled.img`
  position: absolute;
  right: -15%;
  bottom: -33%;
  width: 70%;

  @media only screen and (max-width: 639px) {
    bottom: -53%;
  }
`;

const LeftWhiteBall = styled.img`
  position: absolute;
  right: 67%;
  bottom: 43%;
  width: 40%;

  @media only screen and (max-width: 639px) {
    bottom: 58%;
  }
`;

interface Props {
  scrollPercent: number;
}

const SayHelloIllustration = ({ scrollPercent }: Props) => {
  const { isMobile } = useDevice();

  return (
    <Illustration>
      <Floor src={floor} />
      <TealCube
        src={tealCube}
        style={{
          transform: `translateY(calc(${scrollPercent} * -${
            isMobile ? 50 : 100
          }px))`,
        }}
      />
      <OrangeBall
        src={orangeBall}
        style={{
          transform: `translateY(calc(${scrollPercent} * -${
            isMobile ? 150 : 300
          }px))`,
        }}
      />
      <YellowCube src={yellowCube} />
      <RightWhiteBall
        src={whiteBall}
        style={{
          transform: `translateY(calc(${scrollPercent} * -${
            isMobile ? 50 : 100
          }px))`,
        }}
      />
      <LeftWhiteBall
        src={whiteBall}
        style={{
          transform: `translateY(calc(${scrollPercent} * ${
            isMobile ? 50 : 100
          }px))`,
        }}
      />
    </Illustration>
  );
};

export default SayHelloIllustration;
