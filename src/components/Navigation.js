import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import './Navigation.css'

class Navigation extends PureComponent {
  render() {
    return(
      <nav className="navigation">
        <div className="general">
          <ul>
            <li><Link to={ `/` } className="link">Home</Link></li>
            <li><Link to={ `/about`} className="link">About</Link></li>
          </ul>
        </div>
        <div className="user">
          <ul>
            <li><Link to={ `/sign-up` } className="link">Sign Up</Link></li>
            <li><Link to={ `/sign-in` } className="link">Sign In</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation
