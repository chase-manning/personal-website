import React from "react";
import styled from "styled-components";
import floor from "../assets/images/main-pic-6.png";
import leftBlue from "../assets/images/main-pic-3.png";
import rightYellow from "../assets/images/main-pic-4.png";
import purpleTop from "../assets/images/main-pic-2.png";
import pinkTop from "../assets/images/main-pic-1.png";
import orangeBall from "../assets/images/main-pic-5.png";
import floorBall from "../assets/images/main-pic-7.png";

const StyledFirstPageIllustration = styled.div`
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
  transform: translateY(${(props: Props) => props.scrollPercent * -100 + "px"});
  transition: all 0.2s;
`;

const PinkTop = styled.img`
  position: absolute;
  right: 39.2%;
  bottom: 76%;
  width: 16.5%;
  transform: translateY(${(props: Props) => props.scrollPercent * -200 + "px"});
  transition: all 0.2s;
`;

const OrangeBall = styled.img`
  position: absolute;
  right: 43.2%;
  bottom: 39%;
  width: 8%;
  transform: translateY(${(props: Props) => props.scrollPercent * -200 + "px"});
  transition: all 0.2s;
`;

const FloorBall = styled.img`
  position: absolute;
  right: 13%;
  bottom: 16%;
  width: 16%;
  transform: translateY(${(props: Props) => props.scrollPercent * 100 + "px"});
  transition: all 0.2s;
`;

type Props = {
  scrollPercent: number;
};

const FirstPageIllustration = (props: Props) => {
  return (
    <StyledFirstPageIllustration>
      <Floor src={floor} />
      <LeftBlue src={leftBlue} />
      <RightYellow src={rightYellow} />
      <PurpleTop src={purpleTop} scrollPercent={props.scrollPercent} />
      <PinkTop src={pinkTop} scrollPercent={props.scrollPercent} />
      <OrangeBall src={orangeBall} scrollPercent={props.scrollPercent} />
      <FloorBall src={floorBall} scrollPercent={props.scrollPercent} />
    </StyledFirstPageIllustration>
  );
};

export default FirstPageIllustration;
