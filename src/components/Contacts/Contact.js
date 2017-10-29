import React, {Component} from 'react'

import './Contact.css'

class Contact extends Component {

  render() {
    const {contact} = this.props;



    return (
      <div className="Contact">
        <div>{contact.title}</div>
        <div><a href={contact.link}>Visit here</a></div>
      </div>
    )
  }
}

export default Contact
