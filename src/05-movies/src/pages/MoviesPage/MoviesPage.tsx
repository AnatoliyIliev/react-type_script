import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MoviesPage.module.scss';

function MoviesPage() {
  const [seargeQuary, setSeargeQuary] = useState('');

  return (
    <>
      {/* <NavLink
        className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
        to="/movies/:movieId"
        end
      ></NavLink> */}
      <NavLink
        className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
        to="/movies/:movieId/cast"
        end
      >
        Cast
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
        to="/movies/:movieId/reviews"
        end
      >
        Reviews
      </NavLink>
    </>
  );
}

export default MoviesPage;
