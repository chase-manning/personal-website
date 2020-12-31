import React from "react";
import styled from "styled-components";

const StyledSocial = styled.a`
  cursor: pointer;
  display: flex;
  margin: 15px 0;
`;

const Icon = styled.div`
  margin-right: 40px;
  display: flex;
  align-items: center;

  color: var(--purple);
  @media only screen and (max-width: 639px) {
    color: var(--sub);
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media only screen and (max-width: 639px) {
    color: var(--sub);
  }
`;

type Props = {
  icon: JSX.Element;
  text: string;
  link: string;
};

const Social = (props: Props) => {
  return (
    <StyledSocial href={props.link} target={"_blank"}>
      <Icon>{props.icon}</Icon>
      <Text>{props.text}</Text>
    </StyledSocial>
  );
};

export default Social;
