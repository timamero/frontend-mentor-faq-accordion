import React, { createContext, useState } from 'react';
import styles from './Accordion.module.css';

type AccordionProp = {
  children: React.JSX.Element;
}

// TODO: Add typing to context
export const AccordionContext = createContext(null);

export default function Accordion({ children }: AccordionProp) {
  const [activeAccordion, setActiveAccordion] = useState(1);
  // TODO: Update typeing for handleAccordionClick
  const handleAccordionClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    setActiveAccordion(event.target.dataset.accordion);
  };
  return (
    <AccordionContext.Provider value={{ activeAccordion }}>
      <div className={styles.accordion} onClick={handleAccordionClick}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
