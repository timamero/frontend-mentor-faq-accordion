import { useContext } from 'react';
import AccordionItem from './AccordionItem';
import AccordionDetails from './AccordionDetails';
import { AccordionContext } from './Accordion';

export default function AccordionGroup({ id, item, details }) {
  const activeID = useContext(AccordionContext);
  // const activeID = useContext(AccordionContext).activeAccordion;
  return (
    <div>
      <AccordionItem isActive={activeID == id} id={id} role="region">
        {item}
      </AccordionItem>
      <AccordionDetails isActive={activeID == id} id={id}>
        {details}
      </AccordionDetails>
    </div>
  );
}
