import IconButton from "@material-ui/core/IconButton";

import DeleteForever from "@material-ui/icons/DeleteForeverSharp";

import { useCustomStyles } from "../../../../shared/useStyles";

const Delete = ({ handleDelete, rowId }) => {
  const classes = useCustomStyles();

  return (
    <IconButton
      aria-label="delete"
      className={classes.inventaryDeleteButton}
      onClick={() => handleDelete(rowId)}
    >
      {<DeleteForever />}
    </IconButton>
  );
};

export default Delete;
