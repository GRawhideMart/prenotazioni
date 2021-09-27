import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const IsDonation = ({ checked, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChange} color="primary" />
      }
      label="È una donazione"
    />
  );
};

export default IsDonation;
