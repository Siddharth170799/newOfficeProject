import React from "react";

import Form from "../components/Form";
import Sidebar from "../components/SideBar";
import "../TransactionReport.css";
import TransactionTable from "../components/TransactionTable";

const TransactionReport = () => {
  return (
    <div className="container">
      <Sidebar />
      <Form />
      <TransactionTable />
    </div>
  );
};

export default TransactionReport;
