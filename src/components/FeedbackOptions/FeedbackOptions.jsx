import Section from './Section/Section';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <button
        // key={key}
        id="good"
        onClick={onLeaveFeedback}
        type="button"
        style={{ textTransform: 'capitalize' }}
      >
        Good
      </button>
      <button
        // key={key}
        id="bad"
        onClick={onLeaveFeedback}
        type="button"
        style={{ textTransform: 'capitalize' }}
      >
        Bad
      </button>
      <button
        // key={key}
        id="neutral"
        onClick={onLeaveFeedback}
        type="button"
        style={{ textTransform: 'capitalize' }}
      >
        neutral
      </button>
    </Section>
  );
};

export default FeedbackOptions;
