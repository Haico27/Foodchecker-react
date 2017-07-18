import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import Title from '../components/Title'
import { Link } from 'react-router'
import signIn from '../actions/user/sign-in'
import './SignIn.css'

export class SignIn extends PureComponent {


  static propTypes = {
    signIn: PropTypes.func.isRequired,
    signedIn: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  submitForm(event) {
    event.preventDefault()
      const user = {
        email: this.refs.email.value,
        password: this.refs.password.value,
      }
      this.props.signIn(user)
  }


  render() {
    return(
      <div className="signIn">
        <Title content="Sign In" />

        <form className="signInForm" onSubmit={ this.submitForm.bind(this) }>
          <div className="input">
            <input
              type="email"
              ref="email"
              placeholder="Email address" />
          </div>
          <div className="input">
            <input
              type="password"
              ref="password"
              placeholder="Password" />
          </div>
          <div className="input">
            <input
              className="button"
              type="submit"
              value="Sign in" />
          </div>
          <div className="input">
            <p>No account yet? <Link to={ `/sign-up`} className="signUp">Sign Up</Link></p>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})



export default connect(mapStateToProps, { signIn, replace })(SignIn)
