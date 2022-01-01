import { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import menuItems, { MenuItemType } from "../data/menu-items";
import LogoIcon from "./LogoIcon";
import cube from "../assets/greeble/dark-blue-cube.png";
import getScrollPercent from "../utils/scroll-percent";

const StyledFooter = styled.div`
  width: 100%;
  padding: 0 calc(15% + 60px);
  background: var(--dark-bg);

  @media only screen and (max-width: 1550px) {
    padding: 0 calc(10% + 60px);
  }
  @media only screen and (max-width: 1450px) {
    padding: 0 calc(5% + 60px);
  }
  @media only screen and (max-width: 639px) {
    padding-left: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 113px;
  @media only screen and (max-width: 1400px) {
    margin-bottom: 90px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 670px;
  @media only screen and (max-width: 1400px) {
    max-width: 580px;
  }
`;

const Bold = styled.p`
  position: relative;
  line-height: 1.16667;
  letter-spacing: -0.5px;
  font-weight: 600;
  color: var(--bg);

  font-size: 72px;
  @media only screen and (max-width: 1400px) {
    font-size: 42px;
  }
`;

const Sub = styled.p`
  position: relative;
  line-height: 1.5;
  letter-spacing: -0.15px;
  font-weight: 600;
  color: var(--pink);

  font-size: 32px;
  margin-top: 50px;
  @media only screen and (max-width: 1400px) {
    font-size: 20px;
    margin-top: 30px;
  }
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const NavItem = styled(Link)`
  color: var(--bg);
  line-height: 1.44444;
  font-weight: 500;
  cursor: pointer;

  opacity: 1;
  transition: all 0.3s;
  :hover {
    opacity: 0.4;
  }

  font-size: 18px;
  margin-bottom: 23px;
  @media only screen and (max-width: 1400px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid rgba(216, 216, 216, 0.2);
  padding-bottom: 67px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 58px;
  @media only screen and (max-width: 1400px) {
    padding-top: 45px;
  }
`;

const DesignBy = styled.div`
  line-height: 1.5;
  font-weight: 500;
  color: var(--bg);

  font-size: 16px;
  @media only screen and (max-width: 1400px) {
    font-size: 14px;
  }
`;

const DesignedByLink = styled.a`
  line-height: 1.5;
  font-weight: 500;
  color: var(--bg);
  text-decoration: underline;

  font-size: 16px;
  @media only screen and (max-width: 1400px) {
    font-size: 14px;
  }
`;

const BackToTop = styled(Link)`
  line-height: 1.5;
  font-weight: 500;
  color: var(--bg);
  cursor: pointer;

  font-size: 16px;
  @media only screen and (max-width: 1400px) {
    font-size: 14px;
  }
`;

const LeftCube = styled.img`
  position: absolute;
  width: 145px;
  top: -80px;
  left: -50px;
`;

const RightCube = styled.img`
  position: absolute;
  width: 60px;
  right: 80px;

  bottom: -170px;
  @media only screen and (max-width: 1400px) {
    bottom: -140px;
  }
`;

interface Props {
  scroll: number;
}

const Footer = ({ scroll }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollPercent = getScrollPercent(pageRef.current, scroll);

  return (
    <StyledFooter ref={pageRef}>
      <Content>
        <TopSection>
          <LogoIcon large />
          <TextContainer>
            <LeftCube
              src={cube}
              style={{
                transform: `translateY(calc(${scrollPercent} * 200px))`,
              }}
            />
            <RightCube
              src={cube}
              style={{
                transform: `translateY(calc(${scrollPercent} * -400px))`,
              }}
            />
            <Bold>Thanks so much for taking the time to view my site.</Bold>
            <Sub>Don't hesitate to reach out and say hi.</Sub>
          </TextContainer>
          <NavItems>
            {menuItems.map((menuItem: MenuItemType) => (
              <NavItem
                key={menuItem.value}
                to={menuItem.value}
                spy
                smooth
                duration={2000}
              >
                {menuItem.label}
              </NavItem>
            ))}
          </NavItems>
        </TopSection>
        <BottomSection>
          <DesignBy>
            Design by:{" "}
            <DesignedByLink
              href="https://dribbble.com/tranmautritam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tran Mau Tri Tam
            </DesignedByLink>
          </DesignBy>
          <BackToTop to="home-scroll" spy smooth duration={2000}>
            Back to top
          </BackToTop>
        </BottomSection>
      </Content>
    </StyledFooter>
  );
};

export default Footer;
