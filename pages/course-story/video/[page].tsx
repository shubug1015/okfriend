import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { GetServerSidePropsContext, NextPage } from 'next';

interface IProps {
  params: string[];
}

const Video: NextPage<IProps> = ({ params }) => {
  const videoList = [
    {
      id: 0,
      name: 'video1',
    },
    {
      id: 1,
      name: 'video2',
    },
    {
      id: 2,
      name: 'video3',
    },
    {
      id: 3,
      name: 'video4',
    },
    {
      id: 4,
      name: 'video5',
    },
    {
      id: 5,
      name: 'video6',
    },
    {
      id: 6,
      name: 'video7',
    },
    {
      id: 7,
      name: 'video8',
    },
  ];
  return (
    <>
      <SEO title='연수이야기' />
      <Banner title='연수이야기' navList={['연수이야기', '홍보 영상']} />
      <MenuBar pageName='홍보 영상' />
      <Layout>
        <div className='pt-[4.214rem] text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
          재외동포 대학생 온라인연수
          <span className='text-[#2fb6bc]'> 홍보영상</span>
        </div>

        <div className='mt-10 grid grid-cols-2 grid-rows-4 gap-x-5 gap-y-10 pb-[13.709rem]'>
          {videoList.map((video) => (
            <div
              key={video.id}
              className='h-[20.041rem] w-[36.188rem] rounded bg-slate-300'
            />
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

export default Video;
