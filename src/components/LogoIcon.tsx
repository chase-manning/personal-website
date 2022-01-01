import styled from "styled-components";

const Icon = styled.div`
  display: flex;
  letter-spacing: ${(props: Props) => (props.large ? "-38px" : "-23px")};
  font-size: ${(props: Props) => (props.large ? "110px" : "70px")};
  line-height: ${(props: Props) => (props.large ? "80px" : "0")};
  font-weight: 700;
`;

const Left = styled.div`
  color: var(--pink);
`;

const Right = styled.div`
  color: ${(props: Props) => (props.primary ? "var(--purple)" : "var(--bg)")};
  transition: color 0.4s;
`;

interface Props {
  primary?: boolean;
  large?: boolean;
}

const LogoIcon = ({ primary, large }: Props) => {
  return (
    <Icon large={large}>
      <Left>{"<"}</Left>
      <Right primary={primary}>{"<"}</Right>
    </Icon>
  );
};

export default LogoIcon;
