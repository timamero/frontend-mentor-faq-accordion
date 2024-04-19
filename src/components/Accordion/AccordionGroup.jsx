import AccordionItem from './AccordionItem';
import AccordionDetails from './AccordionDetails';

export default function AccordionGroup({ activeID, setActiveID, obj }) {
  return (
    <div>
      <AccordionItem
        isActive={activeID === obj.id}
        onClick={setActiveID}
        id={obj.id}
      >
        {obj.question}
      </AccordionItem>
      <AccordionDetails isActive={activeID === obj.id}>
        {obj.answer}
      </AccordionDetails>
    </div>
  );
}
