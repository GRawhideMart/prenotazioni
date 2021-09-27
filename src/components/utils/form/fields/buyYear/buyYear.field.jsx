import { MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useCustomStyles } from "../../../../../shared/useStyles";

const BuyYear = ({ value, onChange }) => {
  const classes = useCustomStyles();

  const academicYears = [
    "2007/08",
    "2008/09",
    "2009/10",
    "2010/11",
    "2011/12",
    "2012/13",
    "2013/14",
    "2014/15",
    "2015/16",
    "2016/17",
    "2018/19",
    "2019/20",
    "2020/21",
    "2021/22",
  ];

  return (
    <TextField
      className={classes.field}
      select
      value={value}
      onChange={onChange}
      label="Anno d'acquisto"
      variant="standard"
      color="primary"
      //error={buyYearError}
      InputLabelProps={{
        style: { color: "black" },
      }}
    >
      {academicYears.map((option) => (
        <MenuItem key={academicYears.indexOf(option)} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default BuyYear;
