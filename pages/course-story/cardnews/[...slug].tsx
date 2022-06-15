import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import Pagebar from '@components/pagebar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

interface IProps {
  slug: string[];
}

const Cardnews: NextPage<IProps> = ({ slug }) => {
  const { text } = useLocale();
  const router = useRouter();
  const { locale } = router;
  const [currentTab, setCurrentTab] = useState('전체');
  const [type, page] = slug;
  const { data } = useSWR(`${locale}/cardNews/${type}/${page}`, () =>
    boardApi.getCardNewsList(locale, page, type)
  );
  const toggleTab = (tab: string) => {
    setCurrentTab(tab);
  };
  return (
    <>
      <SEO title='연수이야기' />
      <Banner
        title={text.courseStoryHeader['1']}
        navList={[text.courseStoryHeader['2'], text.courseStoryHeader['5']]}
      />
      <MenuBar pageName='카드뉴스' />
      <Layout padding='pt-16 pb-20 md:pt-8 md:pb-15'>
        <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold text-4xl',
              'font-notoSans text-3xl',
              'font-notoSans text-4xl'
            ),
            'border-b border-[#9e9e9e] pb-[1.281rem] font-bold leading-[3.15rem] text-[#01111e] md:pb-6 md:pt-0 md:text-center md:text-xl'
          )}
        >
          {text.courseStoryHeader['5']}
        </div>

        {/* 서브메뉴 탭 */}
        <div className='mt-[2.531rem] flex space-x-4 text-center text-[1.375rem] font-bold leading-[2.2rem] text-[#9e9e9e] md:mt-4 md:text-base'>
          <Link href='/course-story/cardnews/전체/1'>
            <a>
              <div
                className={cls(
                  type === '전체'
                    ? 'cursor-default border-[#01111e] text-[#01111e]'
                    : 'cursor-pointer border-transparent',
                  'w-[6.5rem] border-b-4 pb-[0.653rem] md:border-b-2'
                )}
              >
                {text.cardnews['2']}
              </div>
            </a>
          </Link>

          <Link href='/course-story/cardnews/KOR/1'>
            <a>
              <div
                className={cls(
                  type === 'KOR'
                    ? 'cursor-default border-[#01111e] text-[#01111e]'
                    : 'cursor-pointer border-transparent',
                  'w-[6.5rem] border-b-4 pb-[0.653rem] md:border-b-2'
                )}
              >
                KOR
              </div>
            </a>
          </Link>

          <Link href='/course-story/cardnews/ENG/1'>
            <a>
              <div
                className={cls(
                  type === 'ENG'
                    ? 'cursor-default border-[#01111e] text-[#01111e]'
                    : 'cursor-pointer border-transparent',
                  'w-[6.5rem] border-b-4 pb-[0.653rem] md:border-b-2'
                )}
              >
                ENG
              </div>
            </a>
          </Link>
        </div>

        {/* 갤러리 이미지 */}
        <div className='mt-[1.875rem] grid grid-cols-4 gap-y-10 gap-x-[1.187rem] md:mt-8 md:grid-cols-2 md:gap-y-[3.3rem] md:gap-x-[0.675rem]'>
          {data?.results.map((i: { [key: string]: any }) => (
            <Link key={i.id} href={`/course-story/cardnews/detail/${i.id}`}>
              <a className='relative h-[17.5rem] w-[17.5rem] transition-opacity hover:opacity-70 md:h-40 md:w-40'>
                <Image
                  src={i.thumbnail}
                  alt='Card News Thumbnail'
                  layout='fill'
                  objectFit='cover'
                  className='rounded'
                />
              </a>
            </Link>
          ))}
        </div>

        <div className='mt-24 flex justify-center md:mt-12'>
          <Pagebar
            totalItems={data?.count}
            itemsPerPage={16}
            currentPage={+page}
            url={(page: number) =>
              router.push(`/course-story/cardnews/${type}/${page}`)
            }
          />
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      slug: ctx.params?.slug,
    },
  };
};

export default Cardnews;
