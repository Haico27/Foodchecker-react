import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import signOut from '../actions/user/sign-out'
import './Navigation.css'

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }
  render() {
    const { signedIn } = this.props
    return(
      <nav className="navigation">
        <div className="general">
          <ul>
            <li><Link to={ `/` } className="link">Home</Link></li>
            <li><Link to={ `/about`} className="link">About</Link></li>
          </ul>
        </div>
        { signedIn ?
          <div className="user">
            <ul>
              <li><a href="#" onClick={this.signOut.bind(this)} className="link">Sign out</a></li>
            </ul>
          </div>
          :
          <div className="user">
            <ul>
              <li><Link to={ `/sign-up` } className="link">Sign Up</Link></li>
              <li><Link to={ `/sign-in` } className="link">Sign In</Link></li>
            </ul>
          </div>

        }

      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
