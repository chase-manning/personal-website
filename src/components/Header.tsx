import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import PopupDesktop from "./PopupDesktop";
import MobilePopup from "./MobilePopup";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const mobile = window.innerWidth <= 639;

  return (
    <StyledHeader>
      {mobile ? (
        <MobilePopup open={popupOpen} close={() => setPopupOpen(false)} />
      ) : (
        <PopupDesktop open={popupOpen} close={() => setPopupOpen(false)} />
      )}
      <Logo primary={mobile || !popupOpen} />
      <Hamburger open={popupOpen} click={() => setPopupOpen(!popupOpen)} />
    </StyledHeader>
  );
};

export default Header;
