import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { StyledTableCell, StyledTableRow } from '../shared/useStyles';

const InventaryTable = ({ inventary, style }) => {
  const classes = style();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="last rents">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.rowItemId}>I.D.</StyledTableCell>
            <StyledTableCell align="center">Modello</StyledTableCell>
            <StyledTableCell align="center">Oggetto</StyledTableCell>
            <StyledTableCell align="center">Disponibile</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventary.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" className={classes.rowItemId}>
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">
                {row.isAvailable ? "Sì" : "No"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Affitti = (props) => {
  const { inventary, name, style } = props;
  const classes = style();
  
  return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginTop: "32px" }}
      >
        <Typography color="secondary" gutterBottom variant="h2" className={classes.title}>
          {name.toUpperCase()}
        </Typography>
        <Grid item container direction="row">
          <Grid item md={2}></Grid>
          <Grid item md={8}>
            <InventaryTable inventary={inventary} style={style} />
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </Grid>
    );
  };

export default Affitti;
