import styles from './Accordion.module.css';

export default function AccordionDetails({ isActive, id, children }) {
  return (
    <div
      id={`detail-${id}`}
      className={`${styles.accordionDetails} ${
        isActive ? '' : styles.inActive
      }`}
      aria-labelledby={`accordion-${id}`}
    >
      <p>{children}</p>
    </div>
  );
}
