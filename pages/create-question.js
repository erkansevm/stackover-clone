import CreateQLayout from '../components/layout-create-q';
import CreateQuestion from  '../components/createQuestion/CreateQuestion'
import InfoBox from '../components/createQuestion/InfoBox'

export default function HomePage() {
  return (
    <CreateQLayout>
      <CreateQuestion/>
      <InfoBox></InfoBox>
    </CreateQLayout>
  );
}