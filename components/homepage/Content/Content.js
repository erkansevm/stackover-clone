import styles from './Content.module.css';
import QuestionCard from './QuestionCard';

function Content() {
  return (
    <>
      <div className={styles.container}>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </>
  );
}

export default Content;
