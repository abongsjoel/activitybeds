import Icon from "../Icon";
import downArrow from "../../assets/svg/fi_chevron-down.svg";

import { navContainer, navItem, active } from "./NavItem.module.css";

export default function NavItem({ title, icon, dropDown, isActive }) {
  const activeStyles = isActive ? active : "";

  return (
    <li className={`${navContainer} ${activeStyles}`}>
      <span className={navItem}>
        <Icon src={icon} alt={title} />
        <span>{title}</span>
      </span>
      {dropDown && <Icon src={downArrow} alt="arrow-down" />}
    </li>
  );
}
