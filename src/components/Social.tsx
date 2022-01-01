import styled from "styled-components";

const StyledSocial = styled.a`
  cursor: pointer;
  display: flex;

  margin: 15px 0;
  @media only screen and (max-width: 1400px) {
    margin: 12px 0;
  }
  @media only screen and (max-width: 639px) {
    margin: 6px 0;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  color: var(--purple);
  font-size: 24px;
  margin-right: 40px;
  @media only screen and (max-width: 639px) {
    color: var(--sub);
    font-size: 19px;
    margin-right: 15px;
  }
`;

const Text = styled.p`
  font-weight: 400;

  font-size: 18px;
  @media only screen and (max-width: 639px) {
    color: var(--sub);
    font-size: 14px;
  }
`;

interface Props {
  icon: JSX.Element;
  text: string;
  link: string;
}

const Social = ({ icon, text, link }: Props) => {
  return (
    <StyledSocial href={link} target="_blank" rel="noopener noreferrer">
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </StyledSocial>
  );
};

export default Social;
