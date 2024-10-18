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
  clearStatus,
}) => {
  const [data, setData] = useState(transactions);
  const [display, setDisplay] = useState(null);

  function filteredData() {
    const details3 = data.filter(
      (item) =>
        item.transactionDate >= fromDate && item.transactionDate <= toDate
    );
    setDisplay(details3);

    if (details3.length > 0 && statusType) {
      const details = details3.filter(
        (item) => item.transactionStatus == statusType
      );
      setDisplay(details);
    }
    if(statusType){
      const details = data.filter((item)=>  item.transactionStatus == statusType) 
      setDisplay(details)
    }

    if (fromDate && toDate && statusType && transactionType) {
      const details5 = data.filter(
        (item) =>
          item.transactionDate >= fromDate &&
          item.transactionDate <= toDate &&
          item.transactionStatus == statusType &&
          item.PayType == transactionType
      );
      setDisplay(details5);
    } else if (transactionType && statusType) {
      const details4 = data.filter(
        (item) =>
          item.PayType == transactionType &&
          item.transactionStatus == statusType
      );
      setDisplay(details4);
    } else if (transactionType && fromDate && toDate) {
      const details4 = data.filter(
        (item) =>
          item.PayType == transactionType &&
          item.transactionDate >= fromDate &&
          item.transactionDate <= toDate
      );
      setDisplay(details4);
    } else if (transactionType) {
      const details4 = data.filter((item) => item.PayType == transactionType);
      setDisplay(details4);
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
