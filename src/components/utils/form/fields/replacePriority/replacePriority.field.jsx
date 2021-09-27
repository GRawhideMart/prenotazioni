import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useCustomStyles } from "../../../../../shared/useStyles";

const ReplacePriority = ({ value, onChange }) => {
  const classes = useCustomStyles();
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
  return (
    <TextField
      select
      className={classes.field}
      value={value}
      onChange={onChange}
      label="Priorità sostituzione"
      variant="standard"
      color="primary"
      InputLabelProps={{
        style: { color: "black" },
      }}
    >
      {substitutionOptions.map((option) => (
        <MenuItem
          key={substitutionOptions.indexOf(option)}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ReplacePriority;
