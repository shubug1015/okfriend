import type { NextPage } from 'next';
import Banner from '@components/banner';
import Online from '@components/greeting/online';
import MenuBar from '@components/greeting/menuBar';

const Greeting: NextPage = () => {
  return (
    <>
      <Banner
        title='재외동포 대학생 온라인연수 소개'
        navList={['온라인연수 소개', '인사말']}
      />
      <MenuBar pageName='인사말' />
      <Online />
    </>
  );
};

export default Greeting;
