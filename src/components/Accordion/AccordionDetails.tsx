import { useContext } from 'react';
import { AccordionContext } from './Accordion';

import styles from './Accordion.module.css';

type AccordionDetailsProp = {
  // isActive: boolean;
  id: string;
  children: string;
}

export default function AccordionDetails({ id, children }: AccordionDetailsProp) {
  const activeID = useContext(AccordionContext);
  return (
    <div
      id={`detail-${id}`}
      className={`${styles.accordionDetails} ${
        id == activeID ? '' : styles.inActive
      }`}
      aria-labelledby={`accordion-${id}`}
    >
      <p>{children}</p>
    </div>
  );
}
