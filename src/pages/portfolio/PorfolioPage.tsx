import { useRef, useState } from "react";
import styled from "styled-components";
import LineHeader from "../../components/LineHeader";
import Tabs from "../../components/Tabs";

import getScrollPercent from "../../utils/scroll-percent";
import Project, { ProjectType } from "./Project";
import backd from "../../assets/projects/backd.jpg";
import uwucrew from "../../assets/projects/uwucrew.jpg";

interface TabType {
  label: string;
  projects: ProjectType[];
}

const TABS: TabType[] = [
  {
    label: "Web3",
    projects: [
      {
        name: "Backd Fund",
        description:
          "The DeFi protocol for increasing the yield and utility of your crypto assets with reactive liquidity.",
        image: backd,
      },
      {
        name: "Uwucrew",
        description:
          "uwucrew is a generative collection of 9,670 avatar NFTs inspired by anime and pop culture",
        image: uwucrew,
      },
    ],
  },
  {
    label: "Web2",
    projects: [
      {
        name: "Uwucrew",
        description:
          "uwucrew is a generative collection of 9670 avatars inspired by anime and pop culture, aiming to be both inclusive and expressive.",
        image: "uwucrew",
      },
    ],
  },
  {
    label: "Other",
    projects: [
      {
        name: "",
        description: "",
        image: "",
      },
    ],
  },
];

const StyledPortfolioPage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;

  background: radial-gradient(
    75.22% 75.22% at 20.49% 12.79%,
    #ffffff 0%,
    rgba(228, 231, 233, 0.502295) 100%
  );

  padding: 120px calc(15% + 60px);
  @media only screen and (max-width: 1550px) {
    padding: 120px calc(10% + 60px);
  }
  @media only screen and (max-width: 1450px) {
    padding: 120px calc(5% + 60px);
  }
  @media only screen and (max-width: 639px) {
    padding-left: 0;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 570px;
`;

const Bold = styled.p`
  position: relative;
  font-size: 72px;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;
  margin-bottom: 80px;
`;

const Projects = styled.div`
  display: grid;
  margin-top: 80px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  width: 100%;
`;
interface Props {
  scroll: number;
}

const PortfolioPage = ({ scroll }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledPortfolioPage ref={pageRef}>
      <Content>
        <LineHeader text="Portfolio" />
        <Bold>Some things I've worked on.</Bold>
      </Content>
      <Tabs
        activeIndex={activeIndex}
        options={TABS.map((tab: TabType) => tab.label)}
        setActiveIndex={(index: number) => setActiveIndex(index)}
      />
      <Projects>
        {TABS[activeIndex].projects.map((project: ProjectType) => (
          <Project project={project} />
        ))}
      </Projects>
    </StyledPortfolioPage>
  );
};

export default PortfolioPage;
