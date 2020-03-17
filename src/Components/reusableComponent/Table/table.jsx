import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({ columns, values }) => {
  return (
    <React.Fragment>
      <TableHeader columns={columns} />
      <TableBody values={values} />
    </React.Fragment>
  );
};

export default Table;
