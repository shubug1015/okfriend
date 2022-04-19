import Link from 'next/link';
import {
  TopLogo1,
  TopLogo2,
  Facebook,
  HeaderLogo,
  Instagram,
  Youtube,
} from '@components/svg';
import { useScroll } from '@libs/client/useScroll';
import { cls } from '@libs/client/utils';
import { useRouter } from 'next/router';

export default function Header() {
  const { y } = useScroll();
  const router = useRouter();
  return (
    <header className='fixed top-0 left-0 z-[9999] h-32 w-screen'>
      <div className='bg-[#f8f8f8]'>
        <div className='mx-auto flex h-12 max-w-[1400px] items-center justify-between'>
          <div className='flex items-center space-x-7'>
            <TopLogo1 />
            <TopLogo2 />
          </div>

          <div className='flex items-center space-x-6'>
            <Instagram />
            <Facebook />
            <Youtube />
            <div className='flex items-center space-x-4 rounded-md border border-[#6b6b6b] py-1.5 pl-4 pr-2 text-xs font-bold text-[#6b6b6b]'>
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

      <div
        className={cls(
          router.pathname === '/course' ||
            router.pathname.includes('/course/detail')
            ? 'bg-white'
            : y === 0
            ? 'bg-transparent text-white'
            : 'bg-[#01111e] text-white',
          'border-b border-[rgba(232,232,232,0.3)] transition-all'
        )}
      >
        <div className='mx-auto flex h-20 max-w-[1400px] items-center justify-between'>
          <Link href='/'>
            <a>
              <HeaderLogo />
            </a>
          </Link>

          <div className='flex items-center space-x-14 text-lg font-medium'>
            <Link href='/greeting'>
              <a>온라인연수 소개</a>
            </Link>
            <Link href='/course'>
              <a>연수실</a>
            </Link>
            <Link href='/'>
              <a>도서관</a>
            </Link>
            <Link href='/course-story/video/1'>
              <a>연수이야기</a>
            </Link>
            <Link href='/'>
              <a>지원센터</a>
            </Link>
          </div>

          <Link href='/login'>
            <a className='rounded-full bg-[#2fb6bc] px-10 py-3 font-bold text-white'>
              로그인
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
