import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export interface SubmissionsRecord{
    jobPostingId: string,
    jobPostingName: string,
    pointOfContact: string,
    hiringCompany: string,
    salary: string,
    status: string
}

const SubmissionsRow = (props: {record: SubmissionsRecord} ) => {
  // console.log("SubmissionsRow", record);
  console.log("SubmissionsRow", props);
    const {record } = props;
    
    const [open, setOpen] = React.useState(false);
    return <>
      <React.Fragment>     
          <TableRow sx={{ '& > *': 
            { borderBlock: 'solid',
              writingMode: 'horizontal-tb' } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              {record.jobPostingId}
            </TableCell>
            <TableCell align="right">{record.jobPostingName}</TableCell>
            <TableCell align="right">{record.pointOfContact}</TableCell>
            <TableCell align="right">{record.hiringCompany}</TableCell>
            <TableCell align="right">{record.salary}</TableCell>
            <TableCell align="right">{record.status}</TableCell>
          </TableRow>
      </React.Fragment>
    </>
}

export default SubmissionsRow;