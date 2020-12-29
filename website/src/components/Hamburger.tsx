import React from "react";
import styled from "styled-components";

const StyledHamburger = styled.button`
  cursor: pointer;
`;

const Lines = styled.div`
  width: 30px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

type LineProps = {
  open: boolean;
};

const LineTop = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--bg);
  transform: ${(props: LineProps) =>
    props.open
      ? "rotate(45deg)  translateY(9px)"
      : "rotate(0deg)  translateY(0)"};
  transition: all 0.2s;
`;

const LineBottom = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--bg);
  transform: ${(props: LineProps) =>
    props.open
      ? "rotate(-45deg) translateY(-9px)"
      : "rotate(0deg) translateY(0)"};
  transition: all 0.2s;
`;

type Props = {
  open: boolean;
  click: () => void;
};

const Hamburger = (props: Props) => {
  return <div></div>;
  // return (
  //   <StyledHamburger onClick={() => props.click()}>
  //     <Lines>
  //       <LineTop open={props.open} />
  //       <LineBottom open={props.open} />
  //     </Lines>
  //   </StyledHamburger>
  // );
};

export default Hamburger;
