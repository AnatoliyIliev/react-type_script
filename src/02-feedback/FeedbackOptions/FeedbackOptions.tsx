var shortid = require('shortid');

interface IProps {
  options: string[];
  onLeaveFeedback: (option: string) => void;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: IProps) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        name={option}
        key={shortid.generate()}
        onClick={() => onLeaveFeedback(option)}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
