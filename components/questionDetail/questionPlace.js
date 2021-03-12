import styles from './question-place.module.css';
import { useState } from 'react';
import Tags from '../homepage/PopularTags/Tags'
import PostInfo from './PostExtras'
import CodeSection from './CodeSection';

export default function QuestionPlace() {
  const [tags] = useState(['Python', 'Web', 'Android', 'Ios']);

  return (
    <div className={styles.questionArea}>

      <div className={styles.topSectionContainer}>
        <h1 className={styles.questionTitle}>
          Check for changes to an SQL Server table?
        </h1>
          <PostInfo></PostInfo>
      </div>

      <div className={styles.content}>
        <p>
          How can I monitor an SQL Server database for changes to a table
          without using triggers or modifying the structure of the database in
          any way? My preferred programming environment is .NET and C#. I'd like
          to be able to support any SQL Server 2000 SP4 or newer. My application
          is a bolt-on data visualization for another company's product. Our
          customer base is in the thousands, so I don't want to have to put in
          requirements that we modify the third-party vendor's table at every
          installation.
        </p>

        <CodeSection></CodeSection>
        <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
            <Tags key={index} name={tag} color="232a34" />
          ))}
        </div>
      </div>
    </div>
  );
}
/*
<div className={styles.topSection}>
<div>
  <div className={styles.ownerAvatar}></div>
  <span className={styles.ownerName}>erkanshelby</span>
</div>
<span className={styles.extraInfoContainer}>
  <time className={styles.extraInfo}>Mayıs 6</time>
</span>
</div> */