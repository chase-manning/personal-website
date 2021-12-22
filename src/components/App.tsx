import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import FirstPage from "../pages/hero/HeroPage";
import SecondPage from "./SecondPage";

const StyledApp = styled.div`
  width: 100%;
`;

const App = () => {
  const [scroll, setScroll] = useState(0);

  useLayoutEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledApp>
      <FirstPage scroll={scroll} />
      <SecondPage scroll={scroll} />
    </StyledApp>
  );
};

export default App;
