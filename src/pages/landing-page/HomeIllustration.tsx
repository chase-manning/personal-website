import styled from "styled-components";
import floor from "../../assets/hero/main-pic-6.png";
import leftBlue from "../../assets/hero/main-pic-3.png";
import rightYellow from "../../assets/hero/main-pic-4.png";
import purpleTop from "../../assets/hero/main-pic-2.png";
import pinkTop from "../../assets/hero/main-pic-1.png";
import orangeBall from "../../assets/hero/main-pic-5.png";
import floorBall from "../../assets/hero/main-pic-7.png";
import pinkFloorSquare from "../../assets/hero/main-pic-8.png";
import whiteFloorSquare from "../../assets/hero/main-pic-9.png";
import { useDevice } from "../../hooks/use-device";

const StyledHeroIllustration = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Floor = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const LeftBlue = styled.img`
  position: absolute;
  left: 19.3%;
  bottom: 39.6%;
  width: 33%;
`;

const RightYellow = styled.img`
  position: absolute;
  right: 14.3%;
  bottom: 40%;
  width: 25%;
`;

const PurpleTop = styled.img`
  position: absolute;
  right: 31%;
  bottom: 68%;
  width: 33%;
  transition: all 0.2s;
`;

const PinkTop = styled.img`
  position: absolute;
  right: 39.2%;
  bottom: 76%;
  width: 16.5%;
  transition: all 0.2s;
`;

const OrangeBall = styled.img`
  position: absolute;
  right: 43.2%;
  bottom: 39%;
  width: 8%;
  transition: all 0.2s;
`;

const FloorBall = styled.img`
  position: absolute;
  right: 13%;
  bottom: 16%;
  width: 16%;
  transition: all 0.2s;
`;

const PinkFloorSquare = styled.img`
  position: absolute;
  left: 3%;
  bottom: 7%;
  width: 27%;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const WhiteFloorSquare = styled.img`
  position: absolute;
  left: -4%;
  bottom: 19%;
  width: 19%;
  transition: all 0.2s;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const BlurredSquare = styled.img`
  position: absolute;
  top: 13%;
  left: 11%;
  width: 20%;
  filter: blur(2px);
  transition: all 0.2s;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

interface Props {
  scrollPercent: number;
}

const HeroIllustration = ({ scrollPercent }: Props) => {
  const { isMobile } = useDevice();

  return (
    <StyledHeroIllustration>
      <Floor src={floor} />
      <LeftBlue src={leftBlue} />
      <RightYellow src={rightYellow} />
      <PurpleTop
        src={purpleTop}
        style={{
          transform: `translateY(calc(${scrollPercent} * -${
            isMobile ? 50 : 100
          }px))`,
        }}
      />
      <PinkTop
        src={pinkTop}
        style={{
          transform: `translateY(calc(${scrollPercent} * -${
            isMobile ? 100 : 200
          }px))`,
        }}
      />
      <OrangeBall
        src={orangeBall}
        style={{
          transform: `translateY(calc(${scrollPercent} * -${
            isMobile ? 100 : 200
          }px))`,
        }}
      />
      <FloorBall
        src={floorBall}
        style={{
          transform: `translateY(calc(${scrollPercent} * ${
            isMobile ? 50 : 100
          }px))`,
        }}
      />
      <PinkFloorSquare src={pinkFloorSquare} />
      <WhiteFloorSquare
        src={whiteFloorSquare}
        style={{
          transform: `translateY(calc(${scrollPercent} * -${
            isMobile ? 50 : 100
          }px))`,
        }}
      />
      <BlurredSquare
        src={whiteFloorSquare}
        style={{
          transform: `translateY(calc(${scrollPercent} * ${
            isMobile ? 100 : 200
          }px))`,
        }}
      />
    </StyledHeroIllustration>
  );
};

export default HeroIllustration;
