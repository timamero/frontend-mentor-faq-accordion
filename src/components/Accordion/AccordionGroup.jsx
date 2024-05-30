import AccordionItem from './AccordionItem';
import AccordionDetails from './AccordionDetails';

export default function AccordionGroup({
  id,
  item,
  details,
  activeID,
  handleSetActiveClick,
}) {
  return (
    <div>
      <AccordionItem
        isActive={activeID === id}
        onClick={handleSetActiveClick}
        id={id}
        role="region"
      >
        {item}
      </AccordionItem>
      <AccordionDetails isActive={activeID === id} id={id}>
        {details}
      </AccordionDetails>
    </div>
  );
}
