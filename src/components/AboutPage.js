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
            <p>The FoodChecker app is designed to gain insight in which foods your body can and can not handle.
            It is based on personal experience: you enter the fooditems and its ingredients yourself. Create your personal overview now!
            This is how it works:</p>
            <ol>
              <li>You have eaten a fooditem and you feel your body reacts well on it or you feel that it causes discomfort.</li>
              <li>You fill out the form on the homepage: name of the fooditem (title), a picture and its ingredients. </li>
              <li>Make sure you pay attention to the checkbox 'Tolerated?': unchecked means that it causes problems, checked means it was fine to eat this particular item.</li>
              <li>Below the formfield you get to see a list with the items you entered. Items you can tolerate are depicted in green, items not tolerated in red. </li>
              <li>By clicking on the link 'ingredients' on each item, you get to see the ingredients you entered.</li>
            </ol>
          </div>
        </main>
      </div>
    )
  }
}

export default AboutPage
