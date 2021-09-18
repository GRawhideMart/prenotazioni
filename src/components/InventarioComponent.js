import React, { Fragment, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { StyledTableCell, StyledTableRow } from "../shared/useStyles";
import Title from "./TitleComponent";

import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AddCircle, DeleteForeverSharp, EditSharp } from "@material-ui/icons";

const TableButton = ({ icon, onClick, classNames, body }) => {
  return (
    <Button
      variant="contained"
      className={classNames}
      endIcon={icon}
      onClick={onClick}
    >
      {body}
    </Button>
  );
};

const InventaryTable = ({ inventary, style }) => {
  const classes = style();

  return (
    <Fragment>
      <Button
        endIcon={<AddCircle />}
        variant="contained"
        color="success"
        fullWidth={true}
        className={classes.inventaryAddButton}
      >
        Aggiungi
      </Button>
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
            {inventary.map((row) => (
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
                  <TableButton
                    icon={<EditSharp />}
                    body="Modifica"
                    classNames={classes.inventaryEditButton}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TableButton
                    icon={<DeleteForeverSharp />}
                    body="Elimina"
                    classNames={classes.inventaryDeleteButton}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

const Affitti = (props) => {
  const { name, resetFeedbackForm } = props;

  const { styles: style, inventary } = useSelector((state) => state);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginTop: "32px" }}
    >
      <Title style={style} name={name} />

      <Grid item container direction="row">
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <InventaryTable
            inventary={inventary}
            style={style}
            resetFeedbackForm={resetFeedbackForm}
          />
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default Affitti;
