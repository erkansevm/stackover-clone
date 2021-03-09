import Content from './Content/Content';
import CreateQuestion from './CreateQuestion/CreateQuestion';
import Information from './Information/Information';
import PopularTags from './PopularTags/PopulerTags';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.big}>
      <div className={styles.container}>
        <div className={styles.left}>
          <CreateQuestion />
          <PopularTags />
        </div>
        <div className="middle">
          <Content />
        </div>

        <div className={styles.right}>
          <Information />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
