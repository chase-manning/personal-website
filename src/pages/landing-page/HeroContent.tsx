import styled from "styled-components";

import LineHeader from "../../components/LineHeader";
import whiteSquare from "../../assets/hero/main-pic-9.png";

const StyledHeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 600px;
  margin-left: 15%;
  @media only screen and (max-width: 1550px) {
    margin-left: 10%;
  }
  @media only screen and (max-width: 1450px) {
    margin-left: 5%;
  }
  @media only screen and (max-width: 1400px) {
    width: 400px;
  }
  @media only screen and (max-width: 639px) {
    width: 250px;
    margin-left: 0;
    margin-top: 50px;
  }
`;

const Header = styled.h2`
  font-weight: 600;

  font-size: 70px;
  line-height: 1.2;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
    line-height: 1.3;
  }
  @media only screen and (max-width: 639px) {
    font-size: 30px;
    line-height: 1.6;
  }
`;

const WhiteSquare = styled.img`
  position: absolute;
  top: 66%;
  right: -46%;
  width: 150px;
  transition: all 0.2s;

  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

const BlurredSquare = styled.img`
  position: absolute;
  top: 20%;
  right: -18%;
  width: 100px;
  filter: blur(2px);
  transition: all 0.2s;

  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

interface Props {
  scrollPercent: number;
}

const HeroContent = ({ scrollPercent }: Props) => {
  return (
    <StyledHeroContent>
      <LineHeader text="Chase Manning" />
      <Header>Hi, I'm Chase, your friendly neighborhood developer.</Header>
      <WhiteSquare
        src={whiteSquare}
        style={{
          transform: `translateY(calc(${scrollPercent} * -100px))`,
        }}
      />
      <BlurredSquare
        src={whiteSquare}
        style={{
          transform: `translateY(calc(${scrollPercent} * 100px))`,
        }}
      />
    </StyledHeroContent>
  );
};

export default HeroContent;
