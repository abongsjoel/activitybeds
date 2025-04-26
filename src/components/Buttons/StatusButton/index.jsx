import Icon from "../../Icon";

import downArrow from "../../../assets/svg/fi_chevron-down-bright.svg";

import {
  buttonContainer,
  confirmedStyle,
  cancelledStyle,
  voucheredStyle,
  travelledStyle,
} from "./StatusButton.module.css";

export default function StatusButton({ label }) {
  const statusStyle =
    label === "Confirmed"
      ? confirmedStyle
      : label === "Cancelled"
      ? cancelledStyle
      : label === "Vouchered"
      ? voucheredStyle
      : label === "Travelled"
      ? travelledStyle
      : "";

  return (
    <button className={`${buttonContainer} ${statusStyle}`}>
      <span>{label}</span>
      {(label === "Confirmed" || label === "Vouchered") && (
        <Icon src={downArrow} alt="arrow-down" />
      )}
    </button>
  );
}
