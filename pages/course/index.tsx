import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PreOnlieBgImg from '@public/course/pre-online-bg.png';
import OnlieBgImg from '@public/course/online-bg.png';
import { useLocale } from '@libs/client/useLocale';

const Course: NextPage = () => {
  const { text } = useLocale();
  return (
    <>
      <SEO title='연수실' />
      <div className='w-screen pt-44 pb-24 md:pt-32'>
        <div className='mx-auto w-full max-w-[1180px] md:max-w-[330px]'>
          {/* <Layout padding='pt-44 pb-24'> */}
          <div className='flex justify-center font-nexonBold text-4xl font-bold md:text-3xl'>
            {text.course['1']}
          </div>
          <div className='mt-4 flex justify-center font-nexonBold font-bold md:mt-2'>
            {text.course['2']}
          </div>

          {/* 사전 온라인연수 */}
          <div className='mt-16 grid grid-cols-2 gap-x-5 md:mt-10 md:grid-cols-1 md:gap-x-0 md:gap-y-5'>
            <div className='relative flex h-[26rem] flex-col items-center justify-center space-y-6 rounded-lg md:h-60 md:space-y-4'>
              <div className='absolute top-0 left-0 -z-[1] h-full w-full'>
                <Image
                  src={PreOnlieBgImg}
                  alt='Pre Online Course Background Image'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                  className='rounded-lg'
                />
              </div>

              <div className='text-[1.625rem] font-bold text-white md:text-2xl'>
                {text.course['3']}
              </div>

              <Link href='/course/list/pre-online/required/1'>
                <a>
                  <div className='flex h-[3.75rem] w-44 cursor-pointer items-center justify-center rounded-lg border border-white bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white md:h-14 md:w-36 md:text-lg'>
                    {text.course['4']}
                  </div>
                </a>
              </Link>
            </div>
            {/* 사전 온라인연수 */}

            {/* 온라인연수 */}
            <div className='relative flex h-[26rem] flex-col items-center justify-center space-y-6 md:h-60 md:space-y-4'>
              <div className='absolute top-0 left-0 -z-[1] h-full w-full'>
                <Image
                  src={OnlieBgImg}
                  alt='Online Course Background Image'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                  className='rounded-lg'
                />
              </div>
              <div className='text-[1.625rem] font-bold text-white'>
                {text.course['5']}
              </div>
              <Link href='/course/list/online/required/1'>
                <a>
                  <div className='flex h-[3.75rem] w-44 cursor-pointer items-center justify-center rounded-lg border border-white bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white md:h-14 md:w-36 md:text-lg'>
                    {text.course['6']}
                  </div>
                </a>
              </Link>
            </div>
            {/* 온라인연수 */}
          </div>
          {/* </Layout> */}
        </div>
      </div>
    </>
  );
};

export default Course;
