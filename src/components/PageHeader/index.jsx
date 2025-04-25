import Button from "../Buttons/Button";
import Icon from "../Icon";

import plusIcon from "../../assets/svg/fi_plus.svg";

import { titleContainer, title, header } from "./PageHeader.module.css";

export default function PageHeader({ pageTitle, icon }) {
  return (
    <header className={header}>
      <div className={titleContainer}>
        <Button>
          <Icon src={icon} alt={pageTitle} />
        </Button>
        <span className={title}>{pageTitle}</span>
      </div>
      <Button primary>
        <Icon src={plusIcon} alt="Add Icon" />
      </Button>
    </header>
  );
}
