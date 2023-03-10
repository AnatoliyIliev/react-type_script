import { Link } from 'react-router-dom';
import { PropsMovies } from '../../types';
import styles from './Card.module.scss';

function chooseColor(value: number) {
  if (value < 5) return 'red';
  else if (value >= 5 && value < 8) return 'orange';
  else if (value >= 8) return 'green';
}

function Card({ movies }: PropsMovies) {
  return (
    <ul className={styles.movies}>
      {movies &&
        movies.map((movie) => {
          const [year, month, date] = movie.release_date.split('-');
          const numberOfAverage = Number(movie.vote_average.toFixed(1));
          const averageColorStyle = chooseColor(numberOfAverage);

          return (
            <li key={movie.id}>
              <Link className={styles.movies_card} to="/movies/:movieId">
                <img
                  width="250px"
                  height="375px"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.title}`}
                  className={styles.movie_image}
                />
                <h2 className={styles.movie_title}>{movie.title}</h2>
                <div className={styles.mavie_date}>{`${date} ${month} ${year}`}</div>
                <div className={styles.movie_circle}>
                  <span className={styles.movie_average} style={{ color: `${averageColorStyle}` }}>
                    {numberOfAverage}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default Card;
