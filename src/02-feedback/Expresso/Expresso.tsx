import React, { Component } from 'react';
var shortid = require('shortid');

interface IState {
  good: number;
  neutral: number;
  bad: number;
}

class Expresso extends Component<{}, IState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  handleChange = (option: string) => {
    this.setState((prevState: any) => {
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let percentage = Math.ceil((good / this.countTotalFeedback()) * 100);
    return percentage;
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
            onClick={() => this.handleChange(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}

        <h2>Statistics</h2>
        {this.countTotalFeedback() < 0 ? (
          <p>No feedback given</p>
        ) : (
          <>
            <ul>
              {this.options.map(option => (
                <li key={shortid.generate()}>
                  {option[0].toUpperCase() + option.slice(1)}: {option}
                </li>
              ))}
            </ul>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>
              Positive percentage: {this.countPositiveFeedbackPercentage()}%
            </p>
          </>
        )}
      </div>
    );
  }
}

export default Expresso;
