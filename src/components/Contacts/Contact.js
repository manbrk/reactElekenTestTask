import React, {Component} from 'react'

import './Contact.css'

class Contact extends Component {

  icon = null;

  render() {
    const {contact} = this.props;

    return (
      <div className="Contact">
        <div>{contact.title}</div>
        <div><a href={contact.link}>{this.getIcon()}</a></div>
      </div>
    )
  }

  getIcon() {
    const {contact} = this.props;

    if (contact.icon === 'email') return <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
    if (contact.icon === 'linkedin') return <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
    if (contact.icon === 'github') return <i className="fa fa-github fa-2x" aria-hidden="true"></i>
  }
}

export default Contact
