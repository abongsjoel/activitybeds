import Icon from "../Icon";
import downArrow from "../../assets/svg/fi_chevron-down.svg";

import { navContainer, navItem } from "./NavItem.module.css";

export default function NavItem({ children }) {
  return (
    <li className={navContainer}>
      <span className={navItem}>{children}</span>
      <Icon src={downArrow} alt="arrow-down" />
    </li>
  );
}
