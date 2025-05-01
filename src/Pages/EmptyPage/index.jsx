import Page from "../../components/Page";

import bookIcon from "../../assets/svg/book.svg";

import { emptyPage } from "./EmptyPage.module.css";

export default function EmptyPage({ title }) {
  return (
    <Page title={title ?? "Empty Page"} icon={bookIcon}>
      <div className={emptyPage}>Sorry this page is still to be developed</div>
    </Page>
  );
}
