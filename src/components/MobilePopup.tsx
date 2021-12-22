import styled from "styled-components";
import illustration from "../assets/backgrounds/bg-header-mobile.png";
import Menus from "./Menus";
import Socials from "./Socials";

interface PopupProps {
  open: boolean;
}

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
  z-index: 1;
`;

const Illustration = styled.img`
  width: 100%;
  position: absolute;
  bottom: -90px;
  right: 0;
`;

interface Props {
  open: boolean;
  close: () => void;
}

const MobilePopup = ({ open, close }: Props) => {
  return (
    <StyledMobilePopup open={open}>
      <Menus close={() => close()} />
      <Socials />
      <Illustration src={illustration} />
    </StyledMobilePopup>
  );
};

export default MobilePopup;
