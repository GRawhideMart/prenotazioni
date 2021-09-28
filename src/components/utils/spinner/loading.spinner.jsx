import CircularProgress from "@material-ui/core/CircularProgress";
import { useCustomStyles } from "../../../shared/useStyles";

const Loading = () => {
  const classes = useCustomStyles();
  return <CircularProgress className={classes.loadingSpinner} />;
};

export default Loading;
