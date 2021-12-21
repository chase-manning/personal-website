import React from "react";
import styled from "styled-components";
import popupIllustration from "../assets/images/bg-header.png";
import Menus from "./Menus";
import Socials from "./Socials";

type PopupProps = {
  open: boolean;
};

const StyledPopupDesktop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  display: ${(props: PopupProps) => (props.open ? "flex" : "none")};
  opacity: ${(props: PopupProps) => (props.open ? "1" : "0")};
  transition: opacity 0.4s;
  justify-content: space-between;
`;

const ColoredPannel = styled.div`
  width: 25%;
  height: 100%;
  background-color: var(--dark);
  display: flex;
  align-items: center;
`;

const PopupIllustration = styled.img`
  height: 100%;
`;

const ContentPannel = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

type Props = {
  open: boolean;
  close: () => void;
};

const PopupDesktop = (props: Props) => {
  return (
    <StyledPopupDesktop open={props.open}>
      <ColoredPannel>
        <PopupIllustration src={popupIllustration} />
      </ColoredPannel>
      <ContentPannel>
        <ContentContainer>
          <Socials />
          <Menus close={() => props.close()} />
        </ContentContainer>
      </ContentPannel>
    </StyledPopupDesktop>
  );
};

export default PopupDesktop;
