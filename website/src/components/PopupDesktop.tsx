import React from "react";
import styled from "styled-components";
import Social from "./Social";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
`;

const Pannel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  font-size: 30px;

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
      <ColoredPannel></ColoredPannel>
      <Pannel>
        <Items>
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
          <Social
            icon={<LinkedInIcon />}
            link={"https://www.linkedin.com/in/chasemanning/"}
            text={"Linked In"}
          />
        </Items>
      </Pannel>
      <Pannel>
        <Items>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
        </Items>
      </Pannel>
    </StyledPopupDesktop>
  );
};

export default PopupDesktop;
