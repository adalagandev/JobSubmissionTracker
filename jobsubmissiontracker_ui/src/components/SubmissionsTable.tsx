import React, {useState} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import  { SubmissionsRecord} from '../components/SubmissionsRow';
import  SubmissionsRow from '../components/SubmissionsRow';
import submissionsJSON from '../components/mockData/submissions.json';


import Card from '@mui/material/Card';
import { rootShouldForwardProp } from "@mui/material/styles/styled";

const SubmissionsTable = () => {
  const [records, setRecords] = useState<SubmissionsRecord[]>(submissionsJSON);
  console.log('SubmissionsTable-records:', records);
    return (
      <>
        <TableContainer component={Card}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Posting ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Company</TableCell>
                <TableCell align="right">Point of Contact</TableCell>
                <TableCell align="right">Salary</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>            
              <>{records && records.map((row) => {
                              console.log("SubmissionsTable-SubmissionsRow row ", row);
                              return <SubmissionsRow 
                              key={row.jobPostingId}
                              record={row}                     
                              />                              
                      })}</>    
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );
};

export default SubmissionsTable;