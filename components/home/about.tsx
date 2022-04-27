import Image from 'next/image';
import BgImg from '@public/home/about-bg.png';
import Layout from '@layouts/sectionLayout';

export default function About() {
  return (
    <div className='relative flex w-screen justify-center py-[5.812rem] md:py-12'>
      <div className='absolute top-0 left-0 -z-[1] h-full w-full'>
        <Image
          src={BgImg}
          alt='About Us Background'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
      </div>

      <Layout>
        <div className='flex flex-col items-center text-white'>
          <div className='font-sans text-4xl font-bold md:text-2xl'>
            About Us
          </div>

          <div className='mt-4 flex flex-col items-center text-[1.625rem] md:hidden'>
            <div>
              재외동포 대학생과 국내교류참가자가 함께 실시간으로 소통하고
              교류하는 공간으로
            </div>
            <div className='font-bold text-[#31b7bc]'>
              새로운 변화의 미래를 체감하는 온라인 플랫폼입니다.
            </div>
          </div>

          <div className='mt-4 hidden text-center text-base md:block'>
            재외동포 대학생과 국내교류참가자가 함께 실시간으로 소통하고 교류하는
            공간으로{' '}
            <span className='font-bold text-[#31b7bc]'>
              새로운 변화의 미래를 체감하는 온라인 플랫폼입니다.
            </span>
          </div>
        </div>
      </Layout>
    </div>
  );
}
