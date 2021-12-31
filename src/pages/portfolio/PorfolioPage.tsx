import { useRef } from "react";
import styled from "styled-components";

import getScrollPercent from "../../utils/scroll-percent";

const StyledThirdPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  padding: 60px 0;
  padding-left: calc(15% + 60px);
  @media only screen and (max-width: 1550px) {
    padding-left: calc(10% + 60px);
  }
  @media only screen and (max-width: 1450px) {
    padding-left: calc(5% + 60px);
  }
  @media only screen and (max-width: 639px) {
    padding-left: 0;
  }
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 570px;
`;

interface Props {
  scroll: number;
}

const PortfolioPage = ({ scroll }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledThirdPage ref={pageRef}>
      <Content>{scrollPercent}</Content>
    </StyledThirdPage>
  );
};

export default PortfolioPage;
