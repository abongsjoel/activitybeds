import NavItem from "../NavItem";
import Divider from "../Divider";
import { mainMenu, secMenu } from "../../constants";

import { menu } from "./Menu.module.css";

export default function Menu() {
  return (
    <menu className={menu}>
      {mainMenu.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
      <Divider />
      {secMenu.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
    </menu>
  );
}
