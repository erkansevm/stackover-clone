import styles from './etiket.module.css'
export default function Etiket({children}) {
  return (
    <div className={styles.etiket}>
      <span>{children}</span>
      <i className="fas fa-times"></i>
    </div>
  );
}