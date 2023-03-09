import { useState, useEffect } from 'react';

import { fetchTopMovies } from 'components/services/MoviesAPI';
import { Movie } from 'types';
// import Skeleton from 'components/Skeleton';

import Card from 'components/Card';

function HomePage() {
  // const [movies, setMovies] = useState<Movie[]>(() => Skeleton());
  const [movies, setMovies] = useState<Movie[]>([]);

  // const [error, setError] = useState('');
  // const [status, setStatus] = useState(Status.idle);

  useEffect(() => {
    fetchTopMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <Card movies={movies} />
    </>
  );
}

export default HomePage;
