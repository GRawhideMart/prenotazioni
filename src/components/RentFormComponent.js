import React, { Component } from "react";
import { Control, Form, Errors } from "react-redux-form";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";

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
          <Grid container direction="column" justify="center">
            <Form model="instrumentsRental" onSubmit={(val) => this.handleSubmit(val)}>
              <InputLabel color='secondary' htmlFor="name">
                Your name?
              </InputLabel>
              <Control model=".notes" component={TextField} />
              <Control type='date' model='.startDate' />
              <Control type='date' model='.endDate' />
              <Control.select model='.reason' />
              <Control.textarea model='.notes' />
              <Control.checkbox model='.agreement' />
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
