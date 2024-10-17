import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({children}) => {
  return (
    <Button variant="contained" color="primary" onClick={() => alert('Button clicked!')}>
     {children}
    </Button>
  );
};

export default MyButton;
