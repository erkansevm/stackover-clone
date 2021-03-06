/* Home Page deneme  */
import Layout from '../components/layout';
import CreateQuestion from '../components/homepage/CreateQuestion/CreateQuestion';
import PopularTags from '../components/homepage/PopularTags/PopulerTags';
import Information from '../components/homepage/Information/Information';
import Content from '../components/homepage/Content/Content';
import styles from '../styles/homepage.module.css';
export default function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.createquestion}>
          <CreateQuestion />
        </div>

        <div className={styles.populartags}>
          <PopularTags />
        </div>

        <div className={styles.information}>
          <Information />
        </div>

        <Content />
      </div>
    </Layout>
  );
}
