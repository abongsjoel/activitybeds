import PageHeader from "../../components/PageHeader";
import DropButton from "../../components/Buttons/DropButton";
import Button from "../../components/Buttons/Button";
import Icon from "../../components/Icon";
import Table from "../../components/Table";

import bookIcon from "../../assets/svg/book.svg";
import filterIcon from "../../assets/svg/filter.svg";

import {
  booking,
  pageContent,
  filters,
  applyButton,
  filterButton,
} from "./BookingPage.module.css";

export default function Booking() {
  const data = [
    {
      status: "M",
      argent: "ABC Pvt. Ltd",
      source: "API",
      id: "AB_US_001",
      date: "03-02-2025",
      travel_date: "03-02-2025",
      pax_name: "Rahul Sharma",
      type: "ship",
      book_status: "Confirmed",
      city: "Melbourne",
    },
    {
      status: "A",
      argent: "ABC Pvt. Ltd",
      source: "API",
      id: "AB_US_002",
      date: "03-02-2025",
      travel_date: "03-02-2025",
      pax_name: "Rahul Sharma",
      type: "ship",
      book_status: "Cancelled",
      city: "Melbourne",
    },
  ];

  const config = [
    {
      label: "Booking Status",
      render: (booking) => booking.status,
      size: "71px",
    },
    {
      label: "Argent",
      render: (booking) => <div>{booking.argent}</div>,
      size: "200px",
    },
    {
      label: "Booking Source",
      render: (booking) => booking.source,
      size: "71px",
    },
    {
      label: "Booking ID",
      render: (booking) => booking.id,
      size: "88px",
    },
    {
      label: "Booking Date",
      render: (booking) => booking.date,
      size: "101px",
    },
    {
      label: "Travel Date",
      render: (booking) => booking.travel_date,
      size: "101px",
    },
    {
      label: "Lead Pax Name",
      render: (booking) => booking.pax_name,
      size: "133px",
    },
    {
      label: "Product Type",
      render: (booking) => booking.type,
      size: "101px",
    },
    {
      label: " Status",
      render: (booking) => booking.book_status,
      size: "123px",
    },
    {
      label: "Product city",
      render: (booking) => booking.city,
      size: "96px",
    },
  ];

  const keyFn = (booking) => {
    return booking.id;
  };

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
        <section>
          <Table data={data} config={config} keyFn={keyFn} />
        </section>
      </main>
    </section>
  );
}
