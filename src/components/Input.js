import React from 'react';
import { TextField } from '@mui/material';

const InputBar = ({children}) => {
  return (
    <TextField
      label={children}      
      variant="outlined"          
      fullWidth                 
    />
  );
};

export default InputBar;
