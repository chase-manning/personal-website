import React from "react";
import styled from "styled-components";
import illustration from "../assets/images/bg-header-mobile.png";

type PopupProps = {
  open: boolean;
};

const StyledMobilePopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: calc(100% - 95px);
  width: 100%;
  margin-top: 95px;
  background-color: red;
  transform: translateX(${(props: PopupProps) => (props.open ? "0" : "100%")});
  transition: transform 0.3s;
`;

const Illustration = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
`;

type Props = {
  open: boolean;
  close: () => void;
};

const MobilePopup = (props: Props) => {
  return (
    <StyledMobilePopup open={props.open}>
      <Illustration src={illustration} />
    </StyledMobilePopup>
  );
};

export default MobilePopup;
