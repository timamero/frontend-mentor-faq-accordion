import { useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionDetails from './AccordionDetails';

export default function AccordionGroup({ id, item, details }) {
  const [activeID, setActiveID] = useState(1);
  return (
    <div>
      <AccordionItem isActive={activeID === id} onClick={setActiveID} id={id}>
        {item}
      </AccordionItem>
      <AccordionDetails isActive={activeID === id}>{details}</AccordionDetails>
    </div>
  );
}
