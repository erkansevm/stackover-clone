import { useState } from 'react';
import styles from './PopularTags.module.css';
import Tags from './Tags';

function PopularTags() {
  const [tags] = useState(['Python', 'Web', 'Android', 'Ios']);

  return (
    <>
      <div className={styles.popularTags}>
        <div className={styles.title}>
          <h1>Popüler Tagler</h1>
        </div>
        <div className={styles.container}>
          {tags.map((tag, index) => (
            <Tags key={index} name={tag} color="232a34" />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularTags;
