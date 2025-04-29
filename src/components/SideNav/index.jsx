import Icon from "../Icon";
import Menu from "../Menu";
import Divider from "../Divider";

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

export default function SideNav({ isExpanded, toggleExpan, sideBarStyles }) {
  return (
    <nav className={`${sideNav} ${sideBarStyles}`}>
      <section className={top}>
        <div className={logoSection}>
          {isExpanded && (
            <Icon src={logo} alt="activebeds" className={logoImg} />
          )}

          <button onClick={toggleExpan}>
            <Icon src={leftArrow} alt="arrow-left" />
          </button>
        </div>
        {isExpanded && <Menu />}
      </section>
      <section>
        <Divider />
        <div className={logout}>
          {isExpanded && <span>Log Out</span>}
          <Icon src={login} alt="Login Icon" />
        </div>
      </section>
    </nav>
  );
}
