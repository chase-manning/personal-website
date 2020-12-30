import React from "react";
import styled from "styled-components";
import Social from "./Social";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import popupIllustration from "../assets/images/bg-header.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

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
      <ContentPannel>
        <ContentContainer>
          <Items>
            <Social
              icon={<GitHubIcon />}
              link={"https://github.com/chase-manning"}
              text={"GitHub"}
            />
            <Social
              icon={<LinkedInIcon />}
              link={"https://www.linkedin.com/in/chasemanning"}
              text={"Linked In"}
            />
            <Social
              icon={<TwitterIcon />}
              link={"https://twitter.com/ChaseManning_NZ"}
              text={"Twitter"}
            />
            <Social
              icon={<InstagramIcon />}
              link={"https://www.instagram.com/chase.manning.nz"}
              text={"Instagram"}
            />
          </Items>
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
