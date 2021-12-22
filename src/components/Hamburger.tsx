import styled from "styled-components";

const StyledHamburger = styled.button`
  cursor: pointer;
  z-index: 1;
  position: relative;
`;

const Lines = styled.div`
  width: 30px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

interface LineProps {
  open: boolean;
}

const LineTop = styled.div`
  width: 100%;
  height: 2px;
  transform: ${(props: LineProps) =>
    props.open
      ? "rotate(45deg)  translate(4.5px,4.5px)"
      : "rotate(0deg)  translateX(0)"};
  transition: all 0.2s;

  background-color: var(--bg);
  @media only screen and (max-width: 639px) {
    background-color: var(--main);
  }
`;

const LineBottom = styled.div`
  width: 100%;
  height: 2px;
  transform: ${(props: LineProps) =>
    props.open
      ? "rotate(-45deg) translate(4.5px,-4.5px)"
      : "rotate(0deg) translateX(0)"};
  transition: all 0.2s;

  background-color: var(--bg);
  @media only screen and (max-width: 639px) {
    background-color: var(--main);
  }
`;

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--purple);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: ${(props: LineProps) => (props.open ? "1" : "0")};
  transition: opacity 0.2s;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

interface Props {
  open: boolean;
  click: () => void;
}

const Hamburger = ({ open, click }: Props) => {
  return (
    <StyledHamburger onClick={() => click()}>
      <Background open={open} />
      <Lines>
        <LineTop open={open} />
        <LineBottom open={open} />
      </Lines>
    </StyledHamburger>
  );
};

export default Hamburger;
