import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import NoteIcon from "@material-ui/icons/Note";

import { StyledTableCell, StyledTableRow } from "../shared/useStyles";
import Title from "./TitleComponent";

import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
} from "@material-ui/core";
import BookItemComponent from "./BookItemComponents";

const InventaryTable = ({ inventary, style }) => {
  const classes = style();

  //const BookButton = ({ isAvailable }) => {
  //  const [open, setOpen] = React.useState(false);
//
  //  const handleClickOpen = () => {
  //    setOpen(true);
  //  };
//
  //  const handleClose = () => {
  //    setOpen(false);
  //  };
//
  //  return isAvailable ? (
  //    <Button
  //      variant="contained"
  //      color="primary"
  //      className={classes.requestButton}
  //      endIcon={<NoteIcon />}
  //      onClick={handleClickOpen}
  //    >
  //      <FullScreenDialog
  //        open={open}
  //        handleClickOpen={handleClickOpen}
  //        handleClose={handleClose}
  //      />
  //      Richiedi
  //    </Button>
  //  ) : (
  //    <Button
  //      variant="disabled"
  //      color="primary"
  //      className={classes.requestButton}
  //    >
  //      Non disponibile
  //    </Button>
  //  );
  //};
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
                <BookItemComponent style={style} isAvailable={row.isAvailable} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Affitti = (props) => {
  const { inventary, name, style } = props;

  const [state, setState] = useState({
    onlyAvailable: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state, event.target.checked);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginTop: "32px" }}
    >
      <Title style={style} name={name} />
      <FormGroup row>
        <FormControlLabel
          style={{ color: "white", marginBottom: "8px" }}
          control={
            <Checkbox
              checked={state.onlyAvailable}
              onChange={handleChange}
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
              state.onlyAvailable
                ? inventary.filter((item) => item.isAvailable)
                : inventary
            }
            style={style}
          />
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default Affitti;
