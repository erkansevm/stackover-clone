import Content from '../homepage/Content/Content';
import CreateQuestion from '../homepage/CreateQuestion/CreateQuestion';
import Information from '../homepage/Information/Information';
import PopularTags from '../homepage/PopularTags/PopulerTags';
import QuestionPlace from './questionPlace';
import AnswerPlace from './AnswerPlace'
import YourAnswer from './YourAnswer'
import styles from '../homepage/HomePage.module.css';



export default function QuestionDetail() {
  return (
    <div className={styles.big}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.responsive}>
            <Information />
          </div>
          <CreateQuestion />
          <PopularTags />
        </div>
        <div className={styles.middle}>
          <Content>
           <QuestionPlace></QuestionPlace>
           <AnswerPlace></AnswerPlace>
           <AnswerPlace></AnswerPlace>
           <YourAnswer></YourAnswer>
          </Content>
        </div>

        <div className={styles.right}>
          <Information />
        </div>
      </div>
    </div>
  );
}