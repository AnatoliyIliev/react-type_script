import styles from './Container.module.scss';
import { childrenProps } from '../../types';

function Container({ children }: childrenProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
