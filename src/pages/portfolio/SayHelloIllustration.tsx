import styled from "styled-components";

import floor from "../../assets/socials/floor.png";
import yellowCube from "../../assets/socials/yellow-cube.png";
import tealCube from "../../assets/socials/teal-cube.png";
import orangeBall from "../../assets/hero/main-pic-5.png";
import whiteBall from "../../assets/socials/white-ball.png";

const Illustration = styled.div`
  position: absolute;
  bottom: 0;
  aspect-ratio: 1;

  width: 600px;
  right: 0;
  @media only screen and (max-width: 1400px) {
    right: 10%;
    width: 500px;
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
`;

const RightWhiteBall = styled.img`
  position: absolute;
  right: -15%;
  bottom: -33%;
  width: 70%;
`;

const LeftWhiteBall = styled.img`
  position: absolute;
  right: 67%;
  bottom: 43%;
  width: 40%;
`;

interface Props {
  scrollPercent: number;
}

const SayHelloIllustration = ({ scrollPercent }: Props) => {
  return (
    <Illustration>
      <Floor src={floor} />
      <TealCube
        src={tealCube}
        style={{
          transform: `translateY(calc(${scrollPercent} * -100px))`,
        }}
      />
      <OrangeBall
        src={orangeBall}
        style={{
          transform: `translateY(calc(${scrollPercent} * -300px))`,
        }}
      />
      <YellowCube src={yellowCube} />
      <RightWhiteBall
        src={whiteBall}
        style={{
          transform: `translateY(calc(${scrollPercent} * -100px))`,
        }}
      />
      <LeftWhiteBall
        src={whiteBall}
        style={{
          transform: `translateY(calc(${scrollPercent} * 100px))`,
        }}
      />
    </Illustration>
  );
};

export default SayHelloIllustration;
