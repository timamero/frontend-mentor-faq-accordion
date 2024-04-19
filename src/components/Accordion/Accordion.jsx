import { AccordionGroup } from '.';
import styles from './Accordion.module.css';

export default function Accordion({ data }) {
  const accordionGroup = data.map((obj) => (
    <AccordionGroup
      key={obj.id}
      id={obj.id}
      item={obj.question}
      details={obj.answer}
    />
  ));
  return <div className={styles.accordion}>{accordionGroup}</div>;
}
