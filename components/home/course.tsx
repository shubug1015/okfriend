import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import Link from 'next/link';
import BgImg from '@public/home/lecture-bg.png';
import { useState } from 'react';
import { cls } from '@libs/client/utils';
import { courseApi } from '@libs/api';
import useSWR from 'swr';

export default function Course() {
  const [category, setCategory] = useState('라이브 차시');
  const request =
    category === '라이브 차시'
      ? '온라인 연수 - LIVE 차시'
      : category === '필수 차시'
      ? '온라인 연수 - 필수차시'
      : '온라인 연수 - 선택차시';
  const { data } = useSWR(`onlineCourseList-${request}`, () =>
    courseApi.getOnlineCourseList(request)
  );

  return (
    <div className='relative py-20 md:py-10'>
      <div className='absolute top-0 left-0 -z-[1] h-full w-full'>
        <Image
          src={BgImg}
          alt='Lecture Background'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
      </div>

      <Layout>
        <div className='flex w-full items-center space-x-7 md:justify-between'>
          <div className='text-3xl font-bold text-white transition-all md:text-[1.375rem]'>
            온라인 연수
          </div>
          {/* <div className='h-6 w-[0.18rem] bg-[#d6d6d6] text-3xl' />
          <div
            onClick={() => {
              setType('사전 온라인 연수');
              setCategory('라이브 차시');
            }}
            className={cls(
              type === '사전 온라인 연수' ? 'text-white' : 'text-[#9e9e9e]',
              'cursor-pointer text-3xl font-bold transition-all'
            )}
          >
            사전 온라인 연수
          </div> */}

          <Link href='/'>
            <a className='hidden rounded-full bg-[#2fb6bc] py-[0.35rem] px-[0.7rem] text-[0.75rem] font-bold text-white md:block'>
              전체보기
            </a>
          </Link>
        </div>

        <div className='mt-8 flex w-full items-center justify-between text-white md:mt-5'>
          <div className='flex space-x-[3.625rem] text-[1.375rem] font-bold md:space-x-8 md:text-base'>
            <div
              onClick={() => setCategory('라이브 차시')}
              className={cls(
                category === '라이브 차시'
                  ? 'border-b-4 border-[#2fb6bc] pb-2 text-[#2fb6bc] md:border-b-2 md:pb-1'
                  : 'text-[#9e9e9e]',
                'cursor-pointer transition-colors'
              )}
            >
              라이브 차시
            </div>
            <div
              onClick={() => setCategory('필수 차시')}
              className={cls(
                category === '필수 차시'
                  ? 'border-b-4 border-[#2fb6bc] pb-2 text-[#2fb6bc] md:border-b-2 md:pb-1'
                  : 'text-[#9e9e9e]',
                'cursor-pointer transition-colors'
              )}
            >
              필수 차시
            </div>
            <div
              onClick={() => setCategory('선택 차시')}
              className={cls(
                category === '선택 차시'
                  ? 'border-b-4 border-[#2fb6bc] pb-2 text-[#2fb6bc] md:border-b-2 md:pb-1'
                  : 'text-[#9e9e9e]',
                'cursor-pointer transition-colors'
              )}
            >
              선택 차시
            </div>
          </div>

          <Link href='/'>
            <a className='rounded-full bg-[#2fb6bc] py-2 px-[1.375rem] text-lg font-bold md:hidden'>
              전체보기
            </a>
          </Link>
        </div>

        <div className='mt-8 grid grid-cols-3 gap-x-5 gap-y-9 md:grid-cols-1 md:gap-x-0 md:gap-y-5'>
          {data?.results.map((i: { [key: string]: any }) => (
            <div key={i.id}>
              <div className='group relative h-[15.625rem] md:h-48'>
                <div className='absolute left-0 top-0 -z-[1] h-full w-full'>
                  <Image
                    src={i.thumbnail}
                    alt='Course Thumbnail'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>
                <div className='invisible flex h-full w-full items-center justify-center bg-[rgba(1,17,30,0.5)] opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
                  <Link key={i.id} href='/'>
                    <a>
                      <div className='translate-y-4 rounded-md border border-white bg-[rgba(0,0,0,0.5)] py-2.5 px-7 text-xl font-bold text-white transition-all group-hover:translate-y-0'>
                        바로가기
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

              <div className='mt-4 flex items-center justify-between md:mt-5'>
                <div className='text-xl font-bold text-white md:text-base'>
                  {i.name}
                </div>
                <div className='flex aspect-square w-7 items-center justify-center rounded-full bg-[#d60a51] pl-0.5 md:w-6'>
                  <svg
                    width='9'
                    height='10'
                    viewBox='0 0 9 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.77246 5.00112L0.11355 10.0003L0.11355 0.00189791L8.77246 5.00112Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </div>
              <div className='mt-1 text-[#d6d6d6] md:mt-0 md:text-sm'>
                {i.tutor.name} 강사
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
