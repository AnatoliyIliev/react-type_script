const { v4: uuidv4 } = require('uuid');

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
        key={uuidv4()}
        onClick={() => onLeaveFeedback(option)}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
