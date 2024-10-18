// import React from 'react';
// import { TextField } from '@mui/material';

// const InputBar = ({children}) => {
//   return (
//     <TextField
//       label={children}      
//       variant="outlined"          
//       fullWidth                 
//     />
//   );
// };

// export default InputBar;


import React from 'react';
import { TextField } from '@mui/material';

const InputBar = ({ onChange, value, children }) => {
  return (
    <TextField
      label={children}    
      variant="outlined"
      fullWidth
      value={value}        // Controlled input
      onChange={onChange}  // Handling change events
    />
  );
};

export default InputBar;
