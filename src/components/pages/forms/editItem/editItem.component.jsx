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

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";

import { useDispatch, useSelector } from "react-redux";
import EditButton from "../../../utils/buttons/edit";
import { updateItem } from "../../../../rtk/slices/inventary.slice";

const Edit = ({ rowId }) => {
  const [open, setOpen] = useState(false);
  const itemInfo = useSelector((state) =>
    state.inventary.items.filter((item) => item.id === rowId)
  )[0];
  const { control, handleSubmit } = useForm({
    defaultValues: itemInfo,
  });

  const classes = useCustomStyles();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (id, data) => {
    alert(JSON.stringify({ id, data }));
    dispatch(updateItem(id, { data }));
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <EditButton handleClickOpen={handleClickOpen} />

      {/* DIALOG */}
      <Dialog
        open={open}
        setOpen={setOpen}
        title={itemInfo && `Modifica elemento - ${itemInfo.name}`}
      >
        <Form
          onSubmit={handleSubmit((values) => onSubmit(rowId, values))}
          className={classes.field}
        >
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
              Modifica
            </Button>
          </Grid>
        </Form>
      </Dialog>
    </>
  );
};

export default Edit;
