import NavItem from "../NavItem";
import Icon from "../Icon";

import logo from "../../assets/svg/logo.svg";
import leftArrow from "../../assets/svg/fi_chevrons-left.svg";
import userIcon from "../../assets/svg/fi_user.svg";

import { sideNav, top, logoSection, logoImg } from "./SideNav.module.css";

export default function SideNav() {
  return (
    <nav className={sideNav}>
      <div className={top}>
        <div className={logoSection}>
          <Icon src={logo} alt="activebeds" className={logoImg} />
          <Icon src={leftArrow} alt="arrow-left" />
        </div>
        <menu>
          <NavItem>
            <Icon src={userIcon} alt="user-icon" />
            <pan>User Management</pan>
          </NavItem>
          <NavItem>
            <Icon src={userIcon} alt="user-icon" />
            <pan>Booking</pan>
          </NavItem>
        </menu>
      </div>
      <div>bottom</div>
    </nav>
  );
}
