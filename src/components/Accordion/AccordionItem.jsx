import styles from './Accordion.module.css';

export default function AccordionItem({ children }) {
  return <div className={styles.accordionItem}>{children}</div>;
}
