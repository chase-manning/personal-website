import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import HeroPage from "../pages/hero/HeroPage";
import PortfolioPage from "../pages/portfolio/PorfolioPage";
import SecondPage from "../pages/second/SecondPage";
import ThirdPage from "../pages/third/ThirdPage";

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
      <HeroPage scroll={scroll} />
      <SecondPage scroll={scroll} />
      <ThirdPage scroll={scroll} />
      <PortfolioPage scroll={scroll} />
    </StyledApp>
  );
};

export default App;
