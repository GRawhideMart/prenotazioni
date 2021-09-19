import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";
import { theme } from "../../shared/theme";
import { FormGroup, Grid, MenuItem, Switch } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addItem } from "../../rtk/slices/inventary.slice";
import { useCustomStyles } from "../../shared/useStyles";

const AddItemForm = () => {
  const dispatch = useDispatch();
  const classes = useCustomStyles();
  const history = useHistory();

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

  // Variabili di stato interno
  const [id, setId] = useState(null);
  const [quantity, setQuantity] = useState("0");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [buyYear, setBuyYear] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [isDonation, setIsDonation] = useState(false);
  const [isAvailable, setisAvailable] = useState(false);
  const [replacePriority, setReplacePriority] = useState("nessuna");

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
    // alert(
    //   "I will add to the inventary this: " +
    //     JSON.stringify()
    // );
    // dispatch(
    //   addItem({
    //     id,
    //     quantity,
    //     description,
    //     name,
    //     buyYear,
    //     totalPrice,
    //     isAvailable,
    //     isDonation,
    //     replacePriority,
    //   })
    // );
    dispatch(
      addItem({
        id,
        quantity,
        description,
        name,
        buyYear,
        totalPrice,
        isAvailable,
        isDonation,
        replacePriority,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      })
    );
    history.push("/inventario");
  };

  return (
    <Container size="sm">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className={classes.field}
      >
        <TextField
          className={classes.field}
          onChange={(e) => setDescription(e.target.value)}
          label="Modello"
          variant="standard"
          color="primary"
          fullWidth
          required
          error={descriptionError}
          InputLabelProps={{
            style: { color: "black" },
          }}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setName(e.target.value)}
          label="Descrizione"
          variant="standard"
          color="primary"
          fullWidth
          required
          error={nameError}
          InputLabelProps={{
            style: { color: "black" },
          }}
        />
        <Grid item container direction="row" justifyContent="space-evenly">
          <Grid item md={4}>
            <TextField
              type="number"
              className={classes.field}
              onChange={(e) => setId(e.target.value)}
              label="ID"
              variant="standard"
              color="primary"
              error={idError}
              InputLabelProps={{
                style: { color: "black" },
              }}
            />
          </Grid>

          <Grid item md={4}>
            <TextField
              type="number"
              className={classes.field}
              onChange={(e) => setQuantity(e.target.value)}
              label="Quantità"
              variant="standard"
              color="primary"
              error={quantityError}
              InputLabelProps={{
                style: { color: "black" },
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              select
              className={classes.field}
              value={replacePriority}
              onChange={(e) => setReplacePriority(e.target.value)}
              label="Priorità sostituzione"
              variant="standard"
              color="primary"
              InputLabelProps={{
                style: { color: "black" },
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

        <FormControl className={classes.field}>
          <Grid item container direction="row" justifyContent="space-around">
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
                  style: { color: "black" },
                }}
                FormHelperTextProps={{
                  style: { color: theme.palette.primary.light },
                }}
              />
              <TextField
                className={classes.field}
                onChange={(e) => setTotalPrice(e.target.value)}
                label="Prezzo d'acquisto (€)"
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
            <Grid
              item
              md={6}
              justifyContent="space-around"
              alignItems="space-around"
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      onChange={(e) => setIsDonation(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="È una donazione"
                />
                <FormControlLabel
                  control={
                    <Switch
                      defaultChecked
                      onChange={(e) => setisAvailable(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="È disponibile per il noleggio"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
          fullWidth
        >
          Aggiungi
        </Button>
      </form>
    </Container>
  );
};

export default AddItemForm;
