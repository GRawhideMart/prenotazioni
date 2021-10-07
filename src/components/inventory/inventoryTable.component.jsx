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
import {
  deleteItem,
  fetchInventary,
  removeItem,
} from "../../rtk/slices/inventary.slice";

import Add from "../pages/forms/addItem";
import Edit from "../pages/forms/editItem";
import Delete from "../utils/buttons/delete";
import Loading from "../utils/spinner";

const InventoryTable = ({ onlyAvailable, type }) => {
  const classes = useCustomStyles();

  const dispatch = useDispatch();

  const inventary = useSelector((state) => state.inventary.items)[0];
  const isLoading = useSelector((state) => state.inventary.loading);
  const items =
    inventary && onlyAvailable
      ? inventary.filter((item) => item.isAvailable)
      : inventary;

  const initFetch = useCallback(() => {
    dispatch(fetchInventary());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const handleDelete = (id) => {
    alert(`This will delete the item with ID ${id} from the database`);
    //dispatch(deleteItem(id));
    dispatch(removeItem(id)).then((_) => dispatch(fetchInventary()));
  };

  return (
    <Fragment>
      {type === "manage" ? <Add /> : null}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="last rents">
          <TableHead>
            {isLoading && (
              <div className={classes.loadingSpinnerContainer}>
                <Loading />
              </div>
            )}
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
            {items &&
              items.map((row) => (
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
                        <Edit rowId={row.id} description={row.description} />
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Delete handleDelete={handleDelete} rowId={row.id} />
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
