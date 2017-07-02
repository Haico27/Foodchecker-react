import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Editor from 'react-medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './FoodEditor.css'

class FoodEditor extends PureComponent {
  constructor(props) {
    super()

    const { title, picture, tolerated, ingredients } = props

    this.state = {
      title,
      picture,
      tolerated,
      ingredients
    }
  }

  updateTitle(event) {

  }

  updatePicture(event) {

  }

  updateIngredients() {

  }

  setTolerated(event) {

  }

  saveFoodItem() {

  }

  render() {
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

        <input
          type="text"
          ref="picture"
          className="picture"
          placeholder="URL of picture"
          defaultValue={ this.state.picture }
          onChange={ this.updatePicture.bind(this) }
          onKeyDown={ this.updatePicture.bind(this) } />

        <input
          type="text"
          ref="ingredients"
          className="picture"
          placeholder="Ingredients"
          defaultValue={ this.state.ingredients }
          onChange={ this.updateIngredients.bind(this) }
          onKeyDown={ this.updateIngredients.bind(this) } />

        <label>Tolerated?</label>
        <input type="radio" onChange={ this.setTolerated.bind(this) } />
        <input type="radio" onChange={ this.setTolerated.bind(this) } />



        <div className="actions">
          <button className="primary" onClick={ this.saveFoodItem.bind(this) }>Add fooditem</button>
        </div>
      </div>
    )
  }
}

export default FoodEditor
