const { v4: uuidv4 } = require('uuid');

interface IProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: IProps) => {
  return (
    <>
      <ul>
        {['good', 'neutral', 'bad'].map(option => (
          <li key={uuidv4()}>
            {option[0].toUpperCase() + option.slice(1)}:{' '}
            {
              {
                good,
                neutral,
                bad,
                total,
                positivePercentage,
              }[option]
            }
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <p>Positive percentage: {positivePercentage}%</p>
    </>
  );
};

export default Statistics;
