import styles from './Accordion.module.css';

export default function Accordion({ children }) {
  return <div className={styles.accordion}>{children}</div>;
}
