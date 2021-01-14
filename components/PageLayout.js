import styles from './PageLayout.module.css';

export default function PageLayout({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
