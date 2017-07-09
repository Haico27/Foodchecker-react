import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import './SignUp.css'

class SignUp extends PureComponent {
  render() {
    return(
      <div className="signUp">
        <Title content="Sign Up" />
        <form className="signUpForm">
          <input
            type="text"
            ref="name"
            className="input"
            />
          <input
            type="text"
            ref="email"
            className="input"
            />
          <input
            type="text"
            ref="password"
            className="input"
            />
          <input
            type="text"
            ref="passwordConfirmation"
            className="input"
            />
          <button className="signUp">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp
