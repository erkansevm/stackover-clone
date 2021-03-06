import styles from './info-box.module.css'
export default function InfoBox(){

  return(
    <div className={styles.infoBox}>
     
      <span className={styles.label}>Kod satırı eklemek istiyorsanız</span>
      <span className={styles.text}>Örnek:
<br/>--kod--<br/><br/> --kod--</span>

    </div>
    
  )
}