import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import '../CentralCloud.css'; // Import the CSS file

const columns = [
  { id: 'name', label: 'Cloud Name', minWidth: 5 },
  { id: 'state', label: 'Management State', minWidth: 5 },
  { id: 'availabilitystatus', label: 'Availability Status', minWidth: 5 },
  { id: 'deploystatus', label: 'Deploy Status', minWidth: 5 },
  { id: 'syncstatus', label: 'Sync Status', minWidth: 5 },
  { id: 'location', label: 'Location', minWidth: 5 },
  // {
  //   id: 'size',
  //   label: 'Size\u00a0(km\u00b2)',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toLocaleString('en-US'),
  // },
];

function createData(name, state, availabilitystatus, deploystatus, syncstatus, location) {
  return { name, state, availabilitystatus, deploystatus, syncstatus, location };
}

const rows = [
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
  createData('', '', '', '', '', '', ),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset page when searching
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const data = [
    { id: 1, systemName:'',alarm: '' },
  ];

  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous"></link>
          <nav >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Sub Cloud</li>
            </ol>
          </nav>
      <h1>Cloud Overview</h1>
      <hr className="separator" />
      <h2 >Sub Cloud</h2>
    <Paper sx={{ width: '100%' }}>
      <TextField
        label="Click here to Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px' }}
        className="search-bar" // Apply the custom class
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth ,fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
