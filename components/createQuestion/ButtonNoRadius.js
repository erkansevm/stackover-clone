import styles from './button-no-radius.module.css'

export default function BaseButton({children}) {
  return(
    <button className={styles.navButton}>{children}</button>
  )
}