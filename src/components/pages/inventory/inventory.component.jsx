import Grid from "@material-ui/core/Grid";
import InventoryTable from "../../inventory";
import Title from "../../utils/title";

const Inventory = ({ name }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "32px" }}
    >
      <Title name={name} />

      <Grid item container direction="row">
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <InventoryTable type="manage" />
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default Inventory;
