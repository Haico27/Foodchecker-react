import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './FoodItem.css'

class FoodItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tolerated: PropTypes.bool.isRequired,
    ingredients: PropTypes.string.isRequired
  }

  render() {
    const { _id, title, picture, tolerated } = this.props

    return(
       <article className="fooditem">
          <h1>{ title }</h1>
          <img src={ picture } alt="fooditem" />
          <div>

            <p>
              <Link to={ `/fooditems/${_id}`}>Ingredients</Link>
            </p>
            <ul>
              { tolerated && <li><span role="img" aria-label="tolerated">✅</span></li> }
              { !tolerated && <li><span role="img" aria-label="nottolerated">❌</span></li> }
            </ul>
          </div>
       </article>
    )
  }
}

export default FoodItem
