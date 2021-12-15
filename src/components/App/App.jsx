import { useState } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e.target.id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };
  const countPositiveFeedbackPercentage = () => {
    return (
      countTotalFeedback() && Math.round((good / countTotalFeedback()) * 100)
    );
  };

  const reviews = [good, neutral, bad];

  return (
    <div>
      <FeedbackOptions
        options={reviews}
        onLeaveFeedback={onLeaveFeedback}
      ></FeedbackOptions>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </div>
  );
};

export default App;
