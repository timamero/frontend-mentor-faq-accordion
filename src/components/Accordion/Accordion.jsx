import { useState } from 'react';
import { AccordionGroup } from '.';
import styles from './Accordion.module.css';

export default function Accordion({ data }) {
  const [activeID, setActiveID] = useState(1);
  const handleSetActiveClick = (id) => setActiveID(id);
  const accordionGroup = data.map((obj) => (
    <AccordionGroup
      key={obj.id}
      id={obj.id}
      item={obj.question}
      details={obj.answer}
      activeID={activeID}
      handleSetActiveClick={handleSetActiveClick}
    />
  ));
  return <div className={styles.accordion}>{accordionGroup}</div>;
}
