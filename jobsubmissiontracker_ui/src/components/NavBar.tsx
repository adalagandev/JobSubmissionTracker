import React from 'react';
import {  Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
const NavBar= () =>{
  return (
    <>
     <AppBar position="static" >
     <Container maxWidth="xl">
        <Toolbar disableGutters>
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
     <Link to="/">
        <Button
                    key='My Dashboard'
                    value='My Dashboard'
                    sx={{ my: 2, color: 'white', display: 'block' }}  
                    >                    
                    My Dashboard
         </Button>
     </Link>
     <Link to="/jobsubmissions">
        <Button
                    key='Job Submissions'
                    value='Job Submissions'
                    sx={{ my: 2, color: 'white', display: 'block' }}  >                    
                   Job Submissions
         </Button>
     </Link>
     <Link to="/myinfo">
        <Button
                    key='My Info'
                    value='My Info'
                    sx={{ my: 2, color: 'white', display: 'block' }}  >                    
                   My Info
         </Button>
     </Link>
    </Box>
    </Toolbar>
    </Container>
    </AppBar>
  </>
  );
}
export default NavBar;