import Image from 'next/image';
import BgImg from '@public/home/contact-bg.png';
import Layout from '@layouts/sectionLayout';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
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
          <div className='flex h-9 w-[5.875rem] items-center justify-center rounded-md border border-white font-bold md:h-[1.85rem] md:w-[4.75rem] md:text-[0.81rem]'>
            지원센터
          </div>
          <div
            data-aos='flip-down'
            data-aos-duration='1500'
            className='mt-4 font-quicksand text-[3.438rem] font-bold md:text-[2.125rem]'
          >
            Contact
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1500'
            data-aos-delay='300'
            className='mt-4 text-[1.375rem] md:mt-0.5 md:text-base'
          >
            궁금한 사항에 대해 신속히 답변드리겠습니다.
          </div>

          <Link href='/support/contact'>
            <a>
              <div
                data-aos='fade-up'
                data-aos-duration='1500'
                data-aos-delay='300'
                className='mt-11 flex h-10 w-32 items-center justify-center rounded-full bg-white font-bold text-[#01111e] md:mt-6 md:w-28 md:text-[0.94rem]'
              >
                1:1 문의하기
              </div>
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
