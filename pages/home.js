/* Home Page deneme  */
import Layout from '../components/layout';
import CreateQuestion from '../components/homepage/CreateQuestion/CreateQuestion';
import PopularTags from '../components/homepage/PopularTags/PopulerTags';
import Information from '../components/homepage/Information/Information';
import Content from '../components/homepage/Content/Content';
export default function HomePage() {
  return (
    <Layout>
      <CreateQuestion />
      <PopularTags />
      <Information />
      <Content />
    </Layout>
  );
}
