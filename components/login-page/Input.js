import styles from './Input.module.css';

const Input = () => {
  return (
    <>
      <form className={styles.form}>
        <input type="email" placeholder="Eposta" className={styles.inputbox} />
        <br />

        <input
          type="password"
          placeholder="Şifre"
          className={styles.inputbox}
        />
        <br />
        <button type="submit" className={styles.button}>
          Giriş Yap
        </button>
      </form>
    </>
  );
};

export default Input;
