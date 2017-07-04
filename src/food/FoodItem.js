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
    console.log('this is remove in FoodItem: ', remove)
    this.props.remove(_id)
  }

  render() {
    const { _id, title, picture, tolerated, removeFooditem } = this.props

    const styleGreen = {
      backgroundColor: 'rgba(0, 255, 0, .05)'
    };

    const styleRed = {
      backgroundColor: 'rgba(255, 0, 0, .05)'
    };

    return(
       <article className="fooditem">
          <h1>{ title }</h1>
          <img src={ picture } alt="fooditem" />
          <div>

            <p>
              <Link to={ `/fooditems/${_id}`}>Ingredients</Link>
            </p>
            <ul>
              { tolerated && <li><img src={ toleratedIcon } alt="tolerated" /></li> }
              { !tolerated && <li><img src={ notToleratedIcon } alt="not tolerated" /></li> }
            </ul>
            <DeleteButton
              _id = { _id }
              onClick={ this.removeFooditem.bind(this) } />
          </div>
       </article>
    )
  }
}

export default connect(null, { remove })(FoodItem)
