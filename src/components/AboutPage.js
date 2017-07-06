import React, { PureComponent } from 'react'
import Title from './Title'
import './AboutPage.css'

class AboutPage extends PureComponent {
  render() {
    return(
      <div className="about-page">
        <header>
          <Title content="About" />
        </header>
        <main>
          <div className="text">
            <p>The FoodChecker is an app designed to keep track of which foods your body can, and which foods it can not handle.
            The idea of this app came up out of personal experience. My body reacted to some foods heavily and not to others, but it
            always was hard to know which were specifically the foods that caused problems. This app gives you an overview of those foods.
            You have to enter the foods yourself along with the ingredients. </p>
          </div>
        </main>
      </div>
    )
  }
}

export default AboutPage
