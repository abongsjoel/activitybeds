import { Fragment } from "react";

import Icon from "../Icon";

import rightIcon from "../../assets/svg/chevron-right.svg";
import leftIcon from "../../assets/svg/chevron-left.svg";

import {
  table,
  pageWrapper,
  contentWrapper,
  tableScroll,
  tableFooter,
  displayNumber,
  tableNav,
  activePage,
} from "./Table.module.css";

export default function Table({ data, config, keyFn }) {
  const renderdHeaders = config.map((column) => {
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
                <col
                  key={con.label}
                  style={{ width: con.size ?? "100px", textAlign: "center" }}
                />
              ))}
            </colgroup>
            <thead>
              <tr>{renderdHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
          </table>
        </div>
      </div>
      <div className={tableFooter}>
        <div>
          <span className={displayNumber}>15</span> out of {data.length} results
        </div>
        <div className={tableNav}>
          <Icon src={leftIcon} alt="Left Icon" />
          <button className={activePage}>1</button> 2 3
          <Icon src={rightIcon} alt="Right Icon" />
        </div>
      </div>
    </div>
  );
}
