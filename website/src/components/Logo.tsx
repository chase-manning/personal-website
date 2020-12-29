import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  font-size: 70px;
  font-weight: 700;
  line-height: 0;
  height: 40px;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  letter-spacing: -23px;
`;

const Text = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 8px;
  margin-left: 30px;
  display: flex;
`;

const Fullstop = styled.div`
  color: var(--yellow);
`;

const Left = styled.div`
  color: var(--pink);
`;

const Right = styled.div`
  color: var(--purple);
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Icon>
        <Left>{"<"}</Left>
        <Right>{"<"}</Right>
      </Icon>
      <Text>
        Chase<Fullstop>.</Fullstop>
      </Text>
    </StyledLogo>
  );
};

export default Logo;
