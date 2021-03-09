import styles from './Content.module.css';

function Content({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}

export default Content;
