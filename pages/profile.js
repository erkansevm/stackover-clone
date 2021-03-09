import Layout from '../components/layout';
import ProfilBg from '../components/profil page/bg/ProfilBg';
import ProfilCard from '../components/profil page/profil/ProfilCard';
import Content from '../components/homepage/Content/Content';
import CreateQuestion from '../components/homepage/CreateQuestion/CreateQuestion';
import styles from '../styles/profilepage.module.css';
export default function Profile() {
  return (
    <Layout>
      <div className={styles.container}>
        <ProfilBg />
        <ProfilCard />
        <div className={styles.content}>
          <Content />
        </div>
        <div className={styles.create}>
          <CreateQuestion />
        </div>
      </div>
    </Layout>
  );
}
