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
            <li><Link to={ `/signup` } className="link">Sign up</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation
