import React, { createContext, useState } from 'react';
import styles from './Accordion.module.css';

type AccordionProp = {
  children: Array<React.JSX.Element>;
}

export const AccordionContext = createContext<string | null>(null);

export default function Accordion({ children }: AccordionProp) {
  const [activeAccordion, setActiveAccordion] = useState<string>("1");
  const handleAccordionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLElement
    if (element.dataset.accordion) {
      const id: string = element.dataset.accordion
      setActiveAccordion(id);
    }
  };
  return (
    <AccordionContext.Provider value={activeAccordion}>
      <div className={styles.accordion} onClick={handleAccordionClick} role="region">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
