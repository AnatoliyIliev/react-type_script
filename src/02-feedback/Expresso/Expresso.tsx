import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

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

  leaveFeedback = (option: string) => {
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
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />

        <h2>Statistics</h2>
        {this.countTotalFeedback() === 0 ? (
          <p>No feedback given</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default Expresso;
