import { Link } from 'react-router-dom';
import { PropsMovies } from '../../types';
import styles from './Card.module.scss';

function Card({ movies }: PropsMovies) {
  return (
    <ul className={styles.movies}>
      {movies &&
        movies.map((movie) => {
          const [year, month, date] = movie.release_date.split('-');

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
                <div>{`${date} ${month} ${year}`}</div>
                <div>{movie.vote_average}</div>
                <div>{movie.vote_count}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default Card;
