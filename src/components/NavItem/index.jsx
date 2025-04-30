import { useContext } from "react";
import { useSelector } from "react-redux";

import NavigationContext from "../../context/Navigation";
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

export default function NavItem({ title, route, icon, dropDown, isActive }) {
  const { navigate } = useContext(NavigationContext);

  const isExpanded = useSelector(selectSidebarExpanded);

  const activeStyles = isActive ? active : "";
  const barToggleStyles = isExpanded ? expanded : collapsed;

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <li className={`${navContainer} ${activeStyles} ${barToggleStyles}`}>
      <button className={navItem} onClick={() => handleNavigation(route)}>
        <Icon src={icon} alt={title} />
        {isExpanded && <span>{title}</span>}
      </button>
      {dropDown && isExpanded && <Icon src={downArrow} alt="arrow-down" />}
    </li>
  );
}
