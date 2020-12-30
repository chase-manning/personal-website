import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import PopupDesktop from "./PopupDesktop";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <StyledHeader>
      <PopupDesktop open={popupOpen} />
      <Logo />
      <Hamburger open={popupOpen} click={() => setPopupOpen(!popupOpen)} />
    </StyledHeader>
  );
};

export default Header;
