import Icon from "../Icon";
import Menu from "../Menu";
import Divider from "../Divider";
import NavItem from "../NavItem";

import logo from "../../assets/svg/logo.svg";
import leftArrow from "../../assets/svg/fi_chevrons-left.svg";
import login from "../../assets/svg/log-in.svg";

import {
  sideNav,
  top,
  logoSection,
  logoImg,
  logout,
} from "./SideNav.module.css";

export default function SideNav() {
  return (
    <nav className={sideNav}>
      <section className={top}>
        <div className={logoSection}>
          <Icon src={logo} alt="activebeds" className={logoImg} />
          <Icon src={leftArrow} alt="arrow-left" />
        </div>
        <Menu />
      </section>
      <section>
        <Divider />
        <div className={logout}>
          <span>Log Out</span>
          <Icon src={login} alt="Login Icon" />
        </div>
      </section>
    </nav>
  );
}
