import Banner from '@components/banner';
import MenuBar from '@components/course-story/menuBar';
import Pagebar from '@components/pagebar';
import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { boardApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Vimeo from '@u-wave/react-vimeo';

interface IProps {
  page: string;
}

const Video: NextPage<IProps> = ({ page }) => {
  const router = useRouter();
  const { data } = useSWR('videoList', () => boardApi.getVideoList(page));

  return (
    <>
      <SEO title='연수이야기' />
      <Banner title='연수이야기' navList={['연수이야기', '홍보 영상']} />
      <MenuBar pageName='홍보 영상' />
      <Layout padding='pt-16 pb-56'>
        <div className='font-nexonBold text-4xl font-bold leading-[3.15rem] text-[#01111e]'>
          재외동포 대학생 온라인연수
          <span className='text-[#2fb6bc]'> 홍보영상</span>
        </div>

        <div className='mt-10 grid grid-cols-2 gap-x-5 gap-y-10'>
          {data?.results.map((i: { [key: string]: any }) => (
            <div key={i.id} className='h-80 w-full'>
              <Vimeo video={i.url} className='h-full w-full' />
            </div>
          ))}
        </div>

        <div className='mt-24 flex justify-center'>
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
