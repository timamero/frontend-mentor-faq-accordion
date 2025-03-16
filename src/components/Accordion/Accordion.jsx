import { createContext, useState } from 'react';
import styles from './Accordion.module.css';

export const AccordionContext = createContext(null);

export default function Accordion({ children }) {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const handleAccordionClick = (event) => {
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
