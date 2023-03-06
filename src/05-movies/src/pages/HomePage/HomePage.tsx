import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopMovies } from 'components/services/MoviesAPI';
import { Movie, Status } from 'types';
// import Skeleton from 'components/Skeleton';

import styles from './HomePage.module.scss';

function HomePage() {
  // const [movies, setMovies] = useState<Movie[]>(() => Skeleton());
  const [movies, setMovies] = useState<Movie[]>([]);

  const [error, setError] = useState('');
  const [status, setStatus] = useState(Status.idle);

  useEffect(() => {
    fetchTopMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <ul className={styles.movies}>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link className={styles.movies_card} to="/movies/:movieId">
              <img
                width="250px"
                height="375px"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title}`}
              />
              <div>{movie.title}</div>
              <div>{movie.release_date}</div>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default HomePage;
