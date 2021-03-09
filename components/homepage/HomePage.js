import Content from './Content/Content';
import CreateQuestion from './CreateQuestion/CreateQuestion';
import Information from './Information/Information';
import PopularTags from './PopularTags/PopulerTags';
import styles from './HomePage.module.css';
import QuestionCard from './Content/QuestionCard';

function HomePage() {
  return (
    <div className={styles.big}>
      <div className={styles.container}>
        <div className={styles.left}>
          <CreateQuestion />
          <PopularTags />
        </div>
        <div className="middle">
          <Content>
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
          </Content>
        </div>

        <div className={styles.right}>
          <Information />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
