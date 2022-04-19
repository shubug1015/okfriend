import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { GetServerSidePropsContext, NextPage } from 'next';

interface IProps {
  params: string[];
}

const Newsletter: NextPage<IProps> = ({ params }) => {
  const newsletterList = [
    {
      id: 0,
      title: '2021 재외동포 대학생 온라인연수 뉴스레터 1회차',
      author: '관리자1',
      date: '2022-01-01',
      view: '1',
    },
    {
      id: 1,
      title: '2021 재외동포 대학생 온라인연수 뉴스레터 2회차',
      author: '관리자2',
      date: '2022-01-02',
      view: '2',
    },
    {
      id: 2,
      title: '2021 재외동포 대학생 온라인연수 뉴스레터 3회차',
      author: '관리자3',
      date: '2022-01-03',
      view: '3',
    },
  ];
  return (
    <>
      <SEO title='연수이야기' />
      <Banner title='연수이야기' navList={['연수이야기', '뉴스레터']} />
      <MenuBar pageName='뉴스레터' />
      <Layout>
        <div className='pt-[4.214rem] text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
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
          {newsletterList.map((newsletter) => (
            <div className='flex h-[3.75rem] w-full items-center border-b-2 border-b-[#ebebeb] text-center text-[1.125rem] leading-[1.688rem] text-[#01111e]'>
              <div className='w-[9%] text-[#9e9e9e]'>{newsletter.id}</div>
              <div className='grow text-left'>{newsletter.title}</div>
              <div className='w-[11%]'>{newsletter.author}</div>
              <div className='w-[11%]'>{newsletter.date}</div>
              <div className='w-[11%]'>{newsletter.view}</div>
            </div>
          ))}
        </div>
        <div className='flex justify-end pb-[0.938rem]'>
          <div className='mt-[2.875rem] flex h-[2.813rem] w-[6.563rem] items-center justify-center rounded bg-[#2fb6bc] text-white'>
            글쓰기
          </div>
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

export default Newsletter;
