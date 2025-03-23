import styles from './Card.module.css';
import iconStar from '../../assets/images/icon-star.svg';

type CardProps = {
  title: string;
  children: React.JSX.Element;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={iconStar} />
        <h1>{title}</h1>
      </div>

      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}
