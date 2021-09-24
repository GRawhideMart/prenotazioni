import React, { Fragment, useCallback, useEffect } from "react";
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
} from "../../shared/useStyles";
import Title from "../TitleComponent";

import { useSelector } from "react-redux";
import ButtonDialog from "./ButtonDialog";
import { useDispatch } from "react-redux";
import { fetchInventary } from "../../rtk/slices/inventary.slice";

const InventaryTable = () => {
  const classes = useCustomStyles();
  const dispatch = useDispatch();

  const inventary = useSelector((state) => state.inventary);
  const initFetch = useCallback(() => {
    dispatch(fetchInventary());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <Fragment>
      <ButtonDialog type="add" />
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
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventary
              ? inventary.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      classNames={classes.rowItemId}
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
                      <ButtonDialog
                        type="edit"
                        rowId={row.id}
                        description={row.description}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <ButtonDialog type="delete" rowId={row.id} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

const Inventario = ({ name }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "32px" }}
    >
      <Title name={name} />

      <Grid item container direction="row">
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <InventaryTable />
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default Inventario;
