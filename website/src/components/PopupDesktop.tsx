import React from "react";
import styled from "styled-components";
import popupIllustration from "../assets/images/bg-header.png";
import Socials from "./Socials";

const StyledPopupDesktop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  display: ${(props: Props) => (props.open ? "flex" : "none")};
  opacity: ${(props: Props) => (props.open ? "1" : "0")};
  transition: opacity 0.4s;
  justify-content: space-between;
`;

const ColoredPannel = styled.div`
  width: 27%;
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
  width: 73%;
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Items = styled.div`
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
  open: boolean;
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
          <Items>
            <MenuItem>Home</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Home</MenuItem>
          </Items>
        </ContentContainer>
      </ContentPannel>
    </StyledPopupDesktop>
  );
};

export default PopupDesktop;
