import TextField from "@material-ui/core/TextField";
import { theme } from "../../../../../shared/theme";
import { useCustomStyles } from "../../../../../shared/useStyles";

const TotalPrice = ({ ...restProps }) => {
  const classes = useCustomStyles();
  return (
    <TextField
      {...restProps}
      className={classes.field}
      //onChange={(e) => setTotalPrice(e.target.value)}
      label="Prezzo d'acquisto (€)"
      helperText="€€€€.€€"
      variant="standard"
      color="primary"
      //error={totalPriceError}
      InputLabelProps={{
        style: { color: "black" },
      }}
      FormHelperTextProps={{
        style: { color: theme.palette.primary.light },
      }}
    />
  );
};

export default TotalPrice;
