import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import NoFoundPage from 'pages/NoFoundPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

function Movies() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </Container>
  );
}

export default Movies;
