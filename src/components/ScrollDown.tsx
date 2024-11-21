import styled from "styled-components";
import { Link } from "react-scroll";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

interface ScrollDownProps {
  white?: boolean;
  $spacing?: boolean;
}

const StyledScrollDown = styled(Link)`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  cursor: pointer;

  margin-left: ${(props: ScrollDownProps) => (props.$spacing ? "15%" : "0")};
  @media only screen and (max-width: 1550px) {
    margin-left: ${(props: ScrollDownProps) => (props.$spacing ? "10%" : "0")};
  }
  @media only screen and (max-width: 1450px) {
    margin-left: ${(props: ScrollDownProps) => (props.$spacing ? "5%" : "0")};
  }
  @media only screen and (max-width: 639px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  width: 80px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.06);
  @media only screen and (max-width: 1400px) {
    height: 55px;
    width: 55px;
  }
  @media only screen and (max-width: 639px) {
    height: 55px;
    width: 55px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.08);
  }
`;

const Text = styled.div`
  margin-left: 20px;
  color: ${(props: ScrollDownProps) =>
    props.white ? "var(--bg)" : "var(--main)"};

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

interface Props {
  target: string;
  white?: boolean;
  spacing?: boolean;
}

const ScrollDown = ({ target, white, spacing }: Props) => {
  const mobile = window.innerWidth <= 639;

  return (
    <StyledScrollDown to={target} spy smooth duration={2000} $spacing={spacing}>
      <Circle>
        {mobile ? <UnfoldMoreIcon /> : <UnfoldMoreIcon fontSize="large" />}
      </Circle>
      <Text white={white}>Scroll down</Text>
    </StyledScrollDown>
  );
};

export default ScrollDown;
