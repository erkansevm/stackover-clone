import styles from './your-answer.module.css';
import BaseButton from '../nav/Buttons/BaseButton'

export default function YourAnswer() {

  return (
    <div className={styles.answerArea}>
      <div className={styles.topSection}>
        <div>
          <span className={styles.ownerName}>Your Answer</span>
        </div>
      </div>
      <textarea className={styles.input} />
      <BaseButton>Gönder</BaseButton>
    </div>
  );
}
