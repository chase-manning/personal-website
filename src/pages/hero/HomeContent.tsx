import styled from "styled-components";
import LineHeader from "../../components/LineHeader";

const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;
  margin-left: 15%;
  @media only screen and (max-width: 1550px) {
    margin-left: 10%;
  }
  @media only screen and (max-width: 1450px) {
    margin-left: 5%;
  }
  @media only screen and (max-width: 1400px) {
    width: 400px;
  }
  @media only screen and (max-width: 639px) {
    width: 250px;
    margin-left: 0;
    margin-top: 50px;
  }
`;

const Header = styled.h2`
  font-weight: 600;

  font-size: 70px;
  line-height: 1.2;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
    line-height: 1.3;
  }
  @media only screen and (max-width: 639px) {
    font-size: 30px;
    line-height: 1.6;
  }
`;

const HomeContent = () => {
  return (
    <StyledHomeContent>
      <LineHeader text="Chase Manning" />
      <Header>Hi, I'm Chase, your Friendly Neighborhood Developer.</Header>
    </StyledHomeContent>
  );
};

export default HomeContent;
