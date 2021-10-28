import type { NextPage } from 'next';
import styles from './index.module.scss';
import { Header } from '../components/Common/Header/Header';
import { HomeBanner } from '../components/Home/HomeBanner/HomeBanner';
import { Footer } from '../components/Common/Footer/Footer';
import { Features } from '../components/Home/Features/Features';
const Home: NextPage = () => {
  return (
    <div className={styles['home-page']}>
      <Header />
      <HomeBanner />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
