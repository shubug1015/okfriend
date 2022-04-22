import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PreOnlieBgImg from '@public/course/pre-online-bg.png';
import OnlieBgImg from '@public/course/online-bg.png';

const Course: NextPage = () => {
  return (
    <>
      <SEO title='연수실' />
      <Layout padding='pt-44 pb-24'>
        <div className='flex justify-center text-4xl font-bold'>
          재외동포 대학생 연수실
        </div>
        <div className='mt-4 flex justify-center font-bold'>
          사전온라인연수 / 온라인연수 바로가기
        </div>

        <div className='mt-16 grid grid-cols-2 gap-x-5'>
          <div className='relative flex h-[26rem] flex-col items-center justify-center space-y-6 rounded-lg'>
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

            <div className='text-[1.625rem] font-bold text-white'>
              사전 온라인연수
            </div>

            <Link href='/course/list/pre-online/required/1'>
              <a>
                <div className='flex h-[3.75rem] w-44 cursor-pointer items-center justify-center rounded-lg border border-white bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white'>
                  바로가기
                </div>
              </a>
            </Link>
          </div>

          <div className='relative flex h-[26rem] flex-col items-center justify-center space-y-6'>
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
              온라인연수
            </div>
            <Link href='/course/list/online/live/1'>
              <a>
                <div className='flex h-[3.75rem] w-44 cursor-pointer items-center justify-center rounded-lg border border-white bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white'>
                  바로가기
                </div>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Course;
