import Input from './Input';
import Google from '../login-page/Google';
import GitHub from '../login-page/GitHub';
import Twitter from '../login-page/Twitter';
import styles from '../login-page/Link.module.css';

const Register = () => {
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
        <span className={styles.span}></span> Kayıtlı hesabın yokmu ? Kayıt ol
        <span className={styles.span}></span>
      </h4>
      <Input />
    </div>
  );
};

export default Register;
