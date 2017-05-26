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
        <input type="text" placeholder="email" value={this.state.email} />
        <input type="password" placeholder="password" value={this.state.password} />
        <input type="password" placeholder="confirm password" value={this.state.confirmPassword}/>
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Validator;
