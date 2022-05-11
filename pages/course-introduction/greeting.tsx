import type { NextPage } from 'next';
import Banner from '@components/banner';
import Online from '@components/greeting/online';
import MenuBar from '@components/greeting/menuBar';
import SEO from '@components/seo';
import { useLocale } from '@libs/client/useLocale';

const Greeting: NextPage = () => {
  const { text } = useLocale();
  return (
    <>
      <SEO title='온라인연수 소개' />
      <Banner
        title={text.greeting['1']}
        navList={[text.greeting['2'], text.greeting['3']]}
      />
      <MenuBar pageName={text.greeting['4']} />
      <Online />
    </>
  );
};

export default Greeting;
