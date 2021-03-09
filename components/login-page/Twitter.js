import styles from './Link.module.css';

const GitHub = () => {
  return (
    <>
      <a
        href="#"
        className={styles.link_box}
        style={{ backgroundColor: `#1da1f2` }}
      >
        <h3 style={{ color: '000' }}>
          <i className={`fab fa-twitter`}></i>
          Twitter ile devam et
        </h3>
      </a>
    </>
  );
};

export default GitHub;
