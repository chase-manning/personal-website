import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import HomePage from "../pages/home/HomePage";
import PortfolioPage from "../pages/portfolio/PorfolioPage";
import AboutMePage from "../pages/about-me/AboutMePage";
import WhatIDoPage from "../pages/what-i-do/WhatIDoPage";
import Footer from "./Footer";

const StyledApp = styled.div`
  width: 100%;
`;

const App = () => {
  const [scroll, setScroll] = useState(0);

  useLayoutEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <StyledApp>
      <HomePage scroll={scroll} />
      <AboutMePage scroll={scroll} />
      <WhatIDoPage scroll={scroll} />
      <PortfolioPage scroll={scroll} />
      <Footer scroll={scroll} />
    </StyledApp>
  );
};

export default App;
