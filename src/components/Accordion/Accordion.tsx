import React, { createContext, useState } from 'react';
import styles from './Accordion.module.css';

type AccordionProp = {
  children: React.JSX.Element;
}

export const AccordionContext = createContext<string | null>(null);

export default function Accordion({ children }: AccordionProp) {
  const [activeAccordion, setActiveAccordion] = useState<string>("1");
  const handleAccordionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const element: HTMLElement = event.target
    if (element.dataset.accordion) {
      const id: string = element.dataset.accordion
      setActiveAccordion(id);
    }
  };
  return (
    <AccordionContext.Provider value={activeAccordion}>
      <div className={styles.accordion} onClick={handleAccordionClick}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
