import TextField from "@material-ui/core/TextField";
import { useCustomStyles } from "../../../../../shared/useStyles";

const Quantity = ({ ...restProps }) => {
  const classes = useCustomStyles();
  return (
    <TextField
      {...restProps}
      type="number"
      className={classes.field}
      //onChange={(e) => setQuantity(e.target.value)}
      label="Quantità"
      variant="standard"
      color="primary"
      //error={quantityError}
      InputLabelProps={{
        style: { color: "black" },
      }}
    />
  );
};

export default Quantity;
