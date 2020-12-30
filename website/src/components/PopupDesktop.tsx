import React from "react";
import styled from "styled-components";

const StyledPopupDesktop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  opacity: ${(props: Props) => (props.open ? "1" : "0")};
  z-index: ${(props: Props) => (props.open ? "0" : "-100")};
  transition: opacity 0.4s;
`;

type Props = {
  open: boolean;
};

const PopupDesktop = (props: Props) => {
  return <StyledPopupDesktop open={props.open}></StyledPopupDesktop>;
};

export default PopupDesktop;
