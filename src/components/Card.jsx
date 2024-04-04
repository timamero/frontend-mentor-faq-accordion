import styles from './Card.module.css';
import iconStar from '../assets/images/icon-star.svg';

export default function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={iconStar} height="24px" width="24px" />
        <h1>{title}</h1>
      </div>

      {children}
    </div>
  );
}
