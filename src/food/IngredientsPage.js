import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import fetchFooditems from '../actions/fetch'
import './IngredientsPage.css'

class IngredientsPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }

  render() {
    const { title, picture, ingredients } = this.props

    return(
      <div className="ingredients page">
        <header >

            <Title content={ title } />

        </header>

        <main >
          <div className="ingredientsList" style={ {backgroundImage: `url(${picture})`} } >
            <h2>The ingredients of { title.toLowerCase() }:</h2>
            <p><strong>{ ingredients }</strong></p>
            <div className="notice">
              <p className="notification">At the moment you see on this page only a string with the ingredients you entered.
              The goal is to present here a list with all the ingredients of the fooditem you entered, and compare
              those ingredients to the ingredients of other items you entered. When ingredients overlap, they will get the same color.
              So in the end you will be presented with a list of ingredients colored either green or red. In this way,
              you get an overview of the specific ingredients that might cause your discomfort! But for now...under construction!</p>
            </div>
          </div>
        </main>

      </div>
    )
  }
}

const mapStateToProps = ({ fooditems }, { params }) => {
  const foodItem = fooditems.reduce((prev, next) => {
    if (next._id === params.fooditemId) {
      return next
    }
    return prev
  }, {})

  return {
    ...foodItem
  }
}

export default connect(mapStateToProps, { fetchFooditems })(IngredientsPage)
