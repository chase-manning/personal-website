import React from "react";
import styled from "styled-components";

const StyledFirstPageContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;
  margin-left: 15%;
  @media only screen and (max-width: 639px) {
    width: 250px;
    margin-left: 0;
    margin-top: 50px;
  }
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SubHeaderLine = styled.div`
  width: 50px;
  border-bottom: solid 2px var(--purple);
  margin-right: 20px;
`;

const SubHeaderText = styled.div`
  font-weight: 600;
  color: var(--purple);

  font-size: 20px;
  @media only screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

const Header = styled.div`
  font-weight: 600;

  font-size: 70px;
  line-height: 1.2;
  @media only screen and (max-width: 639px) {
    font-size: 30px;
    line-height: 1.6;
  }
`;

const FirstPageContent = () => {
  return (
    <StyledFirstPageContent>
      <SubHeader>
        <SubHeaderLine />
        <SubHeaderText>Chase Manning</SubHeaderText>
      </SubHeader>
      <Header>Hello, my name's Chase. I'm a Software Developer.</Header>
    </StyledFirstPageContent>
  );
};

export default FirstPageContent;
