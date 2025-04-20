import { useContext } from 'react';
import AccordionItem from './AccordionItem';
import AccordionDetails from './AccordionDetails';
import { AccordionContext } from './Accordion';

type AccordionGroupProp = {
  id: string;
  item: string;
  details: string;
}

export default function AccordionGroup({ id, item, details }: AccordionGroupProp) {
  const activeID = useContext(AccordionContext);
  return (
    <div>
      <AccordionItem isActive={activeID === id} id={id}>
        {item}
      </AccordionItem>
      <AccordionDetails isActive={activeID === id} id={id}>
        {details}
      </AccordionDetails>
    </div>
  );
}
