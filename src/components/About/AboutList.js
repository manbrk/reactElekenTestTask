import React, {Component} from 'react'
import About from './About'
import {articles} from '../../fixtures'

class AboutList extends Component {
  aboutElements = articles.map( article => <li key={article.id}><About article={article}/></li>);

    render() {
        return (
          <div className="AboutList">
            <ul>
              {this.aboutElements}
            </ul>
          </div>

        )
    }
}

export default AboutList
