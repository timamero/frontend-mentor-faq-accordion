type AccordionGroupProp = {
  children: Array<React.JSX.Element>;
}

export default function AccordionGroup({ children }: AccordionGroupProp) {
  return (
    <div>
      {children}
    </div>
  );
}
