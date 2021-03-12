import styles from './post-info.module.css';

export default function PostExtras() {

  return (
    <div className={styles.topSection}>
      <div>
        <div className={styles.ownerAvatar}></div>
        <span className={styles.ownerName}>erkanshelby</span>
      </div>
      <span className={styles.extraInfoContainer}>
        <time className={styles.extraInfo}>Mayıs 6</time>
      </span>
    </div>
  );
}
