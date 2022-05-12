import Image from 'next/image';
import BgImg from '@public/home/contact-bg.png';
import Layout from '@layouts/sectionLayout';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocale } from '@libs/client/useLocale';

export default function Contact() {
  const { text } = useLocale();
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className='relative flex w-screen justify-center pt-[5.688rem] pb-[6.875rem] md:pt-10 md:pb-14'>
      <div className='absolute top-0 left-0 z-[-1] h-full w-full'>
        <Image
          src={BgImg}
          alt='Contact Background'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
      </div>

      <Layout>
        <div className='text-white'>
          <div className='inline rounded-md border border-white px-5 py-1.5 font-bold md:h-[1.85rem] md:w-[4.75rem] md:text-[0.81rem]'>
            {text.main['18']}
          </div>

          <div
            data-aos='flip-down'
            data-aos-duration='1500'
            className='mt-4 font-quicksand text-[3.438rem] font-bold md:text-[2.125rem]'
          >
            {text.main['14']}
          </div>

          <div
            data-aos='fade-up'
            data-aos-duration='1500'
            data-aos-delay='300'
            className='mt-4 text-[1.375rem] md:mt-0.5 md:text-base'
          >
            {text.main['15']}
          </div>

          <Link href='/support/contact'>
            <a>
              <div
                data-aos='fade-up'
                data-aos-duration='1500'
                data-aos-delay='300'
                className='mt-11 flex h-10 w-32 items-center justify-center rounded-full bg-white font-bold text-[#01111e] md:mt-6 md:w-28 md:text-[0.94rem]'
              >
                {text.main['19']}
              </div>
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
