import styles from './etiketler.module.css'
export default function Etiketler({children}){
  const isFull = ()=>{
    return children === undefined ? 'Örn: javascirpt':'';
  }
  return(
    <div className={styles.inputBox}>
      <div className={styles.labels}>
      <span className={styles.label}>Etiketler</span>
      <span className={styles.explainer}>Sorunuzun  ne hakkında olduğunu açıklamak için en fazla 5 etiket .</span>
      </div>
      <div className={styles.etiketBox}>
        {children}
        <input className={styles.input} placeholder={isFull()}/>
      </div>
     
    </div>
    
  )
}