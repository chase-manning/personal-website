import React from "react";
import styled from "styled-components";

const StyledSocial = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin-right: 20px;
  color: var(--purple);
`;

const Text = styled.a`
  font-size: 14px;
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
