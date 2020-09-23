import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main
    },
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.secondary.main
    },
  },
}))(TableRow);

function createData(item, who, when, returned) {
  return { item, who, when, returned };
}

const rows = [
  createData('Cosa 1', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 2', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 3', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 4', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
  createData('Cosa 5', 'Erjon Kadiu', new Date().toDateString(), true),
];

const firstTenRows = rows.slice(0,10);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const LatestRents = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="last rents">
        <TableHead>
          <TableRow>
            <StyledTableCell>Oggetto</StyledTableCell>
            <StyledTableCell align="center">Chi</StyledTableCell>
            <StyledTableCell align="center">Quando</StyledTableCell>
            <StyledTableCell align="center">Restituito</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {firstTenRows.map((row) => (
            <StyledTableRow key={row.item}>
              <StyledTableCell component="th" scope="row">
                {row.item}
              </StyledTableCell>
              <StyledTableCell align="center">{row.who}</StyledTableCell>
              <StyledTableCell align="center">{row.when}</StyledTableCell>
              <StyledTableCell align="center">{row.returned ? 'Sì' : 'No'}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LatestRents;