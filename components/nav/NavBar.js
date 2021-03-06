import styles from './navbar.module.css'
import SearchBar from './SearchBar/SearchBar'
import BaseButton from './Buttons/BaseButton'
import ButtonNoFill from './Buttons/ButtonNoFill'

export default function NavBar() {
  return(
      <div className={styles.navbar}>
        <span>STACKOVER</span>
        <SearchBar />
        <div className={styles.btns}>
           <ButtonNoFill>Giris Yap</ButtonNoFill>
          <BaseButton>Kayıt Ol</BaseButton>
        </div>
      </div>
  )
}