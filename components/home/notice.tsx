import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { trimDate } from '@libs/client/utils';
import Link from 'next/link';
import { useEffect } from 'react';
import useSWR from 'swr';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocale } from '@libs/client/useLocale';

export default function Notice() {
  const { locale, text } = useLocale();
  const { data } = useSWR(`${locale}/noticeList/title/created/1/`, () =>
    boardApi.getNoticeList(locale, 'title', 'created', '1', '')
  );

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <Layout padding='pt-[4.625rem] pb-[5.688rem] md:py-10'>
      <div className='flex space-x-20 md:flex-col md:space-x-0'>
        <div className='w-1/2 md:w-full'>
          <div className='flex w-full justify-between'>
            <div
              data-aos='flip-down'
              data-aos-duration='1500'
              className='font-quicksand text-4xl font-bold md:text-2xl'
            >
              {text.main['4']}
            </div>

            <Link href='/support/notice/title/created/1'>
              <a className='flex items-center'>
                <span className='text-lg font-medium md:text-sm'>
                  {text.main['5']}
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-2 w-3 md:ml-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </Link>
          </div>

          <div
            data-aos='fade-up'
            data-aos-duration='1500'
            data-aos-delay='300'
            className='mt-8 grid grid-flow-col grid-rows-5 md:mt-5'
          >
            {data?.fixed.slice(0, 5).map((i: { [key: string]: any }) => (
              <Link href={`/support/notice/detail/${i.id}`} key={i.id}>
                <a className='flex h-20 items-center justify-between border-b border-[#d6d6d6] transition-all hover:opacity-70 md:h-24'>
                  <div className='flex items-center space-x-3 md:flex-col md:items-start md:space-x-0 md:space-y-2.5'>
                    <div className='flex md:items-center md:space-x-1.5'>
                      <div className='rounded bg-[#d60a51] py-[0.312rem] px-[0.812rem] text-[0.812rem] font-bold text-white md:px-1.5 md:text-xs'>
                        {text.main['6']}
                      </div>

                      <div className='hidden text-xs md:block'>
                        {trimDate(i.created, 0, 10)}
                      </div>
                    </div>

                    <div className='text-lg font-medium md:text-sm'>
                      {i.title}
                    </div>
                  </div>
                  <div className='md:hidden'>{trimDate(i.created, 0, 10)}</div>
                </a>
              </Link>
            ))}

            {data?.results
              .slice(0, 5 - data?.fixed.length)
              .map((i: { [key: string]: any }) => (
                <Link href={`/support/notice/detail/${i.id}`} key={i.id}>
                  <a className='flex h-20 items-center justify-between border-b border-[#d6d6d6] transition-all hover:opacity-70 md:h-24'>
                    <div className='flex items-center md:flex-col md:items-start md:space-x-0 md:space-y-2.5'>
                      <div className='hidden text-xs md:block'>
                        {trimDate(i.created, 0, 10)}
                      </div>

                      <div className='text-lg font-medium md:text-sm'>
                        {i.title}
                      </div>
                    </div>

                    <div className='md:hidden'>
                      {trimDate(i.created, 0, 10)}
                    </div>
                  </a>
                </Link>
              ))}
          </div>
        </div>

        <div className='w-1/2 md:mt-10 md:w-full'>
          <div
            data-aos='flip-down'
            data-aos-duration='1500'
            className='font-quicksand text-4xl font-bold md:text-2xl'
          >
            {text.main['7']}
          </div>

          <div
            data-aos='fade-up'
            data-aos-duration='1500'
            data-aos-delay='300'
            className='mt-8 h-[25.625rem] w-full rounded-lg bg-slate-300 md:mt-5 md:h-48'
          ></div>
        </div>
      </div>
    </Layout>
  );
}
