import styles from './Accordion.module.css';

export default function Accordion({ children }) {
  const handleAccordionClick = (event) => {
    console.log('clicked', event.target.dataset.accordion);
  };
  return (
    <div className={styles.accordion} onClick={handleAccordionClick}>
      {children}
    </div>
  );
}
