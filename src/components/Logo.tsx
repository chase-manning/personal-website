import styled from "styled-components";
import LogoIcon from "./LogoIcon";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  height: 40px;
`;

const Text = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 8px;
  margin-left: 30px;
  display: flex;
  color: ${(props: Props) => (props.primary ? "var(--main)" : "var(--bg)")};
  transition: color 0.4s;
`;

const Fullstop = styled.div`
  color: var(--orange);
`;

interface Props {
  primary?: boolean;
}

const Logo = ({ primary }: Props) => {
  return (
    <StyledLogo>
      <LogoIcon primary={primary} />
      <Text primary={primary}>
        Chase<Fullstop>.</Fullstop>
      </Text>
    </StyledLogo>
  );
};

export default Logo;
