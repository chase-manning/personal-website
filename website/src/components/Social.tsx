import React from "react";
import styled from "styled-components";

const StyledSocial = styled.div`
  cursor: pointer;
  display: flex;
`;

const Icon = styled.div`
  margin-right: 20px;
  color: var(--purple);
  display: flex;
  align-items: center;
`;

const Text = styled.a`
  font-size: 18px;
  font-weight: 400;
`;

type Props = {
  icon: JSX.Element;
  text: string;
  link: string;
};

const Social = (props: Props) => {
  return (
    <StyledSocial>
      <Icon>{props.icon}</Icon>
      <Text href={props.link}>{props.text}</Text>
    </StyledSocial>
  );
};

export default Social;
