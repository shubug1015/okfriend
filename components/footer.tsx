import { Facebook, Instagram, Youtube, FooterLogo } from '@components/svg';
import Layout from '@layouts/sectionLayout';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#01111e] pt-14 pb-8'>
      <Layout>
        <div className='flex justify-between'>
          <div>
            <FooterLogo />

            <div className='flex space-x-8 items-center mt-7'>
              <Instagram />
              <Facebook />
              <Youtube />
            </div>
          </div>

          <div>
            <div className='text-[#777777]'>
              2021 재외동포 대학생 온라인연수 운영사무국
              <br />
              +82-51-440-3353 / +82-51-714-3119
              <br />
              okfyouthcamp@gmail.com
            </div>

            <div className='text-[#9e9e9e] text-sm mt-10'>
              COPYRIGHT 2021. 재외동포 대학생 온라인연수 ALL RIGHTS RESERVED.
            </div>

            <div className='flex items-center space-x-4 mt-8'>
              <Link href='/'>
                <a>
                  <div className='text-[#d6d6d6]'>서비스 이용약관</div>
                </a>
              </Link>

              <div className='text-[#9e9e9e] text-sm'>|</div>
              <Link href='/'>
                <a>
                  <div className='text-[#d6d6d6]'>이메일무단수집거부</div>
                </a>
              </Link>

              <div className='text-[#9e9e9e] text-sm'>|</div>
              <Link href='/'>
                <a>
                  <div className='text-[#d6d6d6]'>개인정보처리방침</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
}
