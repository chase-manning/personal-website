import React from "react";
import styled from "styled-components";
import FirstPageContent from "./FirstPageContent";
import Header from "./Header";
import ScrollDown from "./ScrollDown";
import bg from "../assets/images/bg-main.jpg";
import FirstPageIllustration from "./FirstPageIllustration";

const StyledFirstPage = styled.div`
  height: 100vh;
  position: relative;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

const Illustration = styled.div`
  width: 50vw;
  height: 50vw;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
