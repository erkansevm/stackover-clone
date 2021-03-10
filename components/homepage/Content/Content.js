import styles from './Content.module.css';

function Content({ children }) {
  return (
    <>
      <div className={styles.container}>
        {children}
        <div className={styles.empty}></div>
        <span className={styles.span}></span>
        <div>Sayfa Sonuna geldiniz</div>
      </div>
    </>
  );
}

export default Content;
