import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import useSWR from 'swr';

interface IProps {
  page: string;
}

const Video: NextPage<IProps> = ({ page }) => {
  const { data } = useSWR('videoList', () => boardApi.getVideoList(page));
  console.log(data);
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

        <div className='mt-10 grid grid-cols-2 gap-x-5 gap-y-10 pb-56'>
          {data?.results.map((i: { [key: string]: any }) => (
            <div key={i.id} className='relative h-80 w-full'>
              <video
                key={i.id}
                controls
                // autoPlay
                loop
                playsInline
                className='h-full w-full rounded'
              >
                <source src={i.url} />
              </video>

              <div className='absolute left-8 bottom-8 flex items-center space-x-4'>
                <div className='flex aspect-square w-[2.4rem] items-center justify-center rounded-full border border-white'>
                  <svg
                    viewBox='0 0 9 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-1.5 w-4'
                  >
                    <path
                      d='M8.77246 5.00112L0.11355 10.0003L0.11355 0.00189791L8.77246 5.00112Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <div className='text-lg font-bold text-white'>
                  M.A.G.I.C Project로 글로벌 리더 되기
                </div>
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
      page: ctx.params?.page,
    },
  };
};

export default Video;
