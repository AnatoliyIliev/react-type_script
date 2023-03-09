// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FindMovie from 'components/FindMovie';

import styles from './MoviesPage.module.scss';

function MoviesPage() {
  // const [seargeQuary, setSeargeQuary] = useState('');

  return (
    <>
      <FindMovie />
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
