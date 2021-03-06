import styles from './content.module.css'
export default function Detay({children}){
  return(
    <div className={styles.inputBox}>
      <div>
      <span className={styles.label}>Detay</span>
      <span className={styles.explainer}>Sorunuz alakalı gereken bütün detayları girin.</span>
      </div>
      <textarea className={styles.input} />
    </div>
    
  )
}