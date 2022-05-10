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
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const { data, mutate } = useSWR<IUser>('/api/user');
  const { y } = useScroll();
  const [openedTab, setOpenedTab] = useState(-1);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const router = useRouter();

  const navList = [
    {
      id: 0,
      title: '온라인연수 소개',
      isActivated: router.pathname.includes('/course-introduction'),
      subUrls: [
        {
          label: '인사말',
          url: '/course-introduction/greeting',
        },
        {
          label: '개요',
          url: '/course-introduction/summary',
        },
        {
          label: '연수 편성표',
          url: '/course-introduction/schedule',
        },
      ],
    },
    {
      id: 1,
      title: '연수실',
      isActivated:
        router.pathname === '/course' ||
        router.pathname.includes('/course/list'),
      subUrls: [
        {
          label: '연수실',
          url: '/course',
        },
        {
          label: '사전 온라인연수',
          url: '/course/list/pre-online/required/1',
        },
        {
          label: '온라인연수',
          url: '/course/list/online/live/1',
        },
      ],
    },
    {
      id: 2,
      title: '도서관',
      isActivated: router.pathname.includes('/library/123'),
      subUrls: [
        {
          label: '도서관',
          url: '/',
        },
      ],
    },
    {
      id: 3,
      title: '연수이야기',
      isActivated: router.pathname.includes('/course-story'),
      subUrls: [
        {
          label: '홍보 영상',
          url: '/course-story/video/1',
        },
        {
          label: '연수 갤러리',
          url: '/course-story/gallery/1',
        },
        {
          label: '카드뉴스',
          url: '/course-story/cardnews/1',
        },
        {
          label: '뉴스레터',
          url: '/course-story/newsletter/1',
        },
      ],
    },
    {
      id: 4,
      title: '지원센터',
      isActivated: router.pathname.includes('/support'),
      subUrls: [
        {
          label: '공지사항',
          url: '/support/notice/title/created/1',
        },
        {
          label: '연수 갤러리',
          url: '/support/faq',
        },
        {
          label: '카드뉴스',
          url: '/support/library/title/created/1',
        },
        {
          label: '뉴스레터',
          url: '/support/certificate',
        },
      ],
    },
  ];

  const isWhiteBg =
    router.pathname === '/login' ||
    router.pathname === '/signup' ||
    router.pathname === '/find-id' ||
    router.pathname === '/reset-pw' ||
    router.pathname === '/course' ||
    router.pathname.includes('/course/detail') ||
    router.pathname.includes('/mypage');

  const handleLogout = async () => {
    await axios.post('/api/logout');
    mutate({ ok: false, token: null, profile: null });
  };

  useEffect(() => {
    if (mobileMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [mobileMenuOpened]);

  const tabVar = {
    invisible: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.2,
      },
    },
  };
  const mobileMenuVar = {
    invisible: {
      right: '-100vw',
    },
    visible: {
      right: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      right: '-100vw',
      transition: {
        duration: 0.4,
      },
    },
  };
  const mobileTabVar = {
    invisible: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <header className='fixed top-0 left-0 z-[9999] w-screen'>
      {/* 상단 헤더 */}
      <div className='bg-[#f8f8f8] md:bg-white'>
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
      {/* 상단 헤더 */}

      {/* 하단 헤더 */}
      <div
        className={cls(
          isWhiteBg
            ? 'bg-white'
            : y === 0
            ? 'bg-transparent text-white'
            : 'bg-[#01111e] text-white',
          'border-b border-[rgba(232,232,232,0.3)] transition-all'
        )}
      >
        <div className='mx-auto flex h-20 max-w-[1400px] items-center justify-between md:h-[4.5rem] md:max-w-[330px]'>
          {/* 로고 */}
          <div className='w-1/4'>
            <Link href='/'>
              <a>{isWhiteBg ? <HeaderLogoBlack /> : <HeaderLogoWhite />}</a>
            </Link>
          </div>
          {/* 로고 */}

          {/* 메뉴 */}
          <div className='flex h-full w-2/4 items-center justify-center space-x-14 md:hidden'>
            {navList.map((i) => (
              <div
                key={i.id}
                onMouseEnter={() => setOpenedTab(i.id)}
                onMouseLeave={() => setOpenedTab(-1)}
                className='relative h-full'
              >
                <div
                  className={cls(
                    i.isActivated ? 'text-[#2fb6bc]' : '',
                    'flex h-full cursor-default items-center text-lg font-medium'
                  )}
                >
                  {i.title}
                </div>

                <AnimatePresence>
                  {openedTab === i.id && (
                    <motion.div
                      variants={tabVar}
                      initial='invisible'
                      animate='visible'
                      exit='exit'
                      className='absolute top-20 flex w-40 flex-col divide-y divide-[#e8e8e8] rounded-lg bg-white shadow'
                    >
                      {i.subUrls.map((j, index) => (
                        <Link key={index} href={j.url}>
                          <a className='px-4 py-3 text-[#6b6b6b] transition-colors hover:text-[#2fb6bc]'>
                            {j.label}
                          </a>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          {/* 메뉴 */}

          {/* 로그인 & 로그아웃 & 마이페이지 */}
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
          {/* 로그인 & 로그아웃 & 마이페이지 */}

          <div
            onClick={() => setMobileMenuOpened(true)}
            className='hidden md:block'
          >
            <MenuBar />
          </div>
        </div>
      </div>
      {/* 하단 헤더 */}

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {mobileMenuOpened && (
          <motion.div
            variants={mobileMenuVar}
            initial='invisible'
            animate='visible'
            exit='exit'
            className='absolute top-12 h-screen w-screen bg-white pt-2.5'
          >
            <div className='mx-auto max-w-[330px]'>
              <div className='flex items-center justify-between'>
                {/* 로고 */}
                <HeaderLogoBlack />
                {/* 로고 */}

                {/* 로그인 & 로그아웃 & 마이페이지 */}
                <div className='flex items-center space-x-5'>
                  {data?.token && data?.profile ? (
                    <div className='flex items-center space-x-2.5'>
                      <Link href='/mypage/course/1'>
                        <a className='text-sm font-bold text-[#2fb6bc]'>
                          마이페이지
                        </a>
                      </Link>

                      <div className='text-xs text-[#9e9e9e]'>|</div>

                      <div
                        onClick={handleLogout}
                        className='text-sm font-bold text-[#6b6b6b]'
                      >
                        로그아웃
                      </div>
                    </div>
                  ) : (
                    <div className='flex items-center space-x-2.5'>
                      <Link href='/login'>
                        <a className='text-sm font-bold text-[#2fb6bc]'>
                          로그인
                        </a>
                      </Link>

                      <div className='text-xs text-[#9e9e9e]'>|</div>

                      <Link href='signup'>
                        <a className='text-sm font-bold text-[#6b6b6b]'>
                          회원가입
                        </a>
                      </Link>
                    </div>
                  )}

                  <div onClick={() => setMobileMenuOpened(false)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                </div>
                {/* 로그인 & 로그아웃 & 마이페이지 */}
              </div>
            </div>

            <div className='mt-8'>
              {navList.map((i) => (
                <div key={i.id}>
                  <div
                    onClick={() => setOpenedTab(i.id)}
                    className='mx-auto flex h-14 max-w-[330px] items-center justify-between'
                  >
                    <div className='font-medium text-[#6b6b6b]'>{i.title}</div>

                    {openedTab === i.id ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-3 w-5 text-[#9e9e9e]'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M5 15l7-7 7 7'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-3 w-5 text-[#9e9e9e]'
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
                    )}
                  </div>

                  <AnimatePresence>
                    {openedTab === i.id && (
                      <motion.div
                        variants={mobileTabVar}
                        initial='invisible'
                        animate='visible'
                        exit='exit'
                      >
                        {i.subUrls.map((j, index) => (
                          <Link href={j.url} key={index}>
                            <a
                              onClick={() => setMobileMenuOpened(false)}
                              className='flex h-14 items-center bg-[#f8f8f8] font-medium text-[#6b6b6b]'
                            >
                              <div className='mx-auto w-full max-w-[330px]'>
                                {j.label}
                              </div>
                            </a>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 모바일 메뉴 */}
    </header>
  );
}
