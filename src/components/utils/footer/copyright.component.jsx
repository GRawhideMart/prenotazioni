import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Copyright = ({ mark }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://membri.poliradio.it/">
        {mark}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
