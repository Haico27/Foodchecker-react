import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FoodItem from './FoodItem'
import Title from '../components/Title'
import './FoodContainer.sass'

class FoodContainer extends PureComponent {
  static propTypes = {
    fooditems: PropTypes.array.isRequired,
  }

  renderFoodItem(fooditem, index) {
    return <FoodItem key={ index } { ...fooditem } />
  }

  render() {
    return(
      <div className="fooditems wrapper">
        <header>
          <Title content = "FoodChecker" />
        </header>
        <main>
          { this.props.fooditems.map(this.renderFoodItem) }
        </main>
      </div>
    )
  }
}

export default FoodContainer
