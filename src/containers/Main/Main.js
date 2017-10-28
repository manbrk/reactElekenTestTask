import React, {Component} from 'react'
import About from '../../components/About/About'
import Calendar from '../../components/Calendar/Calendar'
import Contacts from '../../components/Contacts/Contacts'

class Main extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">The header content goes here.</div>
        <div className="App-content">
          <About/>
          <Calendar/>
          <Contacts/>
        </div>
        <div className="App-footer">The footer content goes here.</div>
      </div>
    )
  }
}

export default Main
