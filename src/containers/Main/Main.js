import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'

import './Main.css'

import About from '../../components/About/About'
import Calendar from '../../components/Calendar/Calendar'
import Contacts from '../../components/Contacts/Contacts'

class Main extends Component {

  render() {
    return (
      <div className="App Main">
        <div className="App-header">
          <ul>
            <li><NavLink to="/" exact>About</NavLink></li>
            <li><NavLink to="/calendar">Calendar</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
        </div>
        <div className="App-content">
          <Route path="/" exact component={About}/>
          <Route path="/Calendar" exact component={Calendar}/>
          <Route path="/Contacts" exact component={Contacts}/>
        </div>
        <div className="App-footer">The footer content goes here.</div>
      </div>
    )
  }
}

export default Main
