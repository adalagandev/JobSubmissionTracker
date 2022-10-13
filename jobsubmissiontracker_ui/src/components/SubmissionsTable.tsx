import React, {useState} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import  { SubmissionsRecord} from './CommonTypes';
import  SubmissionsRow from '../components/SubmissionsRow';
import submissionsJSON from '../components/mockData/submissions.json';


import Card from '@mui/material/Card';

const SubmissionsTable = () => {
  const [records, setRecords] = useState<SubmissionsRecord[]>(submissionsJSON);
  console.log('SubmissionsTable-records:', records);
    return (
      <>
        <TableContainer component={Card}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow
                  sx={{
                backgroundColor: '#1976d2',
                borderBottom: "2px solid black",
                "& th": {
                  fontSize: "1.25rem",
                  color: "rgb(255,250,250)"
                }
              }}>
                <TableCell />
                <TableCell>Posting ID</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Point of Contact</TableCell>
                <TableCell align="right">Company</TableCell>
                <TableCell align="right">Salary</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>            
              <>{records && records.map((row) => {
                              console.log("SubmissionsTable-SubmissionsRow row ", row);
                              return <SubmissionsRow key={row.jobPostingId} record={row}
                              />                              
                      })}</>    
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );
};

export default SubmissionsTable;
