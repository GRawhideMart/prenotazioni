import TextField from "@material-ui/core/TextField";
import { theme } from "../../../../../shared/theme";
import { useCustomStyles } from "../../../../../shared/useStyles";

const Description = ({ ...restProps }) => {
  const classes = useCustomStyles();
  return (
    <TextField
      {...restProps}
      className={classes.field}
      //onChange={(e) => setDescription(e.target.value)}
      label="Modello"
      //helperText={descriptionError ? descriptionErrorMessage : ""}
      variant="standard"
      color="primary"
      fullWidth
      required
      //error={descriptionError}
      InputLabelProps={{
        style: { color: "black" },
      }}
      FormHelperTextProps={{
        style: { color: theme.palette.error },
      }}
    />
  );
};

export default Description;
