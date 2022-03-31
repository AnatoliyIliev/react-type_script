import React, { Component } from 'react';
var shortid = require('shortid');

interface Props {}

interface State {
  good: number;
  neutral: number;
  bad: number;
}

class Expresso extends Component<Props, State> {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
  };

  options = ['good', 'neutral', 'bad'];

  handleChange = (event: any) => {
    console.log(event);
  };

  render() {
    // const { state } = this;
    return (
      <div>
        <h1>Please leave feedback</h1>

        {this.options.map(option => (
          <button
            type="button"
            name={option}
            key={shortid.generate()}
            onClick={this.handleChange}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}

        <h2>Statistics</h2>
        {false ? (
          <p>No feedback given</p>
        ) : (
          <ul>
            {this.options.map(option => (
              <li key={shortid.generate()}>{option}:</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Expresso;
