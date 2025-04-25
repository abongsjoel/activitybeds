import Button from "../../components/Button";
import Icon from "../../components/Icon";

import bookIcon from "../../assets/svg/book.svg";
import plusIcon from "../../assets/svg/fi_plus.svg";

import {
  booking,
  titleContainer,
  title,
  header,
} from "./BookingPage.module.css";

export default function Booking() {
  return (
    <section className={booking}>
      <header className={header}>
        <div className={titleContainer}>
          <Button>
            <Icon src={bookIcon} alt="Booking Icon" />
          </Button>
          <span className={title}>Booking</span>
        </div>
        <Button primary>
          <Icon src={plusIcon} alt="Booking Icon" />
        </Button>
      </header>
    </section>
  );
}
