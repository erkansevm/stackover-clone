import styles from './CreateQuestion.module.css';

function CreateQuestion() {
  return (
    <>
      <div className={styles.question}>
        <h3>Takıldığın yerde yardım almak artık çok kolay</h3>
        <a href="#" className={styles.green_color}>
          Soru Oluştur
        </a>
      </div>
    </>
  );
}

export default CreateQuestion;
