import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import Pagebar from '@components/pagebar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter, trimDate } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const Newsletter: NextPage<IProps> = ({ page }) => {
  const { text } = useLocale();
  const router = useRouter();
  const { locale } = router;
  const { data } = useSWR(`${locale}/newsLetter/${page}`, () =>
    boardApi.getNewsLetterList(locale, page)
  );
  return (
    <>
      <SEO title='연수이야기' />
      <Banner
        title={text.courseStoryHeader['1']}
        navList={[text.courseStoryHeader['2'], text.courseStoryHeader['6']]}
      />
      <MenuBar pageName='뉴스레터' />
      <Layout padding='pt-16 pb-20 md:pt-8 md:pb-15'>
        <div
          className={cls(
            clsFilter(
              locale,
              'font-nexonBold text-4xl',
              'font-notoSans text-3xl',
              'font-notoSans text-4xl'
            ),
            'font-bold leading-[3.15rem] text-[#01111e] md:border-b-2 md:border-[#9e9e9e] md:pb-6 md:text-center md:text-2xl'
          )}
        >
          {text.newsletter['1']}
        </div>

        {/* 게시판 */}
        <div className='mt-[1.281rem] flex h-[3.75rem] w-full items-center border-b border-t border-b-[#9e9e9e] border-t-[#9e9e9e] text-center text-[1.125rem] leading-[1.688rem] text-[#231815] md:hidden'>
          <div className='w-[9%]'>{text.newsletter['2']}</div>
          <div className='grow'>{text.newsletter['3']}</div>
          <div className='w-[11%]'>{text.newsletter['4']}</div>
          <div className='w-[11%]'>{text.newsletter['5']}</div>
          <div className='w-[11%]'>{text.newsletter['6']}</div>
        </div>

        <div>
          {data?.results.map((i: { [key: string]: any }, index: number) => (
            <Link key={i.id} href={`/course-story/newsletter/detail/${i.id}`}>
              <a className='flex h-[3.75rem] w-full items-center border-b-2 border-b-[#ebebeb] text-center text-[1.125rem] leading-[1.688rem] text-[#01111e] transition-opacity hover:opacity-70 md:block md:h-[4.7rem] md:pt-[0.656rem]'>
                <div className='w-[9%] text-[#9e9e9e] md:hidden'>
                  {(+page - 1) * 15 + index + 1}
                </div>
                <div className='grow text-left md:text-[0.875rem]'>
                  {i.title}
                </div>
                <div className='w-[11%] md:hidden'>관리자</div>
                <div className='w-[11%] md:hidden'>
                  {trimDate(i.created, 0, 10)}
                </div>
                <div className='hidden md:flex md:justify-between md:text-[0.7rem]'>
                  <div className=''>{trimDate(i.created, 0, 10)}</div>
                  <div className=''>관리자</div>
                </div>
                <div className='w-[11%] md:hidden'>{i.view_num}</div>
              </a>
            </Link>
          ))}
        </div>

        {/* <div className='flex justify-end'>
          <div className='mt-[2.875rem] flex h-[2.813rem] w-[6.563rem] items-center justify-center rounded bg-[#2fb6bc] text-white'>
            글쓰기
          </div>
        </div> */}

        <div className='mt-24 flex justify-center md:mt-7'>
          <Pagebar
            totalItems={data?.count}
            itemsPerPage={15}
            currentPage={+page}
            url={(page: number) => router.push(`/course-story/gallery/${page}`)}
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

export default Newsletter;
