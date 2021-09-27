import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useCustomStyles } from "../../../../shared/useStyles";

import Dialog from "../../../utils/dialog";
import Form from "../../../utils/form";

import Description from "../../../utils/form/fields/description";
import Name from "../../../utils/form/fields/name";
import Id from "../../../utils/form/fields/id";
import Quantity from "../../../utils/form/fields/quantity";
import ReplacePriority from "../../../utils/form/fields/replacePriority";
import BuyYear from "../../../utils/form/fields/buyYear";
import TotalPrice from "../../../utils/form/fields/totalPrice";
import IsDonation from "../../../utils/form/fields/isDonation";
import IsRentable from "../../../utils/form/fields/isRentable";
import IsAvailable from "../../../utils/form/fields/isAvailable";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRightSharp";
import Close from "@material-ui/icons/CloseSharp";
import AddCircle from "@material-ui/icons/AddCircleSharp";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import { useDispatch } from "react-redux";
import { createItem } from "../../../../rtk/slices/inventary.slice";

const Add = () => {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      description: "",
      name: "",
      id: 1,
      quantity: 0,
      replacePriority: "nessuna",
      buyYear: "2021/22",
      totalPrice: "",
      isDonation: false,
      isRentable: false,
      isAvailable: false,
    },
  });

  const classes = useCustomStyles();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (values) => {
    console.log(values);
    alert(`I received ${JSON.stringify(values)}`);
    dispatch(createItem(values)).then((res) => setOpen(false));
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <Button
        endIcon={<AddCircle />}
        variant="contained"
        color="success"
        fullWidth
        className={classes.inventaryAddButton}
        onClick={handleClickOpen}
      >
        Aggiungi
      </Button>

      {/* DIALOG */}
      <Dialog open={open} setOpen={setOpen} title="Aggiungi elemento">
        <Form onSubmit={handleSubmit(onSubmit)} className={classes.field}>
          <Grid container>
            <Controller
              control={control}
              name="description"
              render={({ field }) => <Description {...field} />}
            />
            <Controller
              control={control}
              name="name"
              render={({ field }) => <Name {...field} />}
            />
            <Grid container direction="row" justifyContent="space-between">
              <Grid item direction="column">
                <Controller
                  control={control}
                  name="id"
                  render={({ field }) => <Id {...field} />}
                />
                <Controller
                  control={control}
                  name="quantity"
                  render={({ field }) => <Quantity {...field} />}
                />
                <Controller
                  control={control}
                  name="replacePriority"
                  render={({ field: { value, onChange } }) => (
                    <ReplacePriority onChange={onChange} value={value} />
                  )}
                />
              </Grid>

              <Grid item direction="column">
                <Controller
                  control={control}
                  name="buyYear"
                  render={({ field: { value, onChange } }) => (
                    <BuyYear onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  control={control}
                  name="totalPrice"
                  render={({ field }) => <TotalPrice {...field} />}
                />
              </Grid>
              <Grid item direction="column" justifyContent="space-around">
                <FormGroup>
                  <Controller
                    control={control}
                    name="isDonation"
                    render={({ field: { value, onChange } }) => (
                      <IsDonation checked={value} onChange={onChange} />
                    )}
                  />
                  <Controller
                    control={control}
                    name="isRentable"
                    render={({ field: { value, onChange } }) => (
                      <IsRentable checked={value} onChange={onChange} />
                    )}
                  />
                  <Controller
                    control={control}
                    name="isRentable"
                    render={({ field: { value, onChange } }) => (
                      <IsAvailable checked={value} onChange={onChange} />
                    )}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-evenly">
            <Button
              onClick={() => setOpen(false)}
              color="secondary"
              variant="contained"
              endIcon={<Close />}
            >
              Annulla
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Aggiungi
            </Button>
          </Grid>
        </Form>
      </Dialog>
    </>
  );
};

export default Add;
