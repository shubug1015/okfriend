import Image from 'next/image';
import BgImg from '@public/home/about-bg.png';
import Layout from '@layouts/sectionLayout';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocale } from '@libs/client/useLocale';

export default function About() {
  const { text } = useLocale();
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
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
          <div
            data-aos='flip-down'
            data-aos-duration='1500'
            className='font-quicksand text-4xl font-bold md:text-2xl'
          >
            About Us
          </div>

          <div
            data-aos='fade-up'
            data-aos-duration='1500'
            data-aos-delay='300'
            className='mt-5 flex flex-col items-center whitespace-pre-wrap text-[1.625rem] md:hidden'
          >
            <div>{text.main['2']}</div>
            <div className='font-bold text-[#31b7bc]'>{text.main['3']}</div>
          </div>

          <div className='mt-4 hidden text-center text-base md:block'>
            {text.main['1']}{' '}
            <span className='font-bold text-[#31b7bc]'>{text.main['2']}</span>
          </div>
        </div>
      </Layout>
    </div>
  );
}
