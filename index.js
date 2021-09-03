import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class App extends React.Component {
  state = {
    counter: 0
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div class="btn-group">
        <button class="button" onClick={this.decreaseCounter}>-</button>
        <button class="button1">{this.state.counter} </button>
        <button class="button2" onClick={this.increaseCounter}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
