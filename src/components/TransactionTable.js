import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import transactions from "../data/data";

const TransactionTable = ({
  statusType,
  transactionType,
  fromDate,
  toDate,
}) => {
  const [data, setData] = useState(transactions);
  const [display, setDisplay] = useState(null);

  function filteredData() {
    const filteredByDate = data.filter(
      (item) =>
        item.transactionDate >= fromDate && item.transactionDate <= toDate
    );
    setDisplay(filteredByDate);

    if (filteredByDate.length > 0 && statusType) {
      const filteredByStatus = filteredByDate.filter(
        (item) => item.transactionStatus == statusType
      );
      setDisplay(filteredByStatus);
    }

    if (statusType) {
      const filteredStatusOnly = data.filter(
        (item) => item.transactionStatus == statusType
      );
      setDisplay(filteredStatusOnly);
    }

    if (fromDate && toDate && statusType && transactionType) {
      const filteredByAll = data.filter(
        (item) =>
          item.transactionDate >= fromDate &&
          item.transactionDate <= toDate &&
          item.transactionStatus == statusType &&
          item.PayType == transactionType
      );
      setDisplay(filteredByAll);
    } else if (transactionType && statusType) {
      const filteredByStatusAndType = data.filter(
        (item) =>
          item.PayType == transactionType &&
          item.transactionStatus == statusType
      );
      setDisplay(filteredByStatusAndType);
    } else if (transactionType && fromDate && toDate) {
      const filteredByTypeAndDate = data.filter(
        (item) =>
          item.PayType == transactionType &&
          item.transactionDate >= fromDate &&
          item.transactionDate <= toDate
      );
      setDisplay(filteredByTypeAndDate);
    } else if (transactionType) {
      const filteredByTypeOnly = data.filter(
        (item) => item.PayType == transactionType
      );
      setDisplay(filteredByTypeOnly);
    }
  }

  useEffect(() => {
    if (fromDate || transactionType || toDate || statusType) {
      filteredData();
    }
  }, [statusType, transactionType, fromDate, toDate]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Transaction Status</TableCell>
              <TableCell>Account Number</TableCell>
              <TableCell>Bank Name</TableCell>
              <TableCell>IFSC Code</TableCell>
              <TableCell>Branch Name</TableCell>
              <TableCell>Transaction Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Beneficiary Name</TableCell>
              <TableCell>Remarks</TableCell>
              <TableCell>PayType</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {display
              ? display?.map((transaction) => (
                  <TableRow key={transaction.transactionId}>
                    <TableCell>{transaction.transactionId}</TableCell>
                    <TableCell>{transaction.transactionStatus}</TableCell>
                    <TableCell>{transaction.accountNumber}</TableCell>
                    <TableCell>{transaction.bankName}</TableCell>
                    <TableCell>{transaction.ifscCode}</TableCell>
                    <TableCell>{transaction.branchName}</TableCell>
                    <TableCell>{transaction.transactionDate}</TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>{" "}
                    {/* Formatting amount */}
                    <TableCell>{transaction.beneficiaryName}</TableCell>
                    <TableCell>{transaction.remarks}</TableCell>
                    <TableCell>{transaction.PayType}</TableCell>{" "}
                  </TableRow>
                ))
              : transactions?.map((transaction) => (
                  <TableRow key={transaction.transactionId}>
                    <TableCell>{transaction.transactionId}</TableCell>
                    <TableCell>{transaction.transactionStatus}</TableCell>
                    <TableCell>{transaction.accountNumber}</TableCell>
                    <TableCell>{transaction.bankName}</TableCell>
                    <TableCell>{transaction.ifscCode}</TableCell>
                    <TableCell>{transaction.branchName}</TableCell>
                    <TableCell>{transaction.transactionDate}</TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>{" "}
                    <TableCell>{transaction.beneficiaryName}</TableCell>
                    <TableCell>{transaction.remarks}</TableCell>
                    <TableCell>{transaction.PayType}</TableCell>{" "}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionTable;
