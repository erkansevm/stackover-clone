import styles from './Link.module.css';

const Google = () => {
  return (
    <>
      <a
        href="#"
        className={styles.link_box}
        style={{ backgroundColor: `#fff` }}
      >
        <h3 style={{ color: 'black' }}>
          <i className={`fab fa-google`}></i>
          Google ile devam et
        </h3>
      </a>
    </>
  );
};

export default Google;
