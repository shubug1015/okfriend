import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import Pagebar from '@components/pagebar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import { trimDate } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const Newsletter: NextPage<IProps> = ({ page }) => {
  const router = useRouter();
  const { data } = useSWR('newsLetter', () => boardApi.getNewsLetterList(page));
  return (
    <>
      <SEO title='연수이야기' />
      <Banner title='연수이야기' navList={['연수이야기', '뉴스레터']} />
      <MenuBar pageName='뉴스레터' />
      <Layout padding='pt-16 pb-20'>
        <div className='text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
          뉴스레터
        </div>

        {/* 게시판 */}
        <div className='mt-[1.281rem] flex h-[3.75rem] w-full items-center border-b border-t border-b-[#9e9e9e] border-t-[#9e9e9e] text-center text-[1.125rem] leading-[1.688rem] text-[#231815]'>
          <div className='w-[9%]'>번호</div>
          <div className='grow'>제목</div>
          <div className='w-[11%]'>작성자</div>
          <div className='w-[11%]'>작성일</div>
          <div className='w-[11%]'>조회순</div>
        </div>

        <div>
          {data?.results.map((i: { [key: string]: any }, index: number) => (
            <Link key={i.id} href={`/course-story/newsletter/detail/${i.id}`}>
              <a className='flex h-[3.75rem] w-full items-center border-b-2 border-b-[#ebebeb] text-center text-[1.125rem] leading-[1.688rem] text-[#01111e] transition-opacity hover:opacity-70'>
                <div className='w-[9%] text-[#9e9e9e]'>
                  {(+page - 1) * 15 + index + 1}
                </div>
                <div className='grow text-left'>{i.title}</div>
                <div className='w-[11%]'>관리자</div>
                <div className='w-[11%]'>{trimDate(i.created, 0, 10)}</div>
                <div className='w-[11%]'>{i.view_num}</div>
              </a>
            </Link>
          ))}
        </div>

        {/* <div className='flex justify-end'>
          <div className='mt-[2.875rem] flex h-[2.813rem] w-[6.563rem] items-center justify-center rounded bg-[#2fb6bc] text-white'>
            글쓰기
          </div>
        </div> */}

        <div className='mt-24 flex justify-center'>
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
