import { Fragment } from "react";

import {
  table,
  pageWrapper,
  contentWrapper,
  tableScroll,
} from "./Table.module.css";

export default function Table({ data, config, keyFn }) {
  const renderdHeaders = config.map((column) => {
    console.log({ column });
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td key={column.label}>{column.render(rowData)}</td>;
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <div className={pageWrapper}>
      <div className={contentWrapper}>
        <div className={tableScroll}>
          <table className={table}>
            <colgroup>
              {config.map((con) => (
                <col style={{ width: con.size ?? "100px" }} />
              ))}
            </colgroup>
            <thead>
              <tr>{renderdHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
          </table>
        </div>
      </div>
      <div>15</div>
    </div>
  );
}
