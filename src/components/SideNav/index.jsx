import logo from "../../assets/svg/logo.svg";
import leftArrow from "../../assets/svg/fi_chevrons-left.svg";

import { sideNav, logoImg, svgImg, logoSection } from "./SideNav.module.css";

export default function SideNav() {
  return (
    <nav className={sideNav}>
      <div className={logoSection}>
        <img src={logo} alt="activebeds" className={logoImg} />
        <img src={leftArrow} alt="activebeds" className={svgImg} />
      </div>
    </nav>
  );
}
