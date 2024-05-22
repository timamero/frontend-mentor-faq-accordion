import styles from './Accordion.module.css';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

export default function AccordionItem({ isActive, onClick, id, children }) {
  return (
    <button onClick={() => onClick(id)} className={styles.accordionItem}>
      <p>{children}</p>
      <img src={isActive ? iconMinus : iconPlus} height="32px" width="32px" />
    </button>
  );
}
