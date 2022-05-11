import About from '@components/home/about';
import Card from '@components/home/card';
import Contact from '@components/home/contact';
import Course from '@components/home/course';
import Notice from '@components/home/notice';
// import Partner from '@components/home/partner';
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
      <Course />
      <Card />
      <Contact />
      {/* <Partner /> */}
    </>
  );
};

export default Home;
