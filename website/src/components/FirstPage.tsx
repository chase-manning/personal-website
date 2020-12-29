import React from "react";
import styled from "styled-components";
import FirstPageContent from "./FirstPageContent";
import Header from "./Header";
import ScrollDown from "./ScrollDown";
import bg from "../assets/images/bg-main.jpg";
import FirstPageIllustration from "./FirstPageIllustration";

const StyledFirstPage = styled.div`
  position: relative;

  height: 100vh;
  @media only screen and (max-width: 639px) {
    height: 118vh;

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
  position: absolute;
  bottom: 0;

  right: 0;
  width: 50vw;
  height: 50vw;
  @media only screen and (max-width: 639px) {
    right: -10vw;
    width: 125vw;
    height: 125vw;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 60px;
  height: 100%;
  @media only screen and (max-width: 639px) {
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
      <Illustration>
        <FirstPageIllustration scrollPercent={scrollPercent} />
      </Illustration>
      <Content>
        <Header />
        <FirstPageContent />
        <ScrollDown />
      </Content>
    </StyledFirstPage>
  );
};

export default FirstPage;
