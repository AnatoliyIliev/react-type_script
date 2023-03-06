// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { fetchTopMovies } from 'components/services/MoviesAPI';
import stylesApp from '../../App.module.scss';
// import styles from './MovieDetailsPage.module.scss';

function MovieDetailsPage() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetchTopMovies().then(setMovies);
  // }, []);

  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? stylesApp.activeStyle : stylesApp.navigation)}
        to="/movies/:movieId/cast"
        end
      >
        Cast
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? stylesApp.activeStyle : stylesApp.navigation)}
        to="/movies/:movieId/reviews"
        end
      >
        Reviews
      </NavLink>
    </>
  );
}

export default MovieDetailsPage;
