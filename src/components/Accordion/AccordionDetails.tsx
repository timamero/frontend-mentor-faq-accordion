import styles from './Accordion.module.css';

type AccordionDetailsProp = {
  isActive: boolean;
  id: string;
  children: string;
}

export default function AccordionDetails({ isActive, id, children }: AccordionDetailsProp) {
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
