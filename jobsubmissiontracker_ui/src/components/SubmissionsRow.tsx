import React from 'react';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {SubmissionsRecord} from './CommonTypes';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {red} from "@mui/material/colors";

const SubmissionsRow = (props: {record: SubmissionsRecord, isOddRow?: boolean} ) => {

    const {record } = props;
    
    const [open, setOpen] = React.useState(false);
    const [rowColor] =   React.useState<string>(props.isOddRow ? '#c7caf5':'#FFFFFF');
    const [subRowColor] =   React.useState<string>(props.isOddRow ? '#e3e4fa':'#FFFFFF');

    console.log("SubmissionsRow-props isOddRow", props.isOddRow );
    console.log("SubmissionsRow-props rowColor", rowColor );
    return <>
      <React.Fragment>     
          <TableRow  sx={{ '& > *': { borderBottom: '1px solid',backgroundColor:rowColor}}}>
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
            <TableCell align="center">{record.status}</TableCell>
            <TableCell align="center">
                <a href={record.jobUrl} target="_blank">
                    {record.isHeart && <FavoriteIcon sx={{ color: red[500] }}/> }
                    {record.jobPostingName}
                </a>
            </TableCell>
            <TableCell align="center">{record.pointOfContact}</TableCell>
            <TableCell align="center">{record.hiringCompany}</TableCell>
            <TableCell align="center">{record.salary}</TableCell>

          </TableRow>
          <TableRow sx={{ '& > *': {backgroundColor:subRowColor}}}>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                          <Box sx={{ margin: 1 }}>
                              <Typography variant="h6" gutterBottom component="div">
                                  More Details
                              </Typography>
                              <Table size="small" aria-label="more_details">
                                  <TableHead>
                                      <TableRow>
                                          <TableCell align="center">Submission Date</TableCell>
                                          <TableCell align="center">Interview Process</TableCell>
                                          <TableCell align="center">
                                              Notes</TableCell>
                                      </TableRow>
                                  </TableHead>
                                  <TableBody>

                                          <TableRow>
                                              <TableCell component="th" scope="row" align="center">
                                                  {record.submissionDate}
                                              </TableCell>

                                              <TableCell align="center">
                                                  {/*<>{record.interviewProcess?.interviewRounds}&nbsp;</>*/}
                                                  {/*<br />*/}
                                                  <>
                                                      {record.interviewProcess?.currentRound}/
                                                      {record.interviewProcess?.numberOfRounds}
                                                  </>
                                              </TableCell>
                                              <TableCell align="center"
                                                         sx={{ '& > *': { overflowWrap:'break-word'}}}
                                              >
                                                  {record.notes}
                                              </TableCell>
                                          </TableRow>
                                  </TableBody>
                              </Table>
                          </Box>
                      </Collapse>
                  </TableCell>
          </TableRow>
      </React.Fragment>
    </>
}

export default SubmissionsRow;
