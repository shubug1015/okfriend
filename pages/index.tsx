import About from '@components/home/about';
import Card from '@components/home/card';
import Contact from '@components/home/contact';
import Lecture from '@components/home/lecture';
import Notice from '@components/home/notice';
import Partner from '@components/home/partner';
import Slide from '@components/home/slide';
import SEO from '@components/seo';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <SEO title='홈' />
      <Slide />
      <About />
      <Notice />
      <Lecture />
      <Card />
      <Contact />
      <Partner />
    </>
  );
};

export default Home;
