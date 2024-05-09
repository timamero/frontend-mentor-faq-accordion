import styles from './Accordion.module.css';

export default function AccordionDetails({ isActive, children }) {
  return (
    <div
      className={`${styles.accordionDetails} ${
        isActive ? '' : styles.inActive
      }`}
    >
      <p>{children}</p>
    </div>
  );
}
