import React from "react";
import styled from "styled-components";

const StyledMenus = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.a`
  cursor: pointer;
  font-size: 72px;
  font-weight: 600;
  transition: color 0.25s;
  line-height: 1;
  margin-bottom: 30px;

  :hover {
    color: var(--purple);
  }
`;

type Props = {
  close: () => void;
};

const Menus = (props: Props) => {
  return (
    <StyledMenus>
      <MenuItem onClick={() => props.close()}>Home</MenuItem>
    </StyledMenus>
  );
};

export default Menus;
