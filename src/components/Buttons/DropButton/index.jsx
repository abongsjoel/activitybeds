import Icon from "../../Icon";

import downArrow from "../../../assets/svg/fi_chevron-down.svg";

import { dropButton } from "./DropButton.module.css";

export default function DropButton({ label }) {
  return (
    <button className={dropButton}>
      <span>{label}</span>
      <Icon src={downArrow} />
    </button>
  );
}
