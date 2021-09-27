import TextField from "@material-ui/core/TextField";
import { theme } from "../../../../../shared/theme";
import { useCustomStyles } from "../../../../../shared/useStyles";

const Id = ({ ...restProps }) => {
  const classes = useCustomStyles();
  return (
    <TextField
      {...restProps}
      type="number"
      className={classes.field}
      //onChange={(e) => setId(e.target.value)}
      label="ID"
      //helperText={idError ? idErrorMessage : ""}
      variant="standard"
      color="primary"
      //error={idError}
      InputLabelProps={{
        style: { color: "black" },
      }}
      FormHelperTextProps={{
        style: { color: theme.palette.error },
      }}
    />
  );
};

export default Id;
