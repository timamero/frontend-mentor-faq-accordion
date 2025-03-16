import styles from './Accordion.module.css';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

export default function AccordionItem({ isActive, id, children }) {
  return (
    <h2>
      <button
        className={styles.accordionItem}
        aria-expanded={isActive}
        aria-controls={`detail-${id}`}
        id={`accordion-${id}`}
        data-accordion={id}
      >
        <p>{children}</p>
        <img src={isActive ? iconMinus : iconPlus} height="32px" width="32px" />
      </button>
    </h2>
  );
}
