import styles from './Accordion.module.css';
import iconMinus from '../../assets/images/icon-minus.svg';

export default function AccordionItem({ children }) {
  return (
    <div className={styles.accordionItem}>
      <p>{children}</p>
      <img src={iconMinus} height="32px" width="32px" />
    </div>
  );
}
