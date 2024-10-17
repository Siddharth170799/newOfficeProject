import React from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from './SideBar'; 
import Form from './Form';  
import TransactionTable from './TransactionTable';      

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}> 
          <Sidebar /> 
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%',marginLeft:"-230px" }}>
            <Form /> 
           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;

