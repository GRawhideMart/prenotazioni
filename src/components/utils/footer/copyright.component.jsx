import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Copyright = ({ copyright }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link
        to="https://membri.poliradio.it/"
        style={{ textDecoration: "none", color: "white" }}
      >
        {copyright}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
