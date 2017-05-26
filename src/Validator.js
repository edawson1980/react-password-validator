import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      valid: true
    }; //means that form is in its original state when the fields are empty ('is there a value here? no. confirmed to be TRUE')

  }
  //takes whatever happens in the email field and makes it the current state for that field.
  handleInputEmail(event) {
    this.setState({email: event.target.email});
  }

  handleInputPassword(event) {
    this.setState({password: event.target.password});
  }

  handleInputConfirm(event) {
    this.setState({confirmPassword: event.target.confirmPassword})
  }

  handleSubmit(event) {
    if (password == confirmPassword) {
      return "Valid password!"
    }
    else {
      return "The passwords do not match."
    }
  }

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(e) => this.handleInputEmail(e)} type="text" placeholder="email"  />
        <input onChange={(e) => this.handleInputPassword(e)} type="password" placeholder="password"  />
        <input onChange={(e) => this.handleInputConfirm(e)} type="password" placeholder="confirm password" />
        <input onChange={(e) => this.handleSubmit(e)} type="submit" value="Submit" />
      </div>
    ); // when a change (which is an event in itself) occurs in this field, run handleInputEmail function,
      // and so on
  }
}

export default Validator;
