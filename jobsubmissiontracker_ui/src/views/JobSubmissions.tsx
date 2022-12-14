import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CollapsibleTable from '../references/MuiTables';
import SubmissionsTable from '../components/SubmissionsTable';

const JobSubmissions = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    return    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={1}>&nbsp;</Grid>
        <Grid xs={10}>
          <SubmissionsTable />
            {/*<CollapsibleTable />*/}
        </Grid>
        <Grid xs={1}>&nbsp;</Grid>
        
      </Grid>
    </Box>
    </>
};

export default JobSubmissions;
