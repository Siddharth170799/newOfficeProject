import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import InputBar from "./Input";
import DateRangePicker from "./DatePicker";
import UniversalDropdown from "./UniversalDropdown";
import TransactionTable from "./TransactionTable";
import dayjs from "dayjs";
import { handlePhoneNumberValidation } from "../validations/validations";
const Form = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [statusType, setStatusType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    setPhoneNumberError(handlePhoneNumberValidation(event.target.value));
  };
  const handleFromDate = (date) => {
    setFromDate(date);
  };

  const handleToDate = (date) => {
    setToDate(date);
  };

  const handleDropdownChangeTransactionType = (event) => {
    setTransactionType(event.target.value);
  };

  const handleDropdownChangeStatusType = (event) => {
    setStatusType(event.target.value);
  };

  const fromDateFormatted = fromDate
    ? dayjs(fromDate).format("YYYY-MM-DD")
    : null;
  const toDateFormatted = toDate ? dayjs(toDate).format("YYYY-MM-DD") : null;

  const transactionOptions = [
    { value: "Pay", label: "Pay" },
    { value: "Collect", label: "Collect" },
  ];

  const statusOptions = [
    { value: "Success", label: "Success" },
    { value: "Failed", label: "Failed" },
    { value: "Pending", label: "Pending" },
  ];
  console.log(phoneNumber);
  return (
    <>
      <Box className="form-wrapper">
        <h2>Transaction Details</h2>
        <form className="form-grid">
          <Grid container spacing={2} className="form-container">
            <Grid item xs={12} sm={6}>
              <DateRangePicker
                fromDates={handleFromDate}
                toDates={handleToDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputBar onChange={handlePhoneNumberChange}>
                Mobile Number
              </InputBar>
              {phoneNumberError && (
                <div style={{ color: "red" }}>{phoneNumberError}</div>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <UniversalDropdown
                label="Status"
                value={statusType}
                options={statusOptions}
                onChange={handleDropdownChangeStatusType}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <UniversalDropdown
                label="Type"
                value={transactionType}
                options={transactionOptions}
                onChange={handleDropdownChangeTransactionType}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
      <TransactionTable
        transactionType={transactionType}
        statusType={statusType}
        fromDate={fromDateFormatted}
        toDate={toDateFormatted}
        phoneNumber={phoneNumber}
      />
    </>
  );
};

export default Form;
