import PageHeader from "../../components/PageHeader";
import DropButton from "../../components/Buttons/DropButton";

import bookIcon from "../../assets/svg/book.svg";
import filterIcon from "../../assets/svg/filter.svg";

import {
  booking,
  pageContent,
  filters,
  applyButton,
  filterButton,
} from "./BookingPage.module.css";
import Button from "../../components/Buttons/Button";
import Icon from "../../components/Icon";

export default function Booking() {
  return (
    <section className={booking}>
      <PageHeader pageTitle="Booking" icon={bookIcon} />
      <main className={pageContent}>
        <section className={filters}>
          <DropButton label="Argent..." />
          <DropButton label="Supplier..." />
          <DropButton label="Booking ID..." />
          <DropButton label="Lead Pax Name..." />
          <DropButton label="Booking Status" />
          <Button primary className={applyButton}>
            Apply
          </Button>
          <Button className={`${applyButton} ${filterButton}`}>
            <Icon src={filterIcon} />
            Filters
          </Button>
        </section>
      </main>
    </section>
  );
}
