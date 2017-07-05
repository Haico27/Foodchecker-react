import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import toleratedIcon from '../images/tolerated.svg'
import notToleratedIcon from '../images/not_tolerated.svg'
import DeleteButton from '../components/DeleteButton'
import remove from '../actions/remove'


import './FoodItem.css'

class FoodItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tolerated: PropTypes.bool.isRequired,
    ingredients: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired
  }





  removeFooditem() {
    const { _id } = this.props
    console.log('CLICK (FoodItem)', _id)
    this.props.remove(_id)
  }

  render() {
    const { _id, title, picture, tolerated, removeFooditem } = this.props

    const styleGreen = {
      backgroundColor: 'rgba(0, 255, 0, .05)',
      boxShadow: '0 1px 6px green, 0 1px 4px blue'
    };

    const styleRed = {
      backgroundColor: 'rgba(255, 0, 0, .05)',
      boxShadow: '0 1px 6px red, 0 1px 4px blue'
    };

    return(
       <article className="fooditem" style={ tolerated ? styleGreen : styleRed }>
          <header>
            <h1>{ title }</h1>
              { tolerated && <p><img className="icon" src={ toleratedIcon } alt="tolerated" /></p> }
              { !tolerated && <p><img className="icon" src={ notToleratedIcon } alt="not tolerated" /></p> }
          </header>
          <img className="item" src={ picture } alt="fooditem" />
          <div>

            <p>
              <Link to={ `/fooditems/${_id}`}>Ingredients</Link>
            </p>

            <DeleteButton
              _id = { _id }
              onClick={ this.removeFooditem.bind(this) } />
          </div>
       </article>
    )
  }
}

export default connect(null, { remove })(FoodItem)
