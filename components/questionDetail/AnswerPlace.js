import styles from './answer-place.module.css';
import PostExtras from './PostExtras'
import CodeSection from './CodeSection'

export default function AnswerPlace() {

  return (
    <div className={styles.answerArea}>
        <PostExtras></PostExtras>
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

    </div>
  );
}
