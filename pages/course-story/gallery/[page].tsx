import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import Popup from '@components/course-story/popup';
import Pagebar from '@components/pagebar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const Gallery: NextPage<IProps> = ({ page }) => {
  const { text } = useLocale();
  const router = useRouter();
  const { locale } = router;
  const [currentTab, setCurrentTab] = useState('전체');
  const { data } = useSWR(`${locale}/galleryList/${currentTab}/${page}`, () =>
    boardApi.getGalleryList(locale, currentTab, page)
  );

  const [popup, setPopup] = useState({
    open: false,
    index: -1,
  });

  const toggleTab = (tab: string) => {
    setCurrentTab(tab);
  };
  const closePopup = () => setPopup({ open: false, index: -1 });
  const prevPopup = () =>
    setPopup((prev) => ({ ...prev, index: prev.index - 1 }));
  const nextPopup = () =>
    setPopup((prev) => ({ ...prev, index: prev.index + 1 }));
  return (
    <>
      <SEO title='연수이야기' />
      <Banner
        title={text.courseStoryHeader['1']}
        navList={[text.courseStoryHeader['2'], text.courseStoryHeader['4']]}
      />
      <MenuBar pageName='연수 갤러리' />
      <Layout padding='pt-16 pb-20 md:pt-8 md:pb-10'>
        <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold text-4xl',
              'font-notoSans text-3xl',
              'font-notoSans text-4xl'
            ),
            'border-b border-[#9e9e9e] pb-[1.281rem] font-bold leading-[3.15rem] text-[#01111e] md:pb-7 md:text-center md:text-xl'
          )}
        >
          {text.courseStoryHeader['4']}
        </div>

        {/* 서브메뉴 탭 */}
        <div className='mt-[2.531rem] flex space-x-4 text-center text-[1.375rem] font-bold leading-[2.2rem] text-[#9e9e9e] md:mt-4 md:text-base'>
          {[text.gallery['2'], '2022', '2021', '2019'].map((i) => (
            <div
              key={i}
              onClick={() => toggleTab(i)}
              className={cls(
                currentTab === i
                  ? 'cursor-default border-[#01111e] text-[#01111e]'
                  : 'cursor-pointer border-transparent',
                'w-[6.5rem] border-b-4 pb-[0.653rem] md:border-b-2'
              )}
            >
              {i}
            </div>
          ))}
        </div>

        {/* 갤러리 이미지 */}
        {/* <div>
          <div className='mt-[1.847rem] h-[41.393rem] w-[73.813rem] rounded bg-slate-300 md:mt-8 md:h-[11.5rem] md:w-full' />
        </div> */}
        <div className='mt-20 grid grid-cols-4 gap-y-6 gap-x-5 pb-20 md:mt-12 md:grid-cols-2 md:gap-x-2 md:gap-y-5 md:pb-0'>
          {data?.results.map((i: { [key: string]: any }, index: number) => (
            <div
              key={i.id}
              onClick={() => setPopup({ open: true, index })}
              className='cursor-pointer transition-opacity hover:opacity-70'
            >
              <div className='relative h-[17.5rem] w-[17.5rem] md:h-40 md:w-40'>
                <Image
                  src={i.image}
                  alt='Gallery Image'
                  layout='fill'
                  objectFit='cover'
                  className='rounded'
                />
              </div>
              <div className='mt-4 text-[1.125rem] font-medium leading-[1.8rem] md:mt-2 md:text-[0.8rem]'>
                {i.name}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-24 flex justify-center md:mt-16'>
          <Pagebar
            totalItems={data?.count}
            itemsPerPage={16}
            currentPage={+page}
            url={(page: number) => router.push(`/course-story/gallery/${page}`)}
          />
        </div>
      </Layout>

      {popup.open && (
        <Popup
          data={data?.results}
          index={popup.index || 0}
          closePopup={closePopup}
          prevPopup={prevPopup}
          nextPopup={nextPopup}
        />
      )}
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

export default Gallery;
