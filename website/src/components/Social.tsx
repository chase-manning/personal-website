import React from "react";
import styled from "styled-components";

const StyledSocial = styled.a`
  cursor: pointer;
  display: flex;

  margin: 15px 0;
  @media only screen and (max-width: 639px) {
    margin: 7px 0;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  color: var(--purple);
  font-size: 18px;
  margin-right: 40px;
  @media only screen and (max-width: 639px) {
    color: var(--sub);
    font-size: 19px;
    margin-right: 15px;
  }
`;

const Text = styled.p`
  font-weight: 400;

  font-size: 18px;
  @media only screen and (max-width: 639px) {
    color: var(--sub);
    font-size: 14px;
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
