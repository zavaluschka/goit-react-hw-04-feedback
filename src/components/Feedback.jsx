import { useState } from 'react';
import { ButtonsList } from './ButtonsList';
import { Statistics } from './Statistics';

import { Notification } from './Notification';
import { Section } from './Section';

export const Feedback =()=> {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const handleFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default: {
      }
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const findPositivePersentage = data => {
  
    return Math.floor(
      (data.good / (data.neutral + data.bad + data.good)) * 100
    );
  };

  
    return (
      <div >
        <Section title={'Please leave feedback'}>
          <ButtonsList
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePersentage={findPositivePersentage({
                good: good,
                neutral: neutral,
                bad: bad
              })}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
