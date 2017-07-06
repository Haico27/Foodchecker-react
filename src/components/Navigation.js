import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import './Navigation.css'

class Navigation extends PureComponent {
  render() {
    return(
      <nav className="navigation">
        <ul>
          <li><Link to={ `/` } className="link">Home</Link></li>
          <li><Link to={ `/about`} className="link">About</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
