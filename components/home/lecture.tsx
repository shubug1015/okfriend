import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import Link from 'next/link';
import BgImg from '@public/home/lecture-bg.png';
import { useState } from 'react';
import { cls } from '@libs/client/utils';

export default function Lecture() {
  const [type, setType] = useState('온라인 연수');
  const [category, setCategory] = useState('라이브 차시');
  const data = [
    {
      id: 0,
      title: 'M.A.G.I.C Project로 글로벌 리더 되기',
      tutor: '홍길동',
    },
    {
      id: 1,
      title: 'M.A.G.I.C Project로 글로벌 리더 되기',
      tutor: '홍길동',
    },
    {
      id: 2,
      title: 'M.A.G.I.C Project로 글로벌 리더 되기',
      tutor: '홍길동',
    },
    {
      id: 3,
      title: 'M.A.G.I.C Project로 글로벌 리더 되기',
      tutor: '홍길동',
    },
    {
      id: 4,
      title: 'M.A.G.I.C Project로 글로벌 리더 되기',
      tutor: '홍길동',
    },
    {
      id: 5,
      title: 'M.A.G.I.C Project로 글로벌 리더 되기',
      tutor: '홍길동',
    },
  ];

  return (
    <div className='relative py-20'>
      <div className='absolute top-0 left-0 w-full h-full -z-[1]'>
        {/* <div> */}
        <Image
          src={BgImg}
          alt='Lecture Background'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        {/* </div> */}
      </div>

      <Layout>
        <div className='flex w-full items-center space-x-7'>
          <div
            onClick={() => {
              setType('온라인 연수');
              setCategory('라이브 차시');
            }}
            className={cls(
              type === '온라인 연수' ? 'text-white' : 'text-[#9e9e9e]',
              'text-3xl font-bold cursor-pointer transition-all'
            )}
          >
            온라인 연수
          </div>
          <div className='text-3xl bg-[#d6d6d6] h-6 w-[0.18rem]' />
          <div
            onClick={() => {
              setType('사전 온라인 연수');
              setCategory('라이브 차시');
            }}
            className={cls(
              type === '사전 온라인 연수' ? 'text-white' : 'text-[#9e9e9e]',
              'text-3xl font-bold cursor-pointer transition-all'
            )}
          >
            사전 온라인 연수
          </div>
        </div>

        <div className='flex justify-between items-center text-white w-full'>
          <div className='text-[1.375rem] font-bold flex space-x-[3.625rem] mt-8'>
            <div
              onClick={() => setCategory('라이브 차시')}
              className={cls(
                category === '라이브 차시'
                  ? 'text-[#2fb6bc] border-b-4 pb-2 border-[#2fb6bc]'
                  : 'text-[#9e9e9e]',
                'transition-colors cursor-pointer'
              )}
            >
              라이브 차시
            </div>
            <div
              onClick={() => setCategory('필수 차시')}
              className={cls(
                category === '필수 차시'
                  ? 'text-[#2fb6bc] border-b-4 pb-2 border-[#2fb6bc]'
                  : 'text-[#9e9e9e]',
                'transition-colors cursor-pointer'
              )}
            >
              필수 차시
            </div>
            <div
              onClick={() => setCategory('선택 차시')}
              className={cls(
                category === '선택 차시'
                  ? 'text-[#2fb6bc] border-b-4 pb-2 border-[#2fb6bc]'
                  : 'text-[#9e9e9e]',
                'transition-colors cursor-pointer'
              )}
            >
              선택 차시
            </div>
          </div>

          <Link href='/'>
            <a>
              <div className='bg-[#2fb6bc] py-2 px-[1.375rem] rounded-full text-lg font-bold'>
                전체보기
              </div>
            </a>
          </Link>
        </div>

        <div className='grid grid-cols-3 gap-x-5 gap-y-9 mt-8'>
          {data?.map((i) => (
            <div key={i.id}>
              <div className='rounded-md h-[15.625rem] bg-slate-100 group'>
                <div className='w-full h-full bg-[rgba(1,17,30,0.5)] flex justify-center items-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all'>
                  <Link key={i.id} href='/'>
                    <a>
                      <div className='rounded-md bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white border border-white py-2.5 px-7 translate-y-4 group-hover:translate-y-0 transition-all'>
                        바로가기
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

              <div className='flex justify-between items-center mt-4'>
                <div className='text-xl font-bold text-white'>{i.title}</div>
                <div className='bg-[#d60a51] pl-0.5 w-7 aspect-square flex justify-center items-center rounded-full'>
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
              <div className='text-[#d6d6d6] mt-1'>{i.tutor} 강사</div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
