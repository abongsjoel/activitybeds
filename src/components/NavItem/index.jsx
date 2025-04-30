import { useContext } from "react";
import { useSelector } from "react-redux";

import NavigationContext from "../../context/Navigation";
import Icon from "../Icon";
import { selectSidebarExpanded } from "../../redux/sidebarSlice";
import downArrow from "../../assets/svg/fi_chevron-down.svg";
import Link from "../Link/LInk";

import {
  navContainer,
  navItem,
  active,
  expanded,
  collapsed,
} from "./NavItem.module.css";

export default function NavItem({ title, route, icon, dropDown }) {
  const { currentPath } = useContext(NavigationContext);

  const isActive = route === currentPath;

  const isExpanded = useSelector(selectSidebarExpanded);

  const activeStyles = isActive ? active : "";
  const barToggleStyles = isExpanded ? expanded : collapsed;

  return (
    <li className={`${navContainer} ${activeStyles} ${barToggleStyles}`}>
      <Link className={navItem} to={route}>
        <Icon src={icon} alt={title} />
        {isExpanded && <span>{title}</span>}
      </Link>
      {dropDown && isExpanded && <Icon src={downArrow} alt="arrow-down" />}
    </li>
  );
}
