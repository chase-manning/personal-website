import React from "react";
import styled from "styled-components";
import Social from "./Social";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import popupIllustration from "../assets/images/bg-header.png";

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
  display: flex;
  justify-content: space-between;
`;

const ColoredPannel = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  display: flex;
  align-items: center;
`;

const PopupIllustration = styled.img`
  height: 100%;
`;

const MiddlePannel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightPannel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 72px;
  font-weight: 600;

  :hover {
    color: var(--purple);
  }

  transition: color 0.25s;
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
      <MiddlePannel>
        <Items>
          <Social
            icon={<LinkedInIcon color={"primary"} />}
            link={"https://www.linkedin.com/in/chasemanning/"}
            text={"Linked In"}
          />
          <Social
            icon={<LinkedInIcon />}
            link={"https://www.linkedin.com/in/chasemanning/"}
            text={"Linked In"}
          />
          <Social
            icon={<LinkedInIcon />}
            link={"https://www.linkedin.com/in/chasemanning/"}
            text={"Linked In"}
          />
          <Social
            icon={<LinkedInIcon />}
            link={"https://www.linkedin.com/in/chasemanning/"}
            text={"Linked In"}
          />
        </Items>
      </MiddlePannel>
      <RightPannel>
        <Items>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
        </Items>
      </RightPannel>
    </StyledPopupDesktop>
  );
};

export default PopupDesktop;
