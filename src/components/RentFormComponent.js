import React, { Component } from 'react';
import { Control, Form, Errors } from 'react-redux-form';


class BookForm extends Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
    alert(JSON.stringify(val));
    this.props.resetFeedbackForm();
  }

  render() {
    return (
      <Form model="feedback" onSubmit={(val) => this.handleSubmit(val)}>
        <label>Your name?</label>
        <Control.text model=".name" />
        <button>Submit!</button>
      </Form>
    );
  }
}

export default BookForm;