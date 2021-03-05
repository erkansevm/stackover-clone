import styles from './PopularTags.module.css';

function PopularTags({ name, color }) {
  return (
    <>
      <a
        href="#"
        className={styles.tag}
        style={{ backgroundColor: `#${color}` }}
      >
        {name}
      </a>
    </>
  );
}

export default PopularTags;
