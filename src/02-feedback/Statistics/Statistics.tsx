var shortid = require('shortid');

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
  const array = Object.keys({
    good,
    neutral,
    bad,
  });
  return (
    <>
      <ul>
        {array.map(option => (
          <li key={shortid.generate()}>
            {option[0].toUpperCase() + option.slice(1)}:
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
