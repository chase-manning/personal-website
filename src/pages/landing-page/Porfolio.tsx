import { useRef, useState } from "react";
import styled from "styled-components";
import LineHeader from "../../components/LineHeader";
import Tabs from "../../components/Tabs";

import getScrollPercent from "../../utils/scroll-percent";
import portfolioTabs, { TabType } from "../../data/portfolio-tabs";
import Project, { ProjectType } from "./Project";
import whiteSquare from "../../assets/hero/main-pic-9.png";
import pinkSquare from "../../assets/hero/main-pic-8.png";
import FavouriteQuote from "./FavouriteQuote";
import SayHello from "./SayHello";
import { useScroll } from "../../hooks/use-scroll";

const StyledPortfolio = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;

  background: radial-gradient(
    75.22% 75.22% at 20.49% 12.79%,
    #ffffff 0%,
    rgba(228, 231, 233, 0.502295) 100%
  );
  @media only screen and (max-width: 639px) {
    background: var(--bg);
  }

  padding: 120px calc(15% + 60px);
  @media only screen and (max-width: 1550px) {
    padding: 120px calc(10% + 60px);
  }
  @media only screen and (max-width: 1450px) {
    padding-left: calc(5% + 35px);
    padding-right: calc(5% + 35px);
  }
  @media only screen and (max-width: 639px) {
    padding: 60px 30px;
  }
`;

const PinkSquare = styled.img`
  position: absolute;
  top: 450px;
  left: -29%;
  width: 68%;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 570px;
`;

const WhiteSquare = styled.img`
  position: absolute;
  right: -240px;
  bottom: -120px;
  width: 300px;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const Bold = styled.p`
  position: relative;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;

  font-size: 72px;
  margin-bottom: 80px;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 639px) {
    font-size: 42px;
    margin-bottom: 30px;
  }
`;

const Projects = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(2, 1fr);
  margin-top: 80px;
  grid-gap: 32px;
  @media only screen and (max-width: 639px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 40px;
    grid-gap: 0;
  }
`;

const Portfolio = () => {
  const scroll = useScroll();
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledPortfolio ref={pageRef} id="portfolio-scroll">
      <PinkSquare
        src={pinkSquare}
        style={{
          transform: `translateY(calc(${scrollPercent} * 400px))`,
        }}
      />
      <Content>
        <WhiteSquare src={whiteSquare} />
        <LineHeader text="Portfolio" />
        <Bold>Some things I've worked on.</Bold>
      </Content>
      <Tabs
        activeIndex={activeIndex}
        options={portfolioTabs.map((tab: TabType) => tab.label)}
        setActiveIndex={(index: number) => setActiveIndex(index)}
      />
      <Projects>
        {portfolioTabs[activeIndex].projects.map((project: ProjectType) => (
          <Project key={project.name} project={project} />
        ))}
      </Projects>
      <FavouriteQuote />
      <SayHello />
    </StyledPortfolio>
  );
};

export default Portfolio;
