import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  StyledTableCell,
  StyledTableRow,
  useCustomStyles,
} from "../shared/useStyles";
import Title from "./TitleComponent";

import { FormControlLabel, FormGroup, Checkbox } from "@material-ui/core";
import BookItemComponent from "./BookItemComponent";
import { useSelector } from "react-redux";

const InventaryTable = ({ inventary }) => {
  const classes = useCustomStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="last rents">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.rowItemId}>
              I.D.
            </StyledTableCell>
            <StyledTableCell align="center">Modello</StyledTableCell>
            <StyledTableCell align="center">Oggetto</StyledTableCell>
            <StyledTableCell align="center">Disponibile</StyledTableCell>
            <StyledTableCell align="center">Quantità</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventary.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell
                component="th"
                scope="row"
                className={classes.rowItemId}
              >
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">
                {row.isAvailable ? "Sì" : "No"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.quantity !== "" ? parseInt(row.quantity, 10) : ""}
              </StyledTableCell>
              <StyledTableCell align="center">
                <BookItemComponent
                  isAvailable={row.isAvailable}
                  item={
                    <div>
                      {row.name}, <em>{row.description}</em>
                    </div>
                  }
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Affitti = ({ name }) => {
  const [onlyAvailable, setOnlyAvailable] = useState(true);

  const inventary = useSelector((state) => state.inventary);

  const toggleOnlyAvailable = (e) => {
    setOnlyAvailable(e.target.checked);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "32px" }}
    >
      <Title name={name} />
      <FormGroup row>
        <FormControlLabel
          style={{ color: "white", marginBottom: "8px" }}
          control={
            <Checkbox
              checked={onlyAvailable}
              onChange={toggleOnlyAvailable}
              name="onlyAvailable"
              color="primary"
            />
          }
          label="Solo disponibili"
        />
      </FormGroup>
      <Grid item container direction="row">
        <Grid item md={2}></Grid>
        <Grid item md={8}>
          <InventaryTable
            inventary={
              onlyAvailable
                ? inventary.filter((item) => item.isAvailable)
                : inventary
            }
          />
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default Affitti;
