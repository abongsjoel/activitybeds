import PageHeader from "../../components/PageHeader";
import Icon from "../../components/Icon";

import bookIcon from "../../assets/svg/book.svg";

import { booking, pageContent } from "./BookingPage.module.css";
import DropButton from "../../components/Buttons/DropButton";

export default function Booking() {
  return (
    <section className={booking}>
      <PageHeader pageTitle="Booking" icon={bookIcon} />
      <main className={pageContent}>
        <section>
          <DropButton />
        </section>
      </main>
    </section>
  );
}
