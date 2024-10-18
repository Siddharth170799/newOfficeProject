import React, { useEffect, useState, useMemo } from "react";
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
  phoneNumber,
}) => {
  const [data, setData] = useState(transactions);
  const [display, setDisplay] = useState(null);




  
  // Memoizing the date range filtered data
  const dateFilteredData = useMemo(() => {
    if (fromDate && toDate) {
      const fromDatetoToDateTransactions = data.filter(
        (item) =>
          item.transactionDate >= fromDate && item.transactionDate <= toDate
      );
      setDisplay(fromDatetoToDateTransactions);
      return fromDatetoToDateTransactions;
    }
  }, [fromDate, toDate]);

  // Memoizing the status filtered data
  const statusFilteredData = useMemo(() => {
    if (statusType) {
      const statusTypeDetails = data.filter(
        (item) => item.transactionStatus === statusType
      );
      setDisplay(statusTypeDetails);
      return statusTypeDetails;
    }
  }, [statusType]);

  // Memoizing the transaction type filtered data
  const transactionTypeFilteredData = useMemo(() => {
    if (transactionType) {
      const transactionTypeDetails = data.filter(
        (item) => item.PayType === transactionType
      );
      setDisplay(transactionTypeDetails);
      return transactionTypeDetails;
    }
  }, [transactionType]);

  ////memoize the tode fromdate data and the statustype data///

  const datesAndStatusTypeData = useMemo(() => {
    if (fromDate && toDate && statusType) {
      const filteredData = dateFilteredData?.filter(
        (item) => item.transactionStatus == statusType
      );

      setDisplay(filteredData);
      return filteredData;
    }
  }, [statusType, fromDate, toDate]);

  ////memioze the statustype and paytype////
  const statusTypeAndPayTypeData = useMemo(() => {
    if (statusType && transactionType) {
      const statusTypeAndPaytypeFilteredData = statusFilteredData.filter(
        (item) =>
          item.transactionStatus == statusType &&
          item.PayType == transactionType
      );
      setDisplay(statusTypeAndPaytypeFilteredData);
      return statusTypeAndPaytypeFilteredData;
    }
  }, [statusType, transactionType]);

  //memeoize the todate from dates and paytype data////

  const toDatesFromdatesAndPayTypeData = useMemo(() => {
    if (toDate && fromDate && transactionType) {
      const toDatesFromdatesPayTypeFilteredData = dateFilteredData.filter(
        (item) =>
          item.transactionDate >= fromDate &&
          item.transactionDate <= toDate &&
          item.PayType == transactionType
      );
      setDisplay(toDatesFromdatesPayTypeFilteredData);
      return toDatesFromdatesPayTypeFilteredData;
    }
  }, [toDate, fromDate, transactionType]);

  ////memeioze all the three datas////

  const completeFilteredData = useMemo(() => {
    if (toDate && fromDate && transactionType && statusType) {
      const toDatesFromdatesPayTypeStatusTypeFilteredData =
        dateFilteredData.filter(
          (item) =>
            item.transactionDate >= fromDate &&
            item.transactionDate <= toDate &&
            item.PayType == transactionType &&
            item.transactionStatus == statusType
        );
      setDisplay(toDatesFromdatesPayTypeStatusTypeFilteredData);
      return toDatesFromdatesPayTypeStatusTypeFilteredData;
    }
  }, [toDate, fromDate, transactionType, statusType]);

  const PhoneNumberData = useMemo(() => {
    if (phoneNumber) {
      const filteredPhoneNumberData = data.filter((item) =>
        item.phoneNumber.includes(phoneNumber)
      );
      setDisplay(filteredPhoneNumberData);
      return filteredPhoneNumberData;
    }
  }, [phoneNumber]);

  const PhoneNumberDataAndPayTypeData = useMemo(() => {
    if (phoneNumber && transactionType) {
      const filteredphoneNumberAndPayTypeData = PhoneNumberData.filter(
        (item) =>
          item.PayType == transactionType &&
          item.phoneNumber.includes(phoneNumber)
      );
      setDisplay(filteredphoneNumberAndPayTypeData);
      return filteredphoneNumberAndPayTypeData;
    }
  }, [phoneNumber, transactionType]);
  const PhoneNumberDataAndStatusTypeData = useMemo(() => {
    if (phoneNumber && statusType) {
      const filteredphoneNumberAndStatusTypeData = PhoneNumberData.filter(
        (item) =>
          item.transactionStatus == statusType &&
          item.phoneNumber.includes(phoneNumber)
      );
      setDisplay(filteredphoneNumberAndStatusTypeData);
      return filteredphoneNumberAndStatusTypeData;
    }
  }, [phoneNumber, statusType]);
  const PhoneNumberDataAndDatesData = useMemo(() => {
    if (phoneNumber && fromDate && toDate) {
      const filteredphoneNumberAndDatesData = PhoneNumberData.filter(
        (item) =>
          item.transactionDate >= fromDate &&
          item.transactionDate <= toDate &&
          item.phoneNumber.includes(phoneNumber)
      );
      setDisplay(filteredphoneNumberAndDatesData);
      return filteredphoneNumberAndDatesData;
    }
  }, [phoneNumber, fromDate, toDate]);

  const CompleteFilteredData = useMemo(() => {
    if (phoneNumber && fromDate && toDate) {
      const filteredphoneNumberAndDatesData = data.filter(
        (item) =>
          item.transactionDate >= fromDate &&
          item.transactionDate <= toDate &&
          item.phoneNumber.includes(phoneNumber) &&
          item.transactionStatus == statusType &&
          item.PayType == transactionType
      );
      setDisplay(filteredphoneNumberAndDatesData);
      return filteredphoneNumberAndDatesData;
    }
  }, [phoneNumber, fromDate, toDate, statusType, transactionType]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Transaction Status</TableCell>
              <TableCell>Phone Number</TableCell>
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
              ? display.map((transaction) => (
                  <TableRow key={transaction.transactionId}>
                    <TableCell>{transaction.transactionId}</TableCell>
                    <TableCell>{transaction.transactionStatus}</TableCell>
                    <TableCell>{transaction.phoneNumber}</TableCell>{" "}
                    {/* No parseInt */}
                    <TableCell>{transaction.bankName}</TableCell>
                    <TableCell>{transaction.ifscCode}</TableCell>
                    <TableCell>{transaction.branchName}</TableCell>
                    <TableCell>{transaction.transactionDate}</TableCell>
                    <TableCell>${transaction?.amount?.toFixed(2)}</TableCell>
                    <TableCell>{transaction.beneficiaryName}</TableCell>
                    <TableCell>{transaction.remarks}</TableCell>
                    <TableCell>{transaction.PayType}</TableCell>
                  </TableRow>
                ))
              : transactions.map((transaction) => (
                  <TableRow key={transaction.transactionId}>
                    <TableCell>{transaction.transactionId}</TableCell>
                    <TableCell>{transaction.transactionStatus}</TableCell>
                    <TableCell>{transaction.phoneNumber}</TableCell>{" "}
                    {/* Corrected */}
                    <TableCell>{transaction.bankName}</TableCell>
                    <TableCell>{transaction.ifscCode}</TableCell>
                    <TableCell>{transaction.branchName}</TableCell>
                    <TableCell>{transaction.transactionDate}</TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>{transaction.beneficiaryName}</TableCell>
                    <TableCell>{transaction.remarks}</TableCell>
                    <TableCell>{transaction.PayType}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionTable;
