


// import React, { useEffect, useState } from "react";
// import { TextField, Box, Grid } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs"; 
// import transactions from "../data/data";

// const DateRangePicker = () => {
//   const [data, setData] = useState(transactions);
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);


//   // Convert selected dates to YYYY-MM-DD format
//   const fromDateFormatted = fromDate ? dayjs(fromDate).format("YYYY-MM-DD") : null;
//   const fromDateFormattedString = fromDateFormatted?.toString()
//   console.log(fromDateFormattedString)
//   const toDateFormatted = toDate ? dayjs(toDate).format("YYYY-MM-DD") : null;
//   const toDateFormattedString = toDateFormatted?.toString()
//   console.log(toDateFormattedString)

//   console.log("From Date:",typeof( fromDateFormatted));
//   console.log("To Date:", toDateFormatted);


//   const checking=()=>{
//     const details3 = data.filter(
//       (item) =>
//         item.transactionDate >= fromDateFormatted && item.transactionDate <= toDateFormatted
//     );
//     console.log(details3);
//   }

//   useEffect(()=>{
// checking()
//   },[toDate,fromDate])
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Grid container spacing={2}>
//         {/* From Date Input */}
//         <Grid item xs={6}>
//           <DatePicker
//             label="From Date"
//             value={fromDate}
//             onChange={(newValue) => setFromDate(newValue)}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 sx={{ width: "100%" }} // Increase width
//               />
//             )}
//           />
//         </Grid>

//         {/* To Date Input */}
//         <Grid item xs={6}>
//           <DatePicker
//             label="To Date"
//             value={toDate}
//             onChange={(newValue) => setToDate(newValue)}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 sx={{ width: "100%" }} // Increase width
//               />
//             )}
//           />
//         </Grid>
//       </Grid>
//     </LocalizationProvider>
//   );
// };

// export default DateRangePicker;



import React, { useEffect, useState } from "react";
import { TextField, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import transactions from "../data/data"; // Adjust the path as necessary
import TransactionTable from "./TransactionTable";

const DateRangePicker = ({fromDates,toDates}) => {
  const [data, setData] = useState(transactions);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data); // State for filtered data

  // Convert selected dates to YYYY-MM-DD format
  const fromDateFormatted = fromDate ? dayjs(fromDate).format("YYYY-MM-DD") : null;
  const toDateFormatted = toDate ? dayjs(toDate).format("YYYY-MM-DD") : null;

  const checkingDateFormat = () => {
    const details3 = data.filter((item) => {
      // Ensure item.transactionDate is in the same format
      const transactionDate = dayjs(item.transactionDate).format("YYYY-MM-DD");

      return (
        (fromDateFormatted ? transactionDate >= fromDateFormatted : true) && // Check if fromDate is set
        (toDateFormatted ? transactionDate <= toDateFormatted : true) // Check if toDate is set
      );
    });
    setFilteredData(details3); // Update filtered data
    console.log(details3); // Log filtered transactions
  };

  useEffect(() => {
    if(fromDate && toDate){
      fromDates(fromDateFormatted)
      toDates(toDateFormatted)
      checkingDateFormat();
    }
    // Call filtering function whenever fromDate or toDate changes
  }, [fromDate, toDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        {/* From Date Input */}
        <Grid item xs={6}>
          <DatePicker
            label="From Date"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ width: "100%" }} // Increase width
              />
            )}
          />
        </Grid>

        {/* To Date Input */}
        <Grid item xs={6}>
          <DatePicker
            label="To Date"
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ width: "100%" }} // Increase width
              />
            )}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
    
  );
};

export default DateRangePicker;
