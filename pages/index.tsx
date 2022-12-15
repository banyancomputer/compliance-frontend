import BaseTemplate from '../components/templates/BaseTemplate';
import { mockBaseTemplateProps } from '../components/templates/BaseTemplate.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Test Header</h1>
      <body>
        <BaseTemplate {...mockBaseTemplateProps} />
      </body>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
