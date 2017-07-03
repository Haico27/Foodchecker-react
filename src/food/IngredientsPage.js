import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'

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
        </header>

        <main>
          <p>{ ingredients }</p>
        </main>
        
      </div>
    )
  }
}

export default IngredientsPage
