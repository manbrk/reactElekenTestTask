import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">The header content goes here.</div>
        <div className="App-content">
          <p>
            The main content goes here.
          </p>
          <p>
            And here.
          </p>
        </div>
        <div className="App-footer">The footer content goes here.</div>
      </div>

    );
  }
}

export default App;
