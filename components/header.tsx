import Link from 'next/link';
import {
  TopLogo1,
  TopLogo2,
  Facebook,
  HeaderLogoWhite,
  HeaderLogoBlack,
  Instagram,
  Youtube,
  MenuBar,
} from '@components/svg';
import { useScroll } from '@libs/client/useScroll';
import { cls } from '@libs/client/utils';
import { useRouter } from 'next/router';
import { IUser } from '@libs/client/useUser';
import useSWR from 'swr';
import axios from 'axios';

export default function Header() {
  const { data, mutate } = useSWR<IUser>('/api/user');
  const { y } = useScroll();
  const router = useRouter();

  const handleLogout = async () => {
    await axios.post('/api/logout');
    mutate({ ok: false, token: null, profile: null });
  };
  return (
    <header className='fixed top-0 left-0 z-[9999] w-screen'>
      <div className='bg-[#f8f8f8]'>
        <div className='mx-auto flex h-12 max-w-[1400px] items-center justify-between md:max-w-[330px]'>
          <div className='flex items-center space-x-7 md:space-x-4'>
            <TopLogo1 />
            <TopLogo2 />
          </div>

          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-6 md:hidden'>
              <Instagram />
              <Facebook />
              <Youtube />
            </div>

            <div className='flex items-center space-x-4 rounded-md border border-[#6b6b6b] py-1.5 pl-4 pr-2 text-xs font-bold text-[#6b6b6b] md:space-x-2 md:pl-2.5'>
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
          router.pathname === '/login' ||
            router.pathname === '/signup' ||
            router.pathname === '/find-id' ||
            router.pathname === '/reset-pw' ||
            router.pathname === '/course' ||
            router.pathname.includes('/course/detail') ||
            router.pathname.includes('/mypage')
            ? 'bg-white'
            : y === 0
            ? 'bg-transparent text-white'
            : 'bg-[#01111e] text-white',
          'border-b border-[rgba(232,232,232,0.3)] transition-all'
        )}
      >
        <div className='mx-auto flex h-20 max-w-[1400px] items-center justify-between md:h-[4.5rem] md:max-w-[330px]'>
          <div className='w-1/4'>
            <Link href='/'>
              <a>
                {router.pathname === '/login' ||
                router.pathname === '/signup' ||
                router.pathname === '/find-id' ||
                router.pathname === '/reset-pw' ||
                router.pathname === '/course' ||
                router.pathname.includes('/course/detail') ||
                router.pathname.includes('/mypage') ? (
                  <HeaderLogoBlack />
                ) : (
                  <HeaderLogoWhite />
                )}
              </a>
            </Link>
          </div>

          <div className='flex w-2/4 items-center justify-center space-x-14 text-lg font-medium md:hidden'>
            <Link href='/course-introduction/greeting'>
              <a>온라인연수 소개</a>
            </Link>
            <Link href='/course'>
              <a>연수실</a>
            </Link>
            <Link href='/library'>
              <a>도서관</a>
            </Link>
            <Link href='/course-story/video/1'>
              <a>연수이야기</a>
            </Link>
            <Link href='/support/notice/title/created/1'>
              <a>지원센터</a>
            </Link>
          </div>

          <div className='flex w-1/4 justify-end space-x-2.5 md:hidden'>
            {data?.token && data?.profile ? (
              <>
                <Link href='/mypage/course/1'>
                  <a className='rounded-full border border-[#2fb6bc] px-10 py-3 font-bold text-[#2fb6bc]'>
                    마이페이지
                  </a>
                </Link>

                <div
                  onClick={handleLogout}
                  className='cursor-pointer rounded-full bg-[#2fb6bc] px-10 py-3 font-bold text-white'
                >
                  로그아웃
                </div>
              </>
            ) : (
              <Link href='/login'>
                <a className='rounded-full bg-[#2fb6bc] px-10 py-3 font-bold text-white'>
                  로그인
                </a>
              </Link>
            )}
          </div>

          <div className='hidden md:block'>
            <MenuBar />
          </div>
        </div>
      </div>
    </header>
  );
}
