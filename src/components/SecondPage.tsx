import React from "react";
import styled from "styled-components";

const StyledSecondPage = styled.div`
  width: 100%;
  height: 100vh;
`;

type Props = {
  scroll: number;
};

const SecondPage = (props: Props) => {
  return <StyledSecondPage>{props.scroll}</StyledSecondPage>;
};

export default SecondPage;
