import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <React.Fragment> 
      <Box>
        <AppBar position="static">
          <Toolbar sx={{boxShadow: '0px 0px 3px 3px rgb(0 0 0 / 25%)'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Zowe Enterprise Necessity
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </React.Fragment>
  );
}