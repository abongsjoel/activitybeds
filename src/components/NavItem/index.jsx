import { useSelector } from "react-redux";

import Icon from "../Icon";
import { selectSidebarExpanded } from "../../redux/sidebarSlice";
import downArrow from "../../assets/svg/fi_chevron-down.svg";

import {
  navContainer,
  navItem,
  active,
  expanded,
  collapsed,
} from "./NavItem.module.css";

export default function NavItem({ title, icon, dropDown, isActive }) {
  const isExpanded = useSelector(selectSidebarExpanded);

  const activeStyles = isActive ? active : "";
  const barToggleStyles = isExpanded ? expanded : collapsed;

  return (
    <li className={`${navContainer} ${activeStyles} ${barToggleStyles}`}>
      <span className={navItem}>
        <Icon src={icon} alt={title} />
        {isExpanded && <span>{title}</span>}
      </span>
      {dropDown && isExpanded && <Icon src={downArrow} alt="arrow-down" />}
    </li>
  );
}
