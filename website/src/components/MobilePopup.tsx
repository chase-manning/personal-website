import React from "react";
import styled from "styled-components";

type PopupProps = {
  open: boolean;
};

const StyledMobilePopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin-top: 100px;
  background-color: red;
  transform: translateX(${(props: PopupProps) => (props.open ? "0" : "100%")});
  transition: transform 0.3s;
`;

type Props = {
  open: boolean;
  close: () => void;
};

const MobilePopup = (props: Props) => {
  return <StyledMobilePopup open={props.open}>meow</StyledMobilePopup>;
};

export default MobilePopup;
