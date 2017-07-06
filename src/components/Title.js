import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Title.css'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="Title">
        <h1>{ this.props.content }</h1>
      </div>
    )
  }
}

export default Title
