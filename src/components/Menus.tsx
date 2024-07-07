import styled from "styled-components";
import { Link } from "react-scroll";
import menuItems, { MenuItemType } from "../data/menu-items";

const StyledMenus = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(Link)`
  cursor: pointer;
  transition: color 0.25s;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 30px;
  z-index: 1;

  :hover {
    color: var(--purple);
  }

  font-size: 72px;
  @media only screen and (max-width: 639px) {
    font-size: 32px;
  }
`;

interface Props {
  close: () => void;
}

const Menus = ({ close }: Props) => {
  return (
    <StyledMenus>
      {menuItems.map((menuItem: MenuItemType) => (
        <MenuItem
          key={menuItem.value}
          to={menuItem.value}
          spy
          smooth
          duration={2000}
          onClick={() => close()}
        >
          {menuItem.label}
        </MenuItem>
      ))}
    </StyledMenus>
  );
};

export default Menus;
