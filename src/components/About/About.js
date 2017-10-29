import React, {Component} from 'react'

class About extends Component {

  state = {
    isOpen: false
  };

  render() {
    const {article} = this.props;

    return (
      <div>
        <h1 onClick={this.toggleOpen}>{article.title}</h1>
        <p>
          {this.getBody()}
        </p>
      </div>
    )
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const {article} = this.props;

    return (
      <section>
        {article.text}
      </section>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default About
