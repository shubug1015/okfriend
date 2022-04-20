import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

interface IProps {
  params: string[];
}

const Gallery: NextPage<IProps> = ({ params }) => {
  const [currrentTab, setCurrentTab] = useState('전체');
  const toggleTab = (tab: string) => {
    setCurrentTab(tab);
    console.log(currrentTab);
  };
  const galleryList = [
    {
      id: 0,
      title: '2021 OKF 1st',
    },
    {
      id: 1,
      title: '2021 OKF 2nd',
    },
    {
      id: 2,
      title: '2021 OKF 3rd',
    },
    {
      id: 3,
      title: '2021 OKF 4th',
    },
    {
      id: 4,
      title: '2021 OKF 5th',
    },
    {
      id: 5,
      title: '2021 OKF 6th',
    },
    {
      id: 6,
      title: '2021 OKF 7th',
    },
    {
      id: 7,
      title: '2021 OKF 8th',
    },
    {
      id: 8,
      title: '2021 OKF 9th',
    },
    {
      id: 9,
      title: '2021 OKF 10th',
    },
    {
      id: 10,
      title: '2021 OKF 11th',
    },
    {
      id: 11,
      title: '2021 OKF 12th',
    },
    {
      id: 12,
      title: '2021 OKF 13th',
    },
    {
      id: 13,
      title: '2021 OKF 14th',
    },
    {
      id: 14,
      title: '2021 OKF 15th',
    },
    {
      id: 15,
      title: '2021 OKF 16th',
    },
  ];
  return (
    <>
      <SEO title='연수이야기' />
      <Banner title='연수이야기' navList={['연수이야기', '연수 갤러리']} />
      <MenuBar pageName='연수 갤러리' />
      <Layout>
        <div className='border-b border-[#9e9e9e] pt-[4.214rem] pb-[1.281rem] text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
          연수 갤러리
        </div>

        {/* 서브메뉴 탭 */}
        <div className='mt-[2.531rem] flex space-x-4 text-center text-[1.375rem] font-bold leading-[2.2rem] text-[#9e9e9e]'>
          <div
            onClick={() => toggleTab('전체')}
            className={cls(
              currrentTab === '전체'
                ? 'cursor-default border-[#01111e] text-[#01111e]'
                : 'cursor-pointer border-transparent',
              'w-[6.5rem] border-b-4 pb-[0.653rem]'
            )}
          >
            전체
          </div>
          <div
            onClick={() => toggleTab('2021')}
            className={cls(
              currrentTab === '2021'
                ? 'cursor-default border-[#01111e] text-[#01111e]'
                : 'cursor-pointer border-transparent',
              'w-[6.5rem] border-b-4 pb-[0.653rem]'
            )}
          >
            2021
          </div>
          <div
            onClick={() => toggleTab('2020')}
            className={cls(
              currrentTab === '2020'
                ? 'cursor-default border-[#01111e] text-[#01111e]'
                : 'cursor-pointer border-transparent',
              'w-[6.5rem] border-b-4 pb-[0.653rem]'
            )}
          >
            2020
          </div>
          <div
            onClick={() => toggleTab('2019')}
            className={cls(
              currrentTab === '2019'
                ? 'cursor-default border-[#01111e] text-[#01111e]'
                : 'cursor-pointer border-transparent',
              'w-[6.5rem] border-b-4 pb-[0.653rem]'
            )}
          >
            2019
          </div>
        </div>

        {/* 갤러리 이미지 */}
        <div>
          <div className='mt-[1.847rem] h-[41.393rem] w-[73.813rem] rounded bg-slate-300' />
        </div>
        <div className='mt-20 grid grid-cols-4 grid-rows-4 gap-y-[1.536rem] gap-x-5 pb-20'>
          {galleryList.map((gallery) => (
            <div key={gallery.id}>
              <div className='h-[17.5rem] w-[17.5rem] rounded bg-slate-300' />
              <div className='mt-4 text-[1.125rem] font-medium leading-[1.8rem]'>
                {gallery.title}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      params: ctx.params?.page,
    },
  };
};

export default Gallery;
