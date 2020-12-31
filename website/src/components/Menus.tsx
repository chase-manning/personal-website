import React from "react";
import styled from "styled-components";

const StyledMenus = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.a`
  cursor: pointer;
  transition: color 0.25s;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 30px;

  :hover {
    color: var(--purple);
  }

  font-size: 72px;
  @media only screen and (max-width: 639px) {
    font-size: 32px;
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
