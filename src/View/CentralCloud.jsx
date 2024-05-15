import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

export const CentralCloud = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous"></link>
          <nav >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Central Cloud</li>
            </ol>
          </nav>

      <h1>Cloud Overview</h1>
      <hr className="separator" />
      <h2 >Central Cloud</h2>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell><b>System Name</b></TableCell>
          <TableCell><b>Alarm</b></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        
            
              <TableCell></TableCell>
              <TableCell></TableCell>

                </TableBody>
      </Table>
    </TableContainer>
      </div>
  )
}
export default CentralCloud;
