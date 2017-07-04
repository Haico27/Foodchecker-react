import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FoodItem from './FoodItem'
import FoodEditor from './FoodEditor'
import Title from '../components/Title'
import { connect } from 'react-redux'
import './FoodContainer.css'

import fetchFooditems from '../actions/fetch'
import subscribeToFooditemService from '../actions/subscribe'


class FoodContainer extends PureComponent {
  static propTypes = {
    fooditems: PropTypes.array.isRequired,
    fetchFooditems: PropTypes.func.isRequired,
    subscribeToFooditemService: PropTypes.func.isRequired,
  }

//connects the fetch-action to the props of the foodcontainer
  componentWillMount() {
    this.props.fetchFooditems()
    this.props.subscribeToFooditemService()
  }


  renderFoodItem(fooditem, index) {
    return (
        <FoodItem key={ index } { ...fooditem } />
    )
  }

  render() {
    return(
      <div className="fooditems wrapper">
        <header>
          <Title content = "FoodChecker" />
        </header>
        <main>
          <FoodEditor />
          { this.props.fooditems.map(this.renderFoodItem) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ fooditems }) => ({ fooditems })

export default connect(mapStateToProps, {
  fetchFooditems,
  subscribeToFooditemService,
 })(FoodContainer)
