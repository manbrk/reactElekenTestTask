import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'

import './Main.css'
import '../../components/About/AboutList.css'

import Calendar from '../../components/Calendar/Calendar'
import ContactsList from '../../components/Contacts/ContactsList'
import AboutList from "../../components/About/AboutList";

class Main extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header Main">
          <ul>
            <li><NavLink to="/" exact>About</NavLink></li>
            <li><NavLink to="/calendar">Calendar</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
        </div>
        <div className="App-content">
          <Route path="/" exact component={AboutList}/>
          <Route path="/Calendar" exact component={Calendar}/>
          <Route path="/Contacts" exact component={ContactsList}/>
        </div>
        <div className="App-footer">The footer content goes here.</div>
      </div>
    )
  }
}

export default Main
