import { Facebook, Instagram, Youtube, FooterLogo } from '@components/svg';
import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-screen bg-[#01111e] pt-14 pb-8 md:pt-10 md:pb-14'>
      <div className='mx-auto flex max-w-[1400px] md:flex-col md:items-center'>
        <div className='w-1/3 md:flex md:w-full md:justify-center'>
          <FooterLogo />
        </div>

        <div className='w-1/3 md:flex md:w-full md:justify-center'>
          <div className='text-[#777777] md:mt-3.5 md:text-center md:text-[0.688rem]'>
            2021 재외동포 대학생 온라인연수 운영사무국
            <br />
            +82-51-440-3353 / +82-51-714-3119
            <br />
            okfyouthcamp@gmail.com
          </div>

          <div className='mt-10 text-sm text-[#9e9e9e] md:hidden'>
            COPYRIGHT 2021. 재외동포 대학생 온라인연수 ALL RIGHTS RESERVED.
          </div>
        </div>

        <div className='flex w-1/3 flex-col items-end justify-between md:w-full md:items-center'>
          <div className='flex items-center space-x-8 md:hidden'>
            <Instagram />
            <Facebook />
            <Youtube />
          </div>

          <div className='mt-8 flex items-center space-x-4 md:mt-5 md:space-x-2.5 md:text-[0.8rem]'>
            <Link href='/'>
              <a>
                <div className='text-[#d6d6d6]'>서비스 이용약관</div>
              </a>
            </Link>

            <div className='text-sm text-[#9e9e9e]'>|</div>
            <Link href='/'>
              <a>
                <div className='text-[#d6d6d6]'>이메일무단수집거부</div>
              </a>
            </Link>

            <div className='text-sm text-[#9e9e9e]'>|</div>
            <Link href='/'>
              <a>
                <div className='text-[#d6d6d6]'>개인정보처리방침</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
