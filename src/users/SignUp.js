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
    const { name } = this.refs

    //if there is at least 1 letter entered, the name is provided and this function returns true
    if ( name.value.length > 1 ) {
      this.setState({
        nameError: null
      })
      return true
    }

    //function returns false and an error when nothing is entered
    this.setState({
      nameError: 'Please provide your name'
    })
    return false
  }



  validateEmail() {
    const { email } = this.refs

    //if entered emailaddress matches this regular expression, function returns true
    if (email.value.match(/^[a-z0-9.\_-]+@[a-z0-9.\_-]+\.[a-z0-9.\_-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    //if no emailaddress is provided, emailError is set
    if (email.value === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    //if emailaddress doesn't match the regular expression and is not empty, then function will return false with error message
    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false

  }

  validatePassword() {
    const { password } = this.refs

    //function returns false when password is shorter than 6 digits
    if (password.value.length < 6 ) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    //function returns true when password contains both numbers and letters
    if (password.value.match(/[a-zA-Z]+/) && password.value.match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })

      return true
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })

  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.refs

    //function returns true when passwordvalue is the same as passwordConfirmationvalue
    if (password.value === passwordConfirmation.value ) {
      this.setState({
        passwordConfirmationError: null
      })
      return true
    }

    //default is false
    this.setState({
      passwordConfirmationError: 'Passwords do not match'
    })
    return false
  }




  render() {
    return(
      <div className="signUp">
        <Title content="Sign Up" />
        <form className="signUpForm" onSubmit={ this.submitForm.bind(this) }>
          <div className="input">
            <input
              type="text"
              ref="name"
              placeholder="Name"
              onChange={ this.validateName.bind(this) } />
              { this.state.nameError ?
                <p className="formError">{ this.state.nameError }</p> :
                null
              }
          </div>
          <div className="input">
            <input
              type="email"
              ref="email"
              placeholder="Email address"
              onChange={ this.validateEmail.bind(this) } />
              { this.state.emailError ?
                <p className="formError">{ this.state.emailError }</p> :
                null
              }
          </div>
          <div className="input">
            <input
              type="password"
              ref="password"
              placeholder="Password"
              onChange={ this.validatePassword.bind(this) } />
              { this.state.passwordError ?
                <p className="formError">{ this.state.passwordError }</p> :
                null
              }
          </div>
          <div className="input">
            <input
              type="password"
              ref="passwordConfirmation"
              placeholder="Repeat password"
              onChange={ this.validatePasswordConfirmation.bind(this) } />
              { this.state.passwordConfirmationError ?
                <p className="formError">{ this.state.passwordConfirmationError }</p> :
                null
              }
          </div>
          <div className="input">
            <input className="signUpButton" type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, {signUp})(SignUp)
