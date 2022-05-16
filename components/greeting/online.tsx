import Image, { StaticImageData } from 'next/image';
import Bg1 from '@public/course-introduction/bg1.png';
import Bg2 from '@public/course-introduction/bg2.png';
import Bg1m from '@public/course-introduction/bg1-m.png';
import Bg2m from '@public/course-introduction/bg2-m.png';
import Bg1mEn from '@public/course-introduction/bg1-en-m.png';
import Bg2mEn from '@public/course-introduction/bg2-en-m.png';
import Bg1mRu from '@public/course-introduction/bg1-ru-m.png';
import Bg2mRu from '@public/course-introduction/bg2-ru-m.png';
import Sign1 from '@public/course-introduction/sign1.png';
import Sign2 from '@public/course-introduction/sign2.png';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter, imgFilter } from '@libs/client/utils';

export default function Online() {
  const { locale, text } = useLocale();
  return (
    <div>
      {/* 김성곤입니다. */}
      <div className='relative h-[33vw]'>
        <div className='absolute top-0 left-0 -z-[1] mt-[83px] h-full w-full md:hidden'>
          <Image
            src={Bg1}
            alt='Background Image1'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
        </div>
        {/* 온라인연수에 - 환영합니다. */}
        <div className='flex justify-center'>
          <div className='flex w-[61.25rem] justify-end'>
            <div className='w-[32rem] pt-[4.214rem] md:w-screen md:pt-[1.875rem]'>
              <div
                className={cls(
                  clsFilter(locale, 'text-[2.5rem]', 'text-xs', 'text-5xl'),
                  'font-nexon text-[#01111e] md:mx-[1.563rem] md:text-xl'
                )}
              >
                {text.greeting['7']}
                <br />
                <span className='font-nexonBold font-bold text-[#2fb6bc]'>
                  {text.greeting['8']}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 재외동포재단 이사장 김성곤입니다. */}
        <div className='flex justify-center'>
          <div className='flex w-[61.25rem] justify-end'>
            <div className='w-[32rem] md:w-screen md:pb-[15.438rem] md:pt-[1.875rem]'>
              <div className='relative hidden h-[15.375rem] md:block'>
                <div className='absolute top-0 left-0 z-[-1] h-full w-full'>
                  <Image
                    src={imgFilter(locale, Bg1m, Bg1mEn, Bg1mRu)}
                    alt='Background Image1'
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                    quality={100}
                  />
                </div>
              </div>

              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mt-40 md:hidden'
              >
                <path d='M2 28V2H28' stroke='#F8F8F8' strokeWidth='4' />
              </svg>
              <div className='ml-[1.625rem] md:hidden'>
                <div className='text-xl font-bold text-white'>
                  {text.greeting['9']}
                </div>
                <div className='mt-[15px] font-nexon text-[2.5rem] leading-[55px] text-white'>
                  {text.greeting['10']}
                  <br />
                  <span className='font-nexonBold font-bold text-[#2fb6bc]'>
                    {text.greeting['11']}
                  </span>
                </div>
              </div>
              <div className='flex translate-y-[-20] justify-end md:hidden'>
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-[4.25rem]'
                >
                  <path d='M26 0L26 26L0 26' stroke='#F8F8F8' strokeWidth='4' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 영상1 */}
      {/* <div className='flex justify-center'>
        <div className='mt-[-331px] h-[35.875rem] w-[61.25rem] bg-slate-400 md:mx-[1.563rem] md:mt-[-36px] md:h-[12.044rem] md:w-screen md:rounded' />
      </div> */}

      {/* 2022 - 환영합니다.  */}
      <div className='mt-32 flex flex-col items-center pb-20 md:mt-60 md:w-screen md:pb-[3.625rem]'>
        <div className='mt-10 w-[61.25rem] font-nexonBold text-[1.875rem] font-bold leading-6 text-[#01111e] md:w-screen md:px-[1.563rem] md:text-[1.25rem] md:leading-[1.875rem]'>
          {text.greeting['12']}
        </div>
        <div className='mt-[1.813rem] w-[61.25rem] whitespace-pre-wrap text-[1.125rem] font-normal leading-[1.856rem] text-[#6b6b6b] md:w-screen md:px-[1.563rem] md:text-[0.875rem] md:leading-[1.444rem]'>
          {text.greeting['13']}
          <div className='flex justify-end'>
            <div className='mt-[0.813rem] md:h-[2.625rem] md:w-[8.438rem]'>
              <Image
                src={Sign1}
                alt='Sign Image1'
                objectFit='cover'
                placeholder='blur'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 사업단장 오문범입니다. */}
      <div className='relative h-[34vw]'>
        <div className='absolute top-0 left-0 -z-[1] mt-[83px] h-full w-full md:hidden'>
          <Image
            src={Bg2}
            alt='Background Image1'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
        </div>
        {/* 재외동포 - 반갑습니다. */}
        <div className='flex justify-center'>
          <div className='flex w-[61.25rem] justify-end'>
            <div className='w-[32rem] pt-[4.214rem] md:w-screen md:pt-[1.875rem]'>
              <div className='font-nexon text-[2.5rem] leading-[3.438rem] text-[#01111e] md:mx-[1.563rem] md:text-xl'>
                {text.greeting['14']}
                <br />
                <span className='font-nexonBold font-bold text-[#2fb6bc]'>
                  {text.greeting['15']}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 재외동포재단 사업단장 오문범입니다. */}
        <div className='flex justify-center'>
          <div className='flex w-[61.25rem] justify-end'>
            <div className='w-[32rem] md:w-screen md:pb-[15.438rem] md:pt-[1.875rem]'>
              <div className='relative hidden md:block'>
                <div className='absolute top-0 left-0 z-[-1] h-[15.375rem] w-full'>
                  <Image
                    src={imgFilter(locale, Bg2m, Bg2mEn, Bg2mRu)}
                    alt='Background Image1'
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                    quality={100}
                  />
                </div>
              </div>

              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mt-40 md:hidden'
              >
                <path d='M2 28V2H28' stroke='#F8F8F8' strokeWidth='4' />
              </svg>
              <div className='ml-[1.625rem] md:hidden'>
                <div className='text-xl font-bold text-white'>
                  {text.greeting['16']}
                </div>
                <div className='mt-[15px] font-nexon text-[2.5rem] leading-[55px] text-white'>
                  {text.greeting['17']}
                  <br />
                  <span className='font-nexonBold font-bold text-[#2fb6bc]'>
                    {text.greeting['18']}
                  </span>
                </div>
              </div>
              <div className='flex translate-y-[-20] justify-end md:hidden'>
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-[4.25rem]'
                >
                  <path d='M26 0L26 26L0 26' stroke='#F8F8F8' strokeWidth='4' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 영상2 */}
      {/* <div className='flex justify-center'>
        <div className='mt-[-269px] h-[35.875rem] w-[61.25rem] bg-slate-400 md:mx-[1.563rem] md:mt-[-36px] md:h-[12.044rem] md:w-screen md:rounded' />
      </div> */}

      {/* 재외동포 - 반갑습니다. */}
      <div className='mt-32 flex flex-col items-center pb-20 md:mt-60 md:w-screen md:pb-[3.625rem]'>
        <div className='mt-10 w-[61.25rem] font-nexonBold text-[1.875rem] font-bold leading-6 text-[#01111e] md:w-screen md:px-[1.563rem] md:text-[1.25rem] md:leading-[1.875rem]'>
          {text.greeting['19']}
        </div>
        <div className='mt-[1.813rem] w-[61.25rem] whitespace-pre-wrap text-[1.125rem] font-normal leading-[1.856rem] text-[#6b6b6b] md:w-screen md:px-[1.563rem] md:text-[0.875rem] md:leading-[1.444rem]'>
          {text.greeting['20']}
          <div className='flex justify-end'>
            <div className='mt-[0.813rem] md:h-[2.625rem] md:w-[8.438rem]'>
              <Image
                src={Sign2}
                alt='Sign Image2'
                objectFit='cover'
                placeholder='blur'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
