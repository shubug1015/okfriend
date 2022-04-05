import Image from 'next/image';
import Link from 'next/link';
import { cls } from '@libs/utils';
import { Facebook, Instagram, Youtube, FooterLogo } from '@libs/svg';
import Layout from '@layouts/sectionLayout';

export default function Footer() {
  return (
    <footer className='bg-[#01111e] py-16'>
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

            <div className='text-[#cdcdcd] mt-10'>
              COPYRIGHT 2021. 재외동포 대학생 온라인연수 ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
}
