import { useRef } from "react";
import styled from "styled-components";

import whiteCube from "../../assets/hero/main-pic-9.png";
import getScrollPercent from "../../utils/scroll-percent";

const StyledFavouriteQuote = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 180px 0;
  @media only screen and (max-width: 1400px) {
    padding: 160px 0;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 1000px;
  @media only screen and (max-width: 1400px) {
    width: 700px;
  }
`;

const WhiteCube = styled.img`
  position: absolute;
  opacity: 0.6;

  width: 800px;
  left: 7%;
  top: -300%;
  @media only screen and (max-width: 1400px) {
    width: 650px;
    left: 0%;
    top: -320%;
  }
`;

const Header = styled.div`
  position: relative;
  color: var(--purple);
  font-weight: 600;

  font-size: 20px;
  @media only screen and (max-width: 1400px) {
    font-size: 16px;
  }
`;

const Bold = styled.div`
  position: relative;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;

  font-size: 72px;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
  }
`;

interface Props {
  scroll: number;
}

const FavouriteQuote = ({ scroll }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledFavouriteQuote ref={pageRef}>
      <Content>
        <WhiteCube
          src={whiteCube}
          style={{
            transform: `translateY(calc(${scrollPercent} * 300px))`,
          }}
        />
        <Header>My favourite quote</Header>
        <Bold>"The best way to predict the future is to create it."</Bold>
      </Content>
    </StyledFavouriteQuote>
  );
};

export default FavouriteQuote;
