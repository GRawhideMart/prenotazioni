import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import {
  StyledTableCell,
  StyledTableRow,
  useCustomStyles,
} from "../../shared/useStyles";

import BookItemComponent from "../BookItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useCallback, useEffect } from "react";
import { fetchInventary } from "../../rtk/slices/inventary.slice";
import ButtonDialog from "../Inventario/ButtonDialog";

const InventoryTable = ({ onlyAvailable, type }) => {
  const classes = useCustomStyles();

  const dispatch = useDispatch();

  const inventary = useSelector((state) => state.inventary);
  const items = onlyAvailable
    ? inventary.filter((item) => item.isAvailable)
    : inventary;
  const initFetch = useCallback(() => {
    dispatch(fetchInventary());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <Fragment>
      {type === "manage" ? <ButtonDialog type="add" /> : null}
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
              {type === "manage" ? <StyledTableCell></StyledTableCell> : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
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
                {type === "rental" ? ( // if type is rental render the item and modal to book an item
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
                ) : (
                  // if type is not rental, render the buttons to edit and delete
                  <Fragment>
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
                  </Fragment>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default InventoryTable;