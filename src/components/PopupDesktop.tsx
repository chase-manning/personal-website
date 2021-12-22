import styled from "styled-components";
import popupIllustration from "../assets/backgrounds/bg-header.png";
import Menus from "./Menus";
import Socials from "./Socials";

interface PopupProps {
  open: boolean;
}

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
  z-index: 1;
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

interface Props {
  open: boolean;
  close: () => void;
}

const PopupDesktop = ({ open, close }: Props) => {
  return (
    <StyledPopupDesktop open={open}>
      <ColoredPannel>
        <PopupIllustration src={popupIllustration} />
      </ColoredPannel>
      <ContentPannel>
        <ContentContainer>
          <Socials />
          <Menus close={() => close()} />
        </ContentContainer>
      </ContentPannel>
    </StyledPopupDesktop>
  );
};

export default PopupDesktop;
