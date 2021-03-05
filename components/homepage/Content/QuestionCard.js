import styles from './Content.module.css';
import Tags from '../PopularTags/Tags';

function QuestionCard() {
  return (
    <>
      <div className={styles.card}>
        <h1>Why is running './manage.py test' executing my ...</h1>
        <div className={styles.cardcontent}>
          <div className={styles.tags}>
            <Tags name="Python" color="2cb673" />
            <Tags name="Web" color="232a34" />
          </div>
          <i className="fas fa-thumbs-up"></i>
          <div className={styles.info}>
            <h3>16 saniye önce</h3>
            <h3>0 görüntülenme</h3>
            <h3>0 cevap</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionCard;
