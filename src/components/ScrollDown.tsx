import styled from "styled-components";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const StyledScrollDown = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  margin-left: 15%;
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
  @media only screen and (max-width: 639px) {
    height: 55px;
    width: 55px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.08);
  }
`;

const Text = styled.div`
  margin-left: 20px;

  @media only screen and (max-width: 639px) {
    display: none;
  }
`;

const ScrollDown = () => {
  const mobile = window.innerWidth <= 639;

  return (
    <StyledScrollDown>
      <Circle>
        {mobile ? <UnfoldMoreIcon /> : <UnfoldMoreIcon fontSize={"large"} />}
      </Circle>
      <Text>Welcome</Text>
    </StyledScrollDown>
  );
};

export default ScrollDown;
