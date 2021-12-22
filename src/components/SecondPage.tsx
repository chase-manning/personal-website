import styled from "styled-components";

const StyledSecondPage = styled.div`
  width: 100%;
  height: 100vh;
`;

interface Props {
  scroll: number;
}

const SecondPage = ({ scroll }: Props) => {
  return <StyledSecondPage>{scroll}</StyledSecondPage>;
};

export default SecondPage;
