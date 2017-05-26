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
    } //means that form is in its original state when the fields are empty ('is there a value here? no. confirmed to be TRUE')

  }
  //takes whatever happens in the email field and makes it the current state for that field.
  handleInputEmail(event) {
    this.setState({email: event.target.value});
  }

  handleInputPassword(event) {
    this.setState({password: event.target.value});
  }

  handleInputConfirm(event) {
    this.setState({confirmPassword: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.isValid()
  } //when submit happens, stop it from actually submitting the info, and instead run isValid function first.

  isValid () {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({valid: true})
    } else {
      this.setState({valid: false})
    }
  }


  render() {
    let passValid = this.state.valid ? "Valid Password!" : "Passwords do not match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(e) => this.handleInputEmail(e)} type="text" placeholder="email"  />
        <input onChange={(e) => this.handleInputPassword(e)} type="password" placeholder="password"  />
        <input onChange={(e) => this.handleInputConfirm(e)} type="password" placeholder="confirm password" />
        <input type="submit" onClick={(e) => this.handleSubmit(e)}  value="Submit" />
        <p>{passValid}</p>
      </div>
    ); // when a change (which is an event in itself) occurs in this field, run handleInputEmail function,
      // and so on
  }

}



export default Validator;
