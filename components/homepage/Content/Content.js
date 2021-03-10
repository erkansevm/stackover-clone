import styles from './Content.module.css';

function Content({ children }) {
  return (
    <>
      <div className={styles.container}>
        {children}
        <div className={styles.empty}></div>
      </div>
    </>
  );
}

export default Content;
