import { Component } from 'react';
import { ButtonsList } from './ButtonsList';
import { Statistics } from './Statistics';

import { Notification } from './Notification';
import { Section } from './Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  findPositivePersentage = data => {
  
    return Math.floor(
      (data.good / (data.neutral + data.bad + data.good)) * 100
    );
  };

  render() {
    return (
      <div >
        <Section title={'Please leave feedback'}>
          <ButtonsList
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePersentage={this.findPositivePersentage(this.state)}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}