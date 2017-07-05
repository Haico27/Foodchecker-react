import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Editor from 'react-medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './FoodEditor.css'
import addFoodItem from '../actions/addFoodItem'

class FoodEditor extends PureComponent {
  constructor(props) {
    super()

    const { title, picture, tolerated, ingredients } = props

    this.state = {
      title,
      picture,
      tolerated: false,
      ingredients,
      errors: {}
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.title.value
    })
  }

  updatePicture(event) {
    this.setState({
      picture: this.refs.picture.value
    })
  }

  updateIngredients() {
    this.setState({
      ingredients: this.refs.ingredients.value
    })

  }

  setTolerated(event) {
    let checkbox = event.target
    if (checkbox.checked) {
      this.setState({
        tolerated: event.target.value === 'tolerated'
      })

    } else {
      this.setState({
        tolerated: event.target.value === '!tolerated'
      })
    }
  }

  validate(foodItem) {
    const { title, picture, ingredients } = foodItem

    let errors = {}

    if (!title || title === '') errors.title = 'Please enter a title for your fooditem'

    if (!picture || picture === '') errors.picture = 'Please enter an URL of a picture of your fooditem'

    if (!ingredients || ingredients === '') errors.ingredients = 'Please enter the ingredients of your fooditem'

    this.setState({
      errors,
    })

    return Object.keys(errors).length === 0
  }



  saveFoodItem() {
    const {
      title,
      picture,
      tolerated,
      ingredients
    } = this.state

    const foodItem = {
      title,
      picture,
      tolerated,
      ingredients
    }

    if (this.validate(foodItem)) {
      this.props.addFoodItem(foodItem)
      console.log(foodItem)
    }



  }

  render() {
    const { errors } = this.state

    return(
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title of fooditem"
          defaultValue={ this.state.title }
          onChange={ this.updateTitle.bind(this) }
          onKeyDown={ this.updateTitle.bind(this) } />

          { errors.title && <p className="error">{ errors.title }</p> }

        <input
          type="text"
          ref="picture"
          className="picture"
          placeholder="URL of picture"
          defaultValue={ this.state.picture }
          onChange={ this.updatePicture.bind(this) }
          onKeyDown={ this.updatePicture.bind(this) } />

          { errors.picture && <p className="error">{ errors.picture }</p> }

        <input
          type="text"
          ref="ingredients"
          className="picture"
          placeholder="Ingredients"
          defaultValue={ this.state.ingredients }
          onChange={ this.updateIngredients.bind(this) }
          onKeyDown={ this.updateIngredients.bind(this) } />

          { errors.ingredients && <p className="error">{ errors.ingredients }</p> }

        <div className="setTolerated">
          <label key='tolerated' htmlFor='tolerated'>
            <input id='tolerated' type='checkbox' name='tolerated' value='tolerated' onChange={ this.setTolerated.bind(this) } />
              Tolerated?
          </label>
        </div>



        <div className="actions">
          <button className="additem" onClick={ this.saveFoodItem.bind(this) }>Add fooditem</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addFoodItem })(FoodEditor)
