import Image from 'next/image';
import BgImg from '@public/course/header-bg.png';
import Layout from '@layouts/sectionLayout';
import { Fragment } from 'react';
import { cls, clsFilter } from '@libs/client/utils';
import { useLocale } from '@libs/client/useLocale';

interface IProps {
  title: string;
  navList: string[];
}

export default function Banner({ title, navList }: IProps) {
  const { locale } = useLocale();
  return (
    <div
      className={cls(
        clsFilter(locale, 'pb-24', 'pb-24', 'pb-8'),
        'relative flex h-80 items-end md:h-56 md:pb-10'
      )}
    >
      <div className='absolute top-0 left-0 -z-[1] h-full w-full'>
        <Image
          src={BgImg}
          alt='Global Banner Bg'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
      </div>

      <Layout>
        <div
          className={cls(
            clsFilter(locale, 'items-end', 'items-end', 'flex-col space-y-12'),
            'flex justify-between md:flex-col md:items-center md:justify-center md:space-y-4'
          )}
        >
          <div
            className={cls(
              title === '재외동포 대학생 온라인연수 소개'
                ? 'md:text-[1.375rem]'
                : 'md:text-2xl',
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'whitespace-pre-wrap font-nexonBold text-4xl font-bold text-white'
            )}
          >
            {title}
          </div>

          <div
            className={cls(
              clsFilter(locale, '', '', 'justify-end'),
              'flex items-center space-x-2.5 text-white md:text-sm'
            )}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className=' translate-y-px'
            >
              <path
                d='M5 9.6L12 4L19 9.6V18.4C19 18.8243 18.8361 19.2313 18.5444 19.5314C18.2527 19.8314 17.857 20 17.4444 20H6.55556C6.143 20 5.74733 19.8314 5.45561 19.5314C5.16389 19.2313 5 18.8243 5 18.4V9.6Z'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            {navList.map((nav, index) => (
              <Fragment key={index}>
                <svg
                  width='8'
                  height='14'
                  viewBox='0 0 8 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className=' translate-y-px'
                >
                  <path
                    d='M1 13L7 7L1 1'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <div>{nav}</div>
              </Fragment>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
