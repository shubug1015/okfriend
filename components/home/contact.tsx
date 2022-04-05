import Image from 'next/image';
import BgImg from '@public/home/contact-bg.png';
import Layout from '@layouts/sectionLayout';

export default function Contact() {
  return (
    <div className='relative flex pt-[5.688rem] pb-[6.875rem] justify-center w-screen'>
      <Image
        src={BgImg}
        alt='Contact Background'
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        className='-z-[1]'
      />

      <Layout>
        <div className='text-white'>
          <div className='border border-white rounded-md font-bold w-[5.875rem] h-9 flex items-center justify-center'>
            지원센터
          </div>
          <div className='text-[3.438rem] mt-4 font-bold font-sans'>
            Contact
          </div>
          <div className='text-[1.375rem] mt-4'>
            궁금한 사항에 대해 신속히 답변드리겠습니다.
          </div>
          <div className='bg-white flex justify-center mt-11 items-center w-28 h-10 rounded-full text-[#01111e] font-bold'>
            1:1 문의하기
          </div>
        </div>
      </Layout>
    </div>
  );
}
