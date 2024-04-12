import styles from './Accordion.module.css';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

export default function AccordionItem({ isActive, children }) {
  return (
    <div className={styles.accordionItem}>
      <p>{children}</p>
      <button>
        <img src={isActive ? iconPlus : iconMinus} height="32px" width="32px" />
      </button>
    </div>
  );
}
