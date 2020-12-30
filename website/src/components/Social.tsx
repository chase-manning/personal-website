import React from "react";
import styled from "styled-components";

const StyledSocial = styled.div`
  cursor: pointer;
  display: flex;
  margin: 15px 0;
`;

const Icon = styled.div`
  margin-right: 40px;
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
      <Text href={props.link} target={"_blank"}>
        {props.text}
      </Text>
    </StyledSocial>
  );
};

export default Social;
