import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import Pagebar from '@components/pagebar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const Cardnews: NextPage<IProps> = ({ page }) => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('전체');
  const { data } = useSWR(`cardNews/${currentTab}`, () =>
    boardApi.getCardNewsList('1', currentTab)
  );
  const toggleTab = (tab: string) => {
    setCurrentTab(tab);
  };
  return (
    <>
      <SEO title='연수이야기' />
      <Banner title='연수이야기' navList={['연수이야기', '카드뉴스']} />
      <MenuBar pageName='카드뉴스' />
      <Layout padding='pt-16 pb-20'>
        <div className='border-b border-[#9e9e9e] pt-[4.214rem] pb-[1.281rem] font-nexonBold text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
          카드뉴스
        </div>

        {/* 서브메뉴 탭 */}
        <div className='mt-[2.531rem] flex space-x-4 text-center text-[1.375rem] font-bold leading-[2.2rem] text-[#9e9e9e]'>
          <div
            onClick={() => toggleTab('전체')}
            className={cls(
              currentTab === '전체'
                ? 'cursor-default border-[#01111e] text-[#01111e]'
                : 'cursor-pointer border-transparent',
              'w-[6.5rem] border-b-4 pb-[0.653rem]'
            )}
          >
            전체
          </div>
          <div
            onClick={() => toggleTab('KOR')}
            className={cls(
              currentTab === 'KOR'
                ? 'cursor-default border-[#01111e] text-[#01111e]'
                : 'cursor-pointer border-transparent',
              'w-[6.5rem] border-b-4 pb-[0.653rem]'
            )}
          >
            KOR
          </div>
          <div
            onClick={() => toggleTab('ENG')}
            className={cls(
              currentTab === 'ENG'
                ? 'cursor-default border-[#01111e] text-[#01111e]'
                : 'cursor-pointer border-transparent',
              'w-[6.5rem] border-b-4 pb-[0.653rem]'
            )}
          >
            ENG
          </div>
        </div>

        {/* 갤러리 이미지 */}
        <div className='mt-[1.875rem] grid grid-cols-4 gap-y-10 gap-x-[1.187rem]'>
          {data?.results.map((i: { [key: string]: any }) => (
            <Link key={i.id} href={`/course-story/cardnews/detail/${i.id}`}>
              <a className='relative h-[17.5rem] w-[17.5rem] transition-opacity hover:opacity-70'>
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

        <div className='mt-24 flex justify-center'>
          <Pagebar
            totalItems={data?.count}
            itemsPerPage={16}
            currentPage={+page}
            url={(page: number) =>
              router.push(`/course-story/cardnews/${page}`)
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
      page: ctx.params?.page,
    },
  };
};

export default Cardnews;
