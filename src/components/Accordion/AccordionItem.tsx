import { useContext } from 'react';
import { AccordionContext } from './Accordion';

import styles from './Accordion.module.css';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

type AccordionItemProp = {
  // isActive: boolean;
  id: string;
  children: string;
}

export default function AccordionItem({ id, children }: AccordionItemProp) {
  const activeID = useContext(AccordionContext);
  return (
    <h2>
      <button
        className={styles.accordionItem}
        aria-expanded={id == activeID}
        aria-controls={`detail-${id}`}
        id={`accordion-${id}`}
        data-accordion={id}
      >
        <p>{children}</p>
        <img src={id == activeID ? iconMinus : iconPlus} height="32px" width="32px" />
      </button>
    </h2>
  );
}
