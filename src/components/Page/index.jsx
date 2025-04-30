import PageHeader from "../PageHeader";

import { page, pageContent } from "./Page.module.css";

export default function Page({ children, title, icon }) {
  return (
    <section className={page}>
      <PageHeader pageTitle={title} icon={icon} />
      <main className={pageContent}>{children}</main>
    </section>
  );
}
