import Navigation from 'components/Navigation';
import styles from './AppBar.module.scss';

function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export default AppBar;
