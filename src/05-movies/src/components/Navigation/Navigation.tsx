import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav>
      <NavLink className={styles.navigation} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navigation} to="/movies">
        Movies
      </NavLink>
      <NavLink className={styles.navigation} to="/movies/:movieId/cast">
        Movies
      </NavLink>
      <NavLink className={styles.navigation} to="/movies/:movieId/reviews">
        Movies
      </NavLink>
      <NavLink className={styles.navigation} to="/movies/:movieId">
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
