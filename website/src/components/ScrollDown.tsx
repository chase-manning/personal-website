import React from "react";
import styled from "styled-components";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const StyledScrollDown = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-left: 15%;
  align-items: center;
`;

const Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: var(--bg);
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 20px;
`;

const ScrollDown = () => {
  return (
    <StyledScrollDown>
      <Circle>
        <UnfoldMoreIcon fontSize={"large"} />
      </Circle>
      {/* <Text>Scroll down</Text> */}
      <Text>Welcome</Text>
    </StyledScrollDown>
  );
};

export default ScrollDown;
