import Banner from '@components/banner';
import { NextPage } from 'next';
import Image from 'next/image';
import Schedule1 from '@public/course-introduction/schedule-1.png';
import Schedule2 from '@public/course-introduction/schedule-2.png';
import Schedule1m from '@public/course-introduction/schedule-1-m.png';
import Schedule2m from '@public/course-introduction/schedule-2-m.png';
import Layout from '@layouts/sectionLayout';
import MenuBar from '@components/greeting/menuBar';
import SEO from '@components/seo';
import { useLocale } from '@libs/client/useLocale';

const TrainingSchedule: NextPage = () => {
  const { text } = useLocale();
  return (
    <>
      <SEO title='온라인연수 소개' />
      <Banner
        title={text.schedule['1']}
        navList={[text.schedule['2'], text.schedule['3']]}
      />

      <MenuBar pageName={text.schedule['6']} />

      <Layout>
        <div className='pt-[4.089rem] pb-[10.375rem] md:pt-6 md:pb-11'>
          {/* 온라인연수 과정 */}
          <div className='font-nexonBold text-4xl font-bold leading-[3.15rem] text-[#01111e] md:text-xl'>
            <span className='text-[#2fb6bc]'>{text.schedule['7']}</span>{' '}
            {text.schedule['8']}
          </div>
          <div className='relative mt-[1.375rem] h-[961px] w-full md:hidden'>
            <Image
              src={Schedule1}
              alt='Schedule Page Image 1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
          <div className='relative mt-[2.063rem] hidden h-[66.688rem] w-full md:block'>
            <Image
              src={Schedule1m}
              alt='Schedule Page Image 1'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>

          {/* 사전온라인연수 과정 */}
          <div className='mt-16 font-nexonBold text-4xl font-bold leading-[3.15rem] text-[#01111e] md:mt-10 md:text-xl'>
            <span className='text-[#2fb6bc]'>{text.schedule['9']}</span>{' '}
            {text.schedule['10']}
          </div>
          <div className='relative mt-[1.375rem] h-[541px] w-full md:hidden'>
            <Image
              src={Schedule2}
              alt='Schedule Page Image 2'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
            />
          </div>
          <div className='relative mt-[0.875rem] hidden h-[598px] w-full md:block'>
            <Image
              src={Schedule2m}
              alt='Schedule Page Image 1'
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
