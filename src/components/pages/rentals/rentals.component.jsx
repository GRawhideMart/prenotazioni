import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Title from "../../utils/title";
import InventoryTable from "../../inventory";

const Rentals = ({ name }) => {
  const [onlyAvailable, setOnlyAvailable] = useState(true);

  const toggleOnlyAvailable = (e) => {
    setOnlyAvailable(e.target.checked);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "32px" }}
    >
      <Title name={name} />
      <FormGroup row>
        <FormControlLabel
          style={{ color: "white", marginBottom: "8px" }}
          control={
            <Checkbox
              checked={onlyAvailable}
              onChange={toggleOnlyAvailable}
              name="onlyAvailable"
              color="primary"
            />
          }
          label="Solo disponibili"
        />
      </FormGroup>
      <Grid item container direction="row">
        <Grid item md={2}></Grid>
        <Grid item md={8}>
          <InventoryTable type="rental" onlyAvailable={onlyAvailable} />
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default Rentals;
