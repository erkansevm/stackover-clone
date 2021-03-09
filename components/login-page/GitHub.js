import styles from './Link.module.css';

const GitHub = () => {
  return (
    <>
      <a
        href="#"
        className={styles.link_box}
        style={{ backgroundColor: `#000` }}
      >
        <h3 style={{ color: '000' }}>
          <i className={`fab fa-github`}></i>
          GitHub ile devam et
        </h3>
      </a>
    </>
  );
};

export default GitHub;
