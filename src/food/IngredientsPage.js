import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import fetchFooditems from '../actions/fetch'
import { Link } from 'react-router'
import './IngredientsPage.css'

class IngredientsPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
  }

  render() {
    const { title, ingredients } = this.props

    return(
      <div className="ingredients page">
        <header>
          <Title content={ title } />
          <Link to={`/`} className="link">Back</Link>
        </header>

        <main>
          <h2>See below the ingredients of { title }:</h2>
          <p>{ ingredients }</p>
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
