import Image from 'next/image';
import Link from 'next/link';
import { cls } from '@libs/utils';
import { TopLogo1, TopLogo2 } from '@libs/logos';
import { Facebook, Instagram, Youtube, Logo } from '@libs/svg';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 z-[9999] h-32 w-screen'>
      <div className='bg-[#f8f8f8]'>
        <div className='mx-auto max-w-[1400px] flex justify-between items-center h-12'>
          <div className='flex items-center space-x-7'>
            <TopLogo1 />
            <TopLogo2 />
          </div>

          <div className='flex items-center space-x-6'>
            <Instagram />
            <Facebook />
            <Youtube />
            <div className='flex items-center space-x-4 border text-xs border-[#6b6b6b] text-[#6b6b6b] font-bold rounded-md pl-4 pr-2 py-1.5'>
              <div>한국어</div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-3'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className='border-b bg-[#01111e] border-[rgba(232,232,232,0.3)]'>
        <div className='mx-auto max-w-[1400px] flex justify-between items-center h-20'>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>

          <div className='flex items-center space-x-14 text-lg font-medium text-white'>
            <Link href='/'>
              <a>온라인연수 소개</a>
            </Link>
            <Link href='/'>
              <a>연수실</a>
            </Link>
            <Link href='/'>
              <a>도서관</a>
            </Link>
            <Link href='/'>
              <a>연수이야기</a>
            </Link>
            <Link href='/'>
              <a>지원센터</a>
            </Link>
          </div>

          <Link href='/'>
            <a className='bg-[#2fb6bc] px-10 py-3 rounded-full text-white font-bold'>
              로그인
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
