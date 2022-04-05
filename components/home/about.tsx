import Image from 'next/image';
import BgImg from '@public/home/about-bg.png';

export default function About() {
  return (
    <div className='relative flex py-[5.812rem] justify-center w-screen'>
      <div className='absolute top-0 left-0 w-full h-full -z-[1]'>
        <Image
          src={BgImg}
          alt='About Us Background'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
      </div>

      <div className='text-white flex flex-col items-center'>
        <div className='text-4xl font-bold font-sans'>About Us</div>
        <div className='text-[1.625rem] mt-4'>
          재외동포 대학생과 국내교류참가자가 함께 실시간으로 소통하고 교류하는
          공간으로
        </div>
        <div className='text-[1.625rem] text-[#31b7bc] font-bold'>
          새로운 변화의 미래를 체감하는 온라인 플랫폼입니다.
        </div>
      </div>
    </div>
  );
}
