import Input from './Input';
import Google from './Google';
import GitHub from './GitHub';
import Twitter from './Twitter';
import styles from './Link.module.css';

const Logın = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Stackover'a Hoşgeldiniz</h2>
        <h4>
          <span>Stackover</span> 33.807 muhteşem yazılımcıdan oluşan bir
          topluluk
        </h4>
      </div>
      <Google />
      <GitHub />
      <Twitter />
      <h4 className={styles.h4}>
        <span className={styles.span}></span> Kayıtlı hesabın varmı ? Giriş yap
        <span className={styles.span}></span>
      </h4>
      <Input />
    </div>
  );
};

export default Logın;
