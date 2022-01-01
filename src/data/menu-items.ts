export interface MenuItemType {
  label: string;
  value: string;
}

const menuItems: MenuItemType[] = [
  {
    label: "Home",
    value: "home-scroll",
  },
  {
    label: "About me",
    value: "about-me-scroll",
  },
  {
    label: "What I do",
    value: "what-i-do-scroll",
  },
  {
    label: "Portfolio",
    value: "portfolio-scroll",
  },
];

export default menuItems;
