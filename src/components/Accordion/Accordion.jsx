import styles from './Accordion.module.css';

export default function Accordion({ children }) {
  const handleClick = (event) => {
    console.log('clicked', event.target);
  };
  return (
    <div className={styles.accordion} onClick={handleClick}>
      {children}
    </div>
  );
}
