import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect }  from 'react-redux'
import Title from '../components/Title'
import signUp from '../actions/user/sign-up'
import './SignUp.css'

export class SignUp extends PureComponent {
  constructor(props) {
    super()

    this.state = {}
  }

  static propTypes = {
    signUp: PropTypes.func.isRequired,
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        name: this.refs.name.value,
        email: this.refs.email.value,
        password: this.refs.password.value
      }
      this.props.signUp(user)
    }
  }

  validateAll() {
    return this.validateName() &&
    this.validateEmail() &&
    this.validatePassword() &&
    this.validatePasswordConfirmation()
  }

  validateName() {

  }

  validateEmail() {

  }

  validatePassword() {

  }

  validatePasswordConfirmation() {

  }




  render() {
    return(
      <div className="signUp">
        <Title content="Sign Up" />
        <form className="signUpForm" onSubmit={ this.submitForm.bind(this) }>
          <input
            type="text"
            ref="name"
            className="input"
            placeholder="Name"
            />
          <input
            type="text"
            ref="email"
            className="input"
            placeholder="Email address"
            />
          <input
            type="text"
            ref="password"
            className="input"
            placeholder="Password"
            />
          <input
            type="text"
            ref="passwordConfirmation"
            className="input"
            placeholder="Repeat password"
            />
          <input className="signUpButton" type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
}

export default SignUp
