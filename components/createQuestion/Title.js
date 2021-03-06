import styles from './input.module.css'
export default function Title({children}){
  return(
    <div className={styles.inputBox}>
      <div>
      <span className={styles.label}>Başlık</span>
      <span className={styles.explainer}>Soru kalıbında problemi kısaca anlatın.</span>
      </div>
      <input className={styles.input} placeholder={children}></input>
    </div>
    
  )
}