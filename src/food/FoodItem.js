import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './FoodItem.sass'

class FoodItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.isRequired,
    tolerated: PropTypes.bool.isRequired,
    ingredients: PropTypes.string.isRequired
  }

  render() {
    const { title, picture, tolerated, ingredients } = this.props

    return(
       <article className="fooditem">
          <h1>{ title }</h1>
          <img src={ picture } alt="fooditem" />
          <div>
            <p>{ ingredients }</p>
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
