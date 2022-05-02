import Banner from '@components/banner';
import { NextPage } from 'next';
import Image from 'next/image';
import Schedule1 from '@public/course-introduction/schedule-1.png';
import Schedule2 from '@public/course-introduction/schedule-2.png';
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
        <div className='pt-[4.089rem] pb-[10.375rem]'>
          {/* 온라인연수 15과정 */}
          <div className='text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
            <span className='text-[#2fb6bc]'>온라인연수</span> 15과정
          </div>
          <div className='relative mt-[1.375rem] h-[961px] w-full'>
            <Image
              src={Schedule1}
              alt='Schedule Page Image 1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>

          {/* 사전온라인연수 8과정 */}
          <div className='mt-16 text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
            <span className='text-[#2fb6bc]'>사전온라인연수</span> 8과정
          </div>
          <div className='relative mt-[1.375rem] h-[541px] w-full'>
            <Image
              src={Schedule2}
              alt='Schedule Page Image 2'
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
