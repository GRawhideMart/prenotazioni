import React, { Component } from "react";
import { Control, Form, Errors } from "react-redux-form";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
import Checkbox from "./FormComponents/Checkbox";
import Select from "./FormComponents/Select";

//const TextInput = (props) => <TextField id={props.label} color='primary' />

class BookForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(val) {
    console.log(val);
    alert(JSON.stringify(val));
    this.props.resetFeedbackForm();
  }

  render() {
    const classes = this.props.classes;
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        style={{ marginTop: "32px" }}
      >
        <Grid item md={2} xs={0}></Grid>
        <Grid item md={8} xs={12}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignContent="space-around"
          >
            <Form
              model="instrumentsRental"
              onSubmit={(val) => this.handleSubmit(val)}
            >
              <Grid item>
                <Control type="date" model=".startDate" />
                <Control type="date" model=".endDate" />
              </Grid>
              <Grid item>
                <Control.select model=".reason" component={Select} />
                <Control.textarea model=".notes" />
              </Grid>
              <Control.checkbox model=".agreement" component={Checkbox} />
              <Button
                className={classes.requestButton}
                color="primary"
                type="submit"
                variant="contained"
              >
                Invia richiesta
              </Button>
            </Form>
          </Grid>
        </Grid>
        <Grid item md={2} xs={0}></Grid>
      </Grid>
    );
  }
}

export default BookForm;
