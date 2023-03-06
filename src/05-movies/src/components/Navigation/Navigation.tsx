import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
