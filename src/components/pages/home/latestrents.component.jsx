import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {
  StyledTableCell,
  StyledTableRow,
  useCustomStyles,
} from "../../../shared/useStyles";

import { fetchRents } from "../../../rtk/slices/rents.slice";

import Loading from "../../utils/spinner";
import { fetchInventary } from "../../../rtk/slices/inventary.slice";

const LatestRents = () => {
  const classes = useCustomStyles();
  const rows = useSelector((state) => state.rents.rents)[0];
  //const inventary = useSelector((state) => state.inventary.items)[0];
  const isLoading = useSelector((state) => state.rents.loading);

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(fetchRents());
    dispatch(fetchInventary());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);
  //console.log(inventary);

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
          {isLoading && (
            <div className={classes.loadingSpinner}>
              <Loading />
            </div>
          )}
          {rows &&
            rows.slice(0, 12).map((row) => (
              <StyledTableRow key={row.itemId}>
                <StyledTableCell component="th" scope="row">
                  {row.item}
                </StyledTableCell>
                <StyledTableCell align="center">{row.who}</StyledTableCell>
                <StyledTableCell align="center">
                  {new Date(row.when).toLocaleDateString()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.returned ? "Sì" : "No"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LatestRents;
