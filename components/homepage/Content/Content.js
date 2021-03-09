import styles from './Content.module.css';
import QuestionCard from './QuestionCard';

function Content({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}

export default Content;
