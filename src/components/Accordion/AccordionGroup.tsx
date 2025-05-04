// import { useContext } from 'react';
// import AccordionItem from './AccordionItem';
// import AccordionDetails from './AccordionDetails';
// import { AccordionContext } from './Accordion';

type AccordionGroupProp = {
  children: Array<React.JSX.Element>;
}

export default function AccordionGroup({ children }: AccordionGroupProp) {
  // const activeID = useContext(AccordionContext);
  return (
    <div>
      {children}
    </div>
  );
}
