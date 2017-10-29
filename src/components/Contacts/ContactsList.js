import React, {Component} from 'react'
import {contacts} from '../../fixtures'
import Contact from "./Contact";

import './ContactList.css'

class ContactsList extends Component {
    contactElements = contacts.map(contact => <li key={contact.id}><Contact contact={contact}/></li>);

    render() {
        return (
            <div className="ContactList">
              <h1>Contacts</h1>
                <ul>
                  {this.contactElements}
                </ul>
            </div>
        )
    }
}

export default ContactsList
