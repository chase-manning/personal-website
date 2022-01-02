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
  return (
    <StyledApp>
      <HomePage />
      <AboutMePage />
      <WhatIDoPage />
      <PortfolioPage />
      <Footer />
    </StyledApp>
  );
};

export default App;
