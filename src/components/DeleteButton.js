import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './DeleteButton.css'

class DeleteButton extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  remove() {
    const { _id } = this.props
    console.log('CLICK (DeleteButton)', _id)
    this.props.onClick()
  }

  render() {
    return(
      <div className="removeFooditem">
        <button className="removebutton" onClick={ this.remove.bind(this) } >Remove this item</button>
      </div>

    )
  }
}

export default DeleteButton
