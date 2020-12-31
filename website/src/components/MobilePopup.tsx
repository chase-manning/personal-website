import React from "react";
import styled from "styled-components";
import illustration from "../assets/images/bg-header-mobile.png";
import Menus from "./Menus";
import Socials from "./Socials";

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
  background-color: var(--bg);
  transform: translateX(${(props: PopupProps) => (props.open ? "0" : "100%")});
  transition: transform 0.3s;
  padding: 30px;
`;

const Illustration = styled.img`
  width: 100%;
  position: absolute;
  bottom: -90px;
  right: 0;
`;

type Props = {
  open: boolean;
  close: () => void;
};

const MobilePopup = (props: Props) => {
  return (
    <StyledMobilePopup open={props.open}>
      <Menus close={() => props.close()} />
      <Socials />
      <Illustration src={illustration} />
    </StyledMobilePopup>
  );
};

export default MobilePopup;
