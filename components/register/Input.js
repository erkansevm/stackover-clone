import styles from '../login-page/Input.module.css';

const Input = () => {
  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Kullanıcı adı"
          className={styles.inputbox}
        />
        <br />
        <input type="email" placeholder="Eposta" className={styles.inputbox} />
        <br />

        <input
          type="password"
          placeholder="Şifre"
          className={styles.inputbox}
        />
        <br />

        <button type="submit" className={styles.button}>
          Kayıt ol
        </button>
      </form>
    </>
  );
};

export default Input;
