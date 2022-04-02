import './Statistics.css';

interface Props {
  title?: string;
  stats: { id: string; label: string; percentage: number }[];
}

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function Statistics({ title, stats }: Props) {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : ''}

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            key={stat.id}
            className="item"
            style={{ background: generateColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
