import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { NextPage } from 'next';
import Image from 'next/image';
import BgImg from '@public/home/about-bg.png';

const Course: NextPage = () => {
  return (
    <>
      <SEO title='연수실' />
      <div className='relative h-80 flex items-center'>
        <div className='absolute top-0 left-0 w-full h-full -z-[1]'>
          <Image
            src={BgImg}
            alt='About Us Background'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
          />
        </div>

        <Layout>
          <div className='flex justify-between items-end'>
            <div className='text-4xl font-bold text-white'>
              제외동포 대학생 연수실
            </div>
          </div>
        </Layout>
      </div>

      <div className='flex justify-center items-center h-16 border-b border-[#e8e8e8]'>
        <div className='flex justify-center w-48 h-full items-center text-[1.375rem] font-bold border-b-4 border-[#2fb6bc]'>
          필수 차시
        </div>
        <div className='flex justify-center w-48 h-full items-center text-[1.375rem] font-bold'>
          선택 차시
        </div>
        <div className='flex justify-center w-48 h-full items-center text-[1.375rem] font-bold'>
          지난 연수 자료
        </div>
      </div>

      <Layout padding='pt-14 pb-32'>
        <div className='text-4xl font-bold flex justify-center whitespace-pre-wrap'>
          <span className='text-[#d60a51]'>필수 </span>차시 강의 시청 시
          유의사항
        </div>

        <div>
          <div className='w-1/2 h-[6.875rem] bg-[rgba(214,10,81,0.05)] border-t-2 border-[#d60a51]'></div>
        </div>
      </Layout>
    </>
  );
};

export default Course;
