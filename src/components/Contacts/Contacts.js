import React, {Component} from 'react'
import {contacts} from '../../fixtures'
import About from "../About/About";

class Contacts extends Component {
    contactElements = contacts.map(contact => <li key={contact.id}><About article={contact}/></li>);

    render() {
        return (
            <div className="AboutList">
              <h1>Contacts</h1>
                <ul>
                  {this.contactElements}
                </ul>
            </div>
        )
    }
}

export default Contacts
