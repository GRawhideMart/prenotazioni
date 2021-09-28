import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/EditSharp";
import { useCustomStyles } from "../../../../shared/useStyles";

const EditButton = ({ handleClickOpen }) => {
  const classes = useCustomStyles();
  return (
    <IconButton
      variant="contained"
      color="warning"
      className={classes.inventaryEditButton}
      onClick={handleClickOpen}
      aria-label="edit"
    >
      <Edit />
    </IconButton>
  );
};

export default EditButton;
