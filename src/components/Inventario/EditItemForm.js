import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";
import { theme } from "../../shared/theme";
import { FormGroup, Grid, MenuItem, Switch } from "@material-ui/core";
import { useSelector } from "react-redux";

const EditItemForm = ({ style, rowId }) => {
  const classes = style();
  const history = useHistory();
  const state = useSelector(
    (state) => state.inventary.filter((item) => item.id === rowId)[0]
  );

  const substitutionOptions = [
    {
      value: "nessuna",
      label: "Nessuna",
    },
    {
      value: "bassa",
      label: "Bassa",
    },
    {
      value: "media",
      label: "Media",
    },
    {
      value: "alta",
      label: "Alta",
    },
  ];

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  // Variabili di stato interno
  const [id, setId] = useState(state.id);
  const [quantity, setQuantity] = useState(state.quantity);
  const [description, setDescription] = useState(state.description);
  const [name, setName] = useState(state.name);
  const [buyYear, setBuyYear] = useState(state.buyYear);
  const [totalPrice, setTotalPrice] = useState(state.totalPrice);
  const [isDonation, setIsDonation] = useState(state.isDonation);
  const [isAvailable, setisAvailable] = useState(state.isAvailable);
  const [replacePriority, setReplacePriority] = useState(state.replacePriority);

  // Errori
  const [idError, setIdError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [buyYearError, setbuyYearError] = useState(false);
  const [totalPriceError, setTotalPriceError] = useState(false);

  const handleSubmit = (e) => {
    // Eventually this will dispatch an action which will hit the endpoint that the backend exposes to perform a POST operation on the inventario table
    e.preventDefault();
    // setTitleError(false);
    // setDetailsError(false);

    // if (title == "") {
    //   setTitleError(true);
    // }
    // if (details == "") {
    //   setDetailsError(true);
    // }
    // if (title && details) {
    //   fetch("http://localhost:8000/notes", {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify({ title, details, category }),
    //   }).then(() => history.push("/"));
    // }
    alert(
      "I will modify the item with ID " +
        rowId +
        " to this: " +
        JSON.stringify({
          quantity,
          description,
          name,
          buyYear,
          totalPrice,
          isAvailable,
          isDonation,
          replacePriority,
        })
    );
    history.push("/inventario");
  };
  return (
    <Grid container justifyContent="space-evenly" alignItems="space-evenly">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className={classes.field}
      >
        <Grid item direction="column">
          <TextField
            className={classes.field}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            helperText="Modello"
            variant="standard"
            color="primary"
            fullWidth
            required
            error={descriptionError}
            FormHelperTextProps={{
              style: { color: theme.palette.primary.main },
            }}
          />
          <TextField
            className={classes.field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText="Descrizione"
            variant="standard"
            color="primary"
            fullWidth
            required
            error={nameError}
            FormHelperTextProps={{
              style: { color: theme.palette.primary.main },
            }}
          />
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <Grid item md={4}>
            <TextField
              type="number"
              className={classes.field}
              value={id}
              onChange={(e) => setId(e.target.value)}
              helperText="ID"
              variant="standard"
              color="primary"
              error={idError}
              FormHelperTextProps={{
                style: { color: theme.palette.primary.main },
              }}
            />
          </Grid>

          <Grid item md={4}>
            <TextField
              type="number"
              className={classes.field}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              helperText="Quantità"
              variant="standard"
              color="primary"
              error={quantityError}
              FormHelperTextProps={{
                style: { color: theme.palette.primary.main },
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              select
              className={classes.field}
              value={replacePriority || "bassa"}
              onChange={(e) => setReplacePriority(e.target.value)}
              helperText="Priorità sostituzione"
              variant="standard"
              color="primary"
              FormHelperTextProps={{
                style: { color: theme.palette.primary.main },
              }}
            >
              {substitutionOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justifyContent="space-around"
          alignItems="space-around"
        >
          <FormControl className={classes.field}>
            <Grid item md={6}>
              <TextField
                className={classes.field}
                onChange={(e) => setBuyYear(e.target.value)}
                label="Anno d'acquisto"
                helperText="YYYY/YY"
                variant="standard"
                color="primary"
                error={buyYearError}
                InputLabelProps={{
                  style: { color: theme.palette.primary.main },
                }}
                FormHelperTextProps={{
                  style: { color: theme.palette.primary.light },
                }}
              />
              <TextField
                className={classes.field}
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
                helperText="€€€€.€€"
                variant="standard"
                color="primary"
                error={totalPriceError}
                InputLabelProps={{
                  style: { color: "black" },
                }}
                FormHelperTextProps={{
                  style: { color: theme.palette.primary.light },
                }}
              />
            </Grid>
            <Grid item container md={6} justifyContent="space-around">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      onChange={(e) => setIsDonation(e.target.checked)}
                      color="primary"
                      value={isDonation}
                    />
                  }
                  label="È una donazione"
                />
                <FormControlLabel
                  control={
                    <Switch
                      value={isAvailable}
                      onChange={(e) => setisAvailable(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="È disponibile per il noleggio"
                />
              </FormGroup>
            </Grid>
          </FormControl>
        </Grid>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
          fullWidth
        >
          Modifica
        </Button>
      </form>
    </Grid>
  );
};

export default EditItemForm;
