import React, {Component} from 'react'

class About extends Component {

  state = {
    isOpen: false
  };

  render() {
    const {article} = this.props;

    return (
      <div>
        <h2 onClick={this.toggleOpen}>{article.title}</h2>
          {this.getBody()}
      </div>
    )
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const {article} = this.props;

    return (
      <p>
        {article.text}
      </p>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default About
