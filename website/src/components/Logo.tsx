import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  font-size: 70px;
  font-weight: 700;
  line-height: 0;
  height: 40px;
  align-items: center;
  z-index: 1;
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
  color: ${(props: Props) => (props.primary ? "var(--main)" : "var(--bg)")};
  transition: color 0.4s;
`;

const Fullstop = styled.div`
  color: var(--orange);
`;

const Left = styled.div`
  color: var(--pink);
`;

const Right = styled.div`
  color: ${(props: Props) => (props.primary ? "var(--purple)" : "var(--bg)")};
  transition: color 0.4s;
`;

type Props = {
  primary: boolean;
};

const Logo = (props: Props) => {
  return (
    <StyledLogo>
      <Icon>
        <Left>{"<"}</Left>
        <Right primary={props.primary}>{"<"}</Right>
      </Icon>
      <Text primary={props.primary}>
        Chase<Fullstop>.</Fullstop>
      </Text>
    </StyledLogo>
  );
};

export default Logo;
