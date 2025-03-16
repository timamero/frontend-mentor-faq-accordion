import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.bg}></div>
      {children}
    </div>
  );
}
