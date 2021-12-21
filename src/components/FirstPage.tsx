import React from "react";
import styled from "styled-components";
import FirstPageContent from "./FirstPageContent";
import Header from "./Header";
import ScrollDown from "./ScrollDown";
import bg from "../assets/images/bg-main.jpg";
import FirstPageIllustration from "./FirstPageIllustration";

const StyledFirstPage = styled.div`
  position: relative;
  overflow: hidden;

  height: 100vh;
  @media only screen and (max-width: 639px) {
    height: auto;

    ::before {
      content: "";
      position: absolute;
      top: 420px;
      right: 0;
      z-index: -1;
      width: 226px;
      height: 370px;
      background: #1b1b87;
      -webkit-clip-path: polygon(0 120px, 100% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 120px, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const Illustration = styled.div`
  bottom: 0;
  right: 0;

  position: absolute;
  width: 50vw;
  height: 50vw;
  @media only screen and (max-width: 639px) {
    position: relative;
    width: 125vw;
    height: 125vw;
    transform: translateX(-15vw);
  }
`;

const Content = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  padding: 60px;
  height: 100%;
  @media only screen and (max-width: 639px) {
    position: relative;
    padding: 30px;
    height: auto;
  }
`;

type Props = {
  scroll: number;
};

const FirstPage = (props: Props) => {
  const scrollPercent = props.scroll / window.innerHeight;

  return (
    <StyledFirstPage>
      <Background src={bg} />
      <Content>
        <Header />
        <FirstPageContent />
        <ScrollDown />
      </Content>
      <Illustration>
        <FirstPageIllustration scrollPercent={scrollPercent} />
      </Illustration>
    </StyledFirstPage>
  );
};

export default FirstPage;
