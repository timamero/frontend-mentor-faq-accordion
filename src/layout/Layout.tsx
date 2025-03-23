import styles from './Layout.module.css';

type LayoutProps = {
  children: React.JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.bg}></div>
      {children}
    </div>
  );
}
