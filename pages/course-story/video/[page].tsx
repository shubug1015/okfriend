import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import Pagebar from '@components/pagebar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
// import Vimeo from '@u-wave/react-vimeo';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';

interface IProps {
  page: string;
}

const Video: NextPage<IProps> = ({ page }) => {
  const { locale, text } = useLocale();
  const router = useRouter();
  const { data } = useSWR(`${locale}/videoList/${page}`, () =>
    boardApi.getVideoList(locale, page)
  );

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <SEO title='연수이야기' />
      <Banner
        title={text.courseStoryHeader['1']}
        navList={[text.courseStoryHeader['2'], text.courseStoryHeader['3']]}
      />
      <MenuBar pageName='홍보 영상' />
      <Layout padding='pt-16 pb-56 md:pt-6 md:pb-16'>
        <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold text-4xl',
              'font-notoSans text-3xl',
              'font-notoSans text-4xl'
            ),
            'font-bold leading-[3.15rem] text-[#01111e] md:text-center md:text-xl'
          )}
        >
          {text.video['1']}
          <br className='hidden md:block' />
          <span className='text-[#2fb6bc]'> {text.video['2']}</span>
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          data-aos-delay='1000'
          className='mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-5 md:grid-cols-1 md:gap-y-5'
        >
          {data?.results.map((i: { [key: string]: any }) => (
            <div key={i.id} className='h-80 w-full md:h-[11.5rem]'>
              <video playsInline controls className='h-full w-full'>
                <source src={i.url} type='video/mp4' />
              </video>
            </div>
          ))}
        </div>

        <div className='mt-24 flex justify-center md:mt-10'>
          <Pagebar
            totalItems={data?.count}
            itemsPerPage={8}
            currentPage={+page}
            url={(page: number) => router.push(`/course-story/video/${page}`)}
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

export default Video;
