import PageHeader from "../../components/PageHeader";
import DropButton from "../../components/Buttons/DropButton";
import Button from "../../components/Buttons/Button";
import Icon from "../../components/Icon";
import Table from "../../components/Table";

import bookIcon from "../../assets/svg/book.svg";
import filterIcon from "../../assets/svg/filter.svg";
import nonApi from "../../assets/svg/non_api.svg";
import boatIcon from "../../assets/svg/sailing-boat.svg";
import carIcon from "../../assets/svg/car.svg";

import {
  booking,
  pageContent,
  filters,
  applyButton,
  filterButton,
  bookingStatus,
  statusA,
  statusM,
  colgroupContainer,
  source,
  bookingId,
  paxName,
  bookingType,
} from "./BookingPage.module.css";
import StatusButton from "../../components/Buttons/StatusButton";
import { data } from "../../constants";

export default function Booking() {
  const config = [
    {
      label: "Booking Status",
      render: (booking) => (
        <span
          className={`${bookingStatus} ${
            booking.status === "A" ? statusA : statusM
          }`}
        >
          {booking.status}
        </span>
      ),
      size: "71px",
    },
    {
      label: "Agent",
      render: (booking) => (
        <div className={colgroupContainer}>
          <span>{booking.agent.title}</span>
          <span>{booking.agent.subTitle}</span>
        </div>
      ),
      size: "200px",
    },
    {
      label: "Booking Source",
      render: (booking) =>
        booking.source === "API" ? (
          <span className={source}>API</span>
        ) : (
          <Icon src={nonApi} />
        ),
      size: "71px",
    },
    {
      label: "Booking ID",
      render: (booking) => <span className={bookingId}>{booking.id}</span>,
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
      render: (booking) => (
        <div className={`${colgroupContainer} ${paxName}`}>
          <div>{booking.pax_name.name}</div>
          <div>{booking.pax_name.more}</div>
        </div>
      ),
      size: "133px",
    },
    {
      label: "Product Type",
      render: (booking) => (
        <div className={bookingType}>
          <Icon
            src={booking.type === "boat" ? boatIcon : carIcon}
            alt={booking.type}
          />
        </div>
      ),
      size: "101px",
    },
    {
      label: "Status",
      render: (booking) => <StatusButton label={booking.book_status} />,
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
