import TextField from "@material-ui/core/TextField";
import { theme } from "../../../../../shared/theme";
import { useCustomStyles } from "../../../../../shared/useStyles";

const Name = ({ ...restProps }) => {
  const classes = useCustomStyles();
  return (
    <TextField
      {...restProps}
      className={classes.field}
      //onChange={(e) => setName(e.target.value)}
      label="Descrizione"
      //helperText={nameError ? nameErrorMessage : ""}
      variant="standard"
      color="primary"
      fullWidth
      required
      //error={nameError}
      InputLabelProps={{
        style: { color: "black" },
      }}
      FormHelperTextProps={{
        style: { color: theme.palette.error },
      }}
    />
  );
};

export default Name;
