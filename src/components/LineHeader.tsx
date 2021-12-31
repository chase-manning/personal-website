import styled from "styled-components";

const StyledLineHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

interface HeaderProps {
  pink?: boolean;
}

const Line = styled.div`
  width: 50px;
  border-bottom: solid 2px;
  border-color: ${(props: HeaderProps) =>
    props.pink ? "var(--pink)" : "var(--purple)"};
  margin-right: 20px;
`;

const Header = styled.h1`
  font-weight: 600;
  color: ${(props: HeaderProps) =>
    props.pink ? "var(--pink)" : "var(--purple)"};

  font-size: 20px;
  @media only screen and (max-width: 1400px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 639px) {
    font-size: 16px;
  }
`;

interface Props {
  text: string;
  pink?: boolean;
}

const LineHeader = ({ text, pink }: Props) => {
  return (
    <StyledLineHeader>
      <Line pink={pink} />
      <Header pink={pink}>{text}</Header>
    </StyledLineHeader>
  );
};

export default LineHeader;
