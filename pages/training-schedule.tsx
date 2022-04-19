import Banner from '@components/banner';
import { NextPage } from 'next';
import Image from 'next/image';
import Schedule1 from '@public/training-introduction/schedule-1.png';
import Layout from '@layouts/sectionLayout';
import MenuBar from '@components/greeting/menuBar';

const TrainingSchedule: NextPage = () => {
  return (
    <>
      <Banner
        title='재회동포 대학생 온라인연수 소개'
        navList={['온라인연수 소개', '연수편성표']}
      />

      <MenuBar pageName='연수 편성표' />

      <Layout>
        {/* 필수과정프로그램일정표 */}
        <div className='pt-[65.93px] pb-[76px]'>
          <div className='text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
            <span className='text-[#2fb6bc]'>필수과정</span> 프로그램 일정표
          </div>
          <div className='relative mt-10 h-[896px] w-[1179px]'>
            <Image
              src={Schedule1}
              alt='Schedule Page Main Image'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TrainingSchedule;
