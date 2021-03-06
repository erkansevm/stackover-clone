import styles from './search-bar.module.css'
export default function SearchBar({children}) {
  return(
     <div className={styles.inputBox}>
       <i className="fas fa-search"></i>
       <input  placeholder='Ara...'></input>
     </div>

  )
}