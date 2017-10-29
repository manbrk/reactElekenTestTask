import React, {Component} from 'react'
// import About from './About'
import {articles} from '../../fixtures'
import About from "./About";

class AboutList extends Component {
  aboutElements = articles.map( article => <li key={article.id}><About article={article}/></li>);

    render() {
        return (
          <div className="AboutList">
            <h1>About App</h1>
            <ul>
              {this.aboutElements}
            </ul>
          </div>

        )
    }
}

export default AboutList
