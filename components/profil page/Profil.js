import Content from '../homepage/Content/Content';
import CreateQuestion from '../homepage/CreateQuestion/CreateQuestion';
import styles from './Profile.module.css';
import QuestionCard from '../homepage/Content/QuestionCard';
import ProfilCard from './profil/ProfilCard';
import ProfilBg from './bg/ProfilBg';

function Profil() {
  return (
    <>
      <ProfilBg />
      <div className={styles.big}>
        <div className={styles.container}>
          <div className={styles.left}>
            <ProfilCard />
          </div>
          <div className={styles.middle}>
            <Content>
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
            </Content>
          </div>

          <div className={styles.right}>
            <CreateQuestion />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profil;
