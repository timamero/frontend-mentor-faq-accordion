import styles from './Accordion.module.css';

export default function AccordionDetails({ children }) {
  return <div className={styles.accordionDetails}>{children}</div>;
}
