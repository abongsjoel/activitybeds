import NavItem from "../NavItem";
import Divider from "../Divider";

import userIcon from "../../assets/svg/fi_user.svg";
import bookIcon from "../../assets/svg/book_light.svg";
import userCheck from "../../assets/svg/fi_user-check.svg";
import box from "../../assets/svg/fi_box.svg";
import setting from "../../assets/svg/setting.svg";
import helpCircle from "../../assets/svg/fi_help-circle.svg";

import { menu } from "./Menu.module.css";

const MAIN_MENU = [
  {
    title: "User Management",
    route: "/management",
    icon: userIcon,
    dropDown: true,
  },
  {
    title: "Booking",
    route: "/booking",
    icon: bookIcon,
  },
  {
    title: "Agent",
    route: "/agent",
    icon: userCheck,
  },
  {
    title: "Supplier",
    route: "/supplier",
    icon: box,
  },
  {
    title: "Product",
    route: "/product",
    icon: box,
    dropDown: true,
  },
];

const SEC_MENU = [
  {
    title: "Settings",
    route: "/settings",
    icon: setting,
  },
  {
    title: "Help",
    route: "/help",
    icon: helpCircle,
  },
];

export default function Menu() {
  return (
    <menu className={menu}>
      {MAIN_MENU.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
      <Divider />
      {SEC_MENU.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
    </menu>
  );
}
